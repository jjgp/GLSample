/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  View,
  TouchableOpacity,
  Text,
  StyleSheet
} from "react-native";
import MainScreen from "./MainScreen";
import GLScreen from "./GLScreen";

export default class GLSample extends Component {
  constructor() {
    super();
    this.state = {
      screen: "MainScreen"
    };
    this._switchScreen = this._switchScreen.bind(this);
  }

  render() {
    let content =
      this.state.screen === "MainScreen" ? <MainScreen /> : <GLScreen />;
    return (
      <View style={{ flex: 1 }}>
        {content}
        <TouchableOpacity style={styles.button} onPress={this._switchScreen}>
          <Text style={{ fontSize: 20 }}>Switch</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _switchScreen() {
    let newScreen =
      this.state.screen === "MainScreen" ? "GLScreen" : "MainScreen";
    this.setState({
      screen: newScreen
    });
  }
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 20,
    left: 20
  }
});

AppRegistry.registerComponent("GLSample", () => GLSample);
