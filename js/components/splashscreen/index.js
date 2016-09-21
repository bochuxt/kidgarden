
import React, { Component } from 'react';
import { Image } from 'react-native';

const launchscreen = require('../../../images/launchscreen.png');

export default class SplashPage extends Component {

  static propTypes = {
    navigator: React.PropTypes.object,
  }

  static render() {
    return (
      <Image source={launchscreen} style={{ flex: 1, height: null, width: null }} />
    );
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
