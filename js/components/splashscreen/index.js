
import React, { Component } from 'react';
import { Image } from 'react-native';

const launchscreen = require('../../../images/launchscreen.png');

export default class SplashPage extends Component {

  static propTypes = {
    navigator: React.PropTypes.shape({}),
  }

  componentWillMount() {
    const navigator = this.props.navigator;
    // console.log('this.props.navigator', this.props.navigator);
    setTimeout(() => {
      navigator.replace({
        id: 'index',
      });
    }, 1500);
  }

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Image source={launchscreen} style={{ flex: 1, height: null, width: null }} />
    );
  }
}
