
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, Text, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';

import styles from './styles';

const {
  reset,
} = actions;

const glow2 = require('../../../images/glow2.png');

class Home extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  render() {
    return (
      <Container style={{ backgroundColor: '#384850' }}>
        <Image source={glow2} style={styles.container} >
          <Header >
            <Left />
            <Body>
              <Title>Home</Title>
            </Body>
            <Right>
              <Button transparent onPress={this.props.openDrawer} >
                <Icon active name="menu" style={{ fontSize: 30, lineHeight: 32 }} />
              </Button>
            </Right>
          </Header>

          <Content style={{ backgroundColor: 'transparent' }} padder>
            <Text>
              Create Something Awesome . . .
            </Text>

            <Button
              transparent
              large
              style={styles.roundedButton}
              onPress={() => this.props.reset(this.props.navigation.key)}
            >
              <Icon name="close" style={styles.closeIcon} />
            </Button>
          </Content>
        </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    reset: key => dispatch(reset([{ key: 'login' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Home);
