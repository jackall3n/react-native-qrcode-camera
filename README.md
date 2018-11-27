# React Native QRCode Camera [![npm version](https://badge.fury.io/js/react-native-qrcode-camera.svg)](http://badge.fury.io/js/react-native-qrcode-camera) [![npm downloads](https://img.shields.io/npm/dm/react-native-qrcode-camera.svg)](https://www.npmjs.com/package/react-native-qrcode-camera)

## Dependencies
[React Native Camera](https://www.npmjs.com/package/react-native-camera)

## Installation
Please follow the instructions on installing the [React Native Camera](https://github.com/react-native-community/react-native-camera#getting-started)

## Example Usage

```js
import React, { Component } from 'react';
import QRCodeCamera from 'react-native-qrcode-camera';

class Camera extends Component {
    
    onScan = event => {
        console.log(event.rawData);
    }
    
    render() {
        return (
            <QRCodeCamera onScan={this.onScan}
                          vibrate={true}
                          style={{ flex: 1 }} />
        );
    } 
}
```