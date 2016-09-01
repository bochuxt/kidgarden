'use strict';

import React, {Component} from 'react';
import {BackAndroid, Platform, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import _ from 'lodash/core';

import {closeDrawer} from './actions/drawer';
import {popRoute} from './actions/route';

import {Drawer} from 'native-base';
import Navigator from 'Navigator';
import Login from './components/login/';
import Home from './components/home/';
import BlankPage from './components/blankPage/';
import SplashPage from './components/splashscreen/';
import SideBar from './components/sideBar';
import {statusBarColor} from './themes/base-theme';

Navigator.prototype.replaceWithAnimation = function (route) {
  const activeLength = this.state.presentedIndex + 1;
  const activeStack = this.state.routeStack.slice(0, activeLength);
  const activeAnimationConfigStack = this.state.sceneConfigStack.slice(0, activeLength);
  const nextStack = activeStack.concat([route]);
  const destIndex = nextStack.length - 1;
  const nextSceneConfig = this.props.configureScene(route, nextStack);
  const nextAnimationConfigStack = activeAnimationConfigStack.concat([nextSceneConfig]);

  const replacedStack = activeStack.slice(0, activeLength - 1).concat([route]);
  this._emitWillFocus(nextStack[destIndex]);
  this.setState({
    routeStack: nextStack,
    sceneConfigStack: nextAnimationConfigStack
  }, () => {
    this._enableScene(destIndex);
    this._transitionTo(destIndex, nextSceneConfig.defaultTransitionVelocity, null, () => {
      this.immediatelyResetRouteStack(replacedStack);
    });
  });
};

export var globalNav = {};

const searchResultRegexp = /^search\/(.*)$/;

const reducerCreate = params=>{
  const defaultReducer = Reducer(params);
  return (state, action)=>{
    var currentState = state;

    if (currentState){
      while (currentState.children){
        currentState = currentState.children[currentState.index];
      }
    }
    return defaultReducer(state, action);
  };
};

const drawerStyle  = {shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3};

class AppNavigator extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    globalNav.navigator = this._navigator;

    BackAndroid.addEventListener('hardwareBackPress', () => {
      var routes = this._navigator.getCurrentRoutes();

      if (routes[routes.length - 1].id === 'home' || routes[routes.length - 1].id === 'login') {
                // CLose the app
        return false;
      } else {
        this.popRoute();
        return true;
      }

    });
  }

  popRoute() {
    this.props.popRoute();
  }

  openDrawer() {
    this._drawer.open();
  }

  closeDrawer() {
    if (this.props.drawerState === 'opened') {
      this._drawer.close();
      this.props.closeDrawer();
    }
  }

  renderScene(route, navigator) {
    switch (route.id) {
      case 'splashscreen':
        return <SplashPage navigator={navigator} />;
      case 'index':
        return <Index navigator={navigator} />;
      default :
        return <Index navigator={navigator}  />;
    }
  }

  render() {
    return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                type="overlay"
                content={<SideBar navigator={this._navigator} />}
                tapToClose
                acceptPan={false}
                onClose={() => this.closeDrawer()}
                openDrawerOffset={0.2}
                panCloseMask={0.2}
                negotiatePan
            >
                <StatusBar
                    backgroundColor={statusBarColor}
                    barStyle="light-content"
                />
                <Navigator
                    ref={(ref) => {
                      this._navigator = ref;
                    }}
                    configureScene={(route) => {
                      return Navigator.SceneConfigs.FloatFromRight;
                    }}
                    initialRoute={{id: (Platform.OS === 'android') ? 'splashscreen' : 'login', statusBarHidden: true}}
                    renderScene={this.renderScene}
                />
            </Drawer>
        );
  }

  renderScene(route, navigator) {
    switch (route.id) {
      case 'splashscreen':
        return <SplashPage navigator={navigator} />;
      case 'login':
        return <Login navigator={navigator} />;
      case 'home':
        return <Home navigator={navigator} />;
      case 'blankPage':
        return <BlankPage navigator={navigator} />;
      default :
        return <Login navigator={navigator} />;
    }
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    popRoute: () => dispatch(popRoute())
  };
}

const mapStateToProps = (state) => {
  return {
    drawerState: state.drawer.drawerState
  };
};

export default connect(mapStateToProps, bindAction)(AppNavigator);
