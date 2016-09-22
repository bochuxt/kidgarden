
import React, { Component } from 'react';
import { Image } from 'react-native';

const launchscreen = require('../../../images/launchscreen.png');

export default class SplashPage extends Component {

  static render() {
    return (
      <Image source={launchscreen} style={{ flex: 1, height: null, width: null }} />
    );
  }

  propTypes = {
    navigator: React.PropTypes.shape(this.props.navigator),
  }

  componentWillMount() {
    const navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'index',
      });
    }, 1500);
  }
}
