
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Icon, ListItem, Content, Thumbnail, Left, Right, Body } from 'native-base';

import navigateTo from '../../actions/sideBarNav';
import styles from './style';

const logo = require('../../../images/icon2.png');

class SideBar extends Component {

  static propTypes = {
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Content style={{ backgroundColor: '#252A30' }} >
        <Thumbnail
          style={{ alignSelf: 'center', marginTop: 20, marginBottom: 15, resizeMode: 'contain', height: 200, width: 200 }}
          circular
          source={logo}
        />
        <ListItem button onPress={() => this.navigateTo('home')} icon style={styles.links} >
          <Left>
            <Icon active name="home" />
          </Left>
          <Body>
            <Text >Home</Text>
          </Body>
          <Right />
        </ListItem>
        <ListItem button onPress={() => this.navigateTo('blankPage')} icon style={styles.links}>
          <Left>
            <Icon active name="chatboxes" />
          </Left>
          <Body>
            <Text>Blank Page</Text>
          </Body>
          <Right />
        </ListItem>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(SideBar);
