import React, {Component} from "react";
import {requireNativeComponent, View} from "react-native";

export default class GLScreen extends Component {
    render() {
        return (
            <RCTGLView
                style={{flex: 1}}
                {...this.props}
            />
        );
    }
}
GLScreen.propTypes = {
    ...View.propTypes
};

let RCTGLView = requireNativeComponent(`RCTGLView`, GLScreen, {nativeOnly: {onChange: true}});