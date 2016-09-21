
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Icon, List, ListItem, Content, Thumbnail } from 'native-base';

import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute } from '../../actions/route';

import styles from './style';

const logo = require('../../../images/icon2.png');

class SideBar extends Component {

  static propTypes = {
    closeDrawer: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.closeDrawer();
    this.props.replaceOrPushRoute(route);
  }

  render() {
    return (
      <Content style={{ backgroundColor: '#252A30' }} >
        <Thumbnail size={200} style={{ alignSelf: 'center', marginTop: 20, marginBottom: 15, resizeMode: 'contain' }} circular source={logo} />
        <List foregroundColor={'white'} >
          <ListItem button onPress={() => this.navigateTo('home')} iconLeft style={styles.links} >
            <Icon name="ios-home" />
            <Text >Home</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('blankPage')} iconLeft style={styles.links}>
            <Icon name="ios-chatboxes" />
            <Text>Blank Page</Text>
          </ListItem>
        </List>
      </Content>
        );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route)),
  };
}

export default connect(null, bindAction)(SideBar);
