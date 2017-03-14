import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './configureStore';
import getTheme from '../native-base-theme/components';
import { StyleProvider } from 'native-base';
import common from '../native-base-theme/variables/commonColor';

function setup():React.Component {
  class Root extends Component {

    constructor() {
      super();
      this.state = {
        isLoading: false,
        store: configureStore(() => this.setState({ isLoading: false })),
      };
    }

    render() {
      return (

        <StyleProvider style={getTheme(common)}>
          <Provider store={this.state.store}>
            <App />
          </Provider>
        </StyleProvider>
      );
    }
  }

  return Root;
}

export default setup;
