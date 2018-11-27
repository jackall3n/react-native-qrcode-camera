import React, {Component} from 'react';
import {
    Vibration
} from 'react-native';

import {RNCamera as Camera} from 'react-native-camera';
import PropTypes from 'prop-types';

class QRCodeCamera extends Component {

    onScan = event => {
        this.props.vibrate && Vibration.vibrate();
        this.props.onScan && this.props.onScan(event);
    };

    render() {
        return (
            <Camera style={this.props.style}
                    onBarCodeRead={this.onScan}
            />
        )
    }
}

QRCodeCamera.propTypes = {
    onScan: PropTypes.func,
    style: PropTypes.object,
    vibrate: PropTypes.bool
};

QRCodeCamera.defaultProps = {
    vibrate: true
};

export {QRCodeCamera};
export default QRCodeCamera;