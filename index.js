import React, {Component} from 'react';
import {RNCamera as Camera} from 'react-native-camera';

class QRCamera extends Component {
    render() {
        return (
            <Camera />
        )
    }
}

QRCamera.propTypes = {};

QRCamera.defaultProps = {};

export {QRCamera};
export default QRCamera;