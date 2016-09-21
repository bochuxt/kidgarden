
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Text } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute, replaceRoute } from '../../actions/route';


import theme from '../../themes/base-theme';
import styles from './styles';

const backgroundImage = require('../../../images/glow2.png');

class Home extends Component {

  static propTypes = {
    replaceRoute: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  popRoute() {
    this.props.popRoute();
  }

  render() {
    return (
      <Container theme={theme} style={{ backgroundColor: '#384850' }}>
        <Image source={backgroundImage} style={styles.container} >
          <Header>
            <Button transparent>
              <Text />
            </Button>

            <Title>Home</Title>

            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Header>

          <Content style={{ backgroundColor: 'transparent' }} padder>
            <Text>
              Create Something Awesome . . .
            </Text>

            <Button transparent large style={styles.roundedButton} onPress={() => this.replaceRoute('login')}>
              <Icon name="ios-close-outline" />
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
    popRoute: () => dispatch(popRoute()),
    replaceRoute: route => dispatch(replaceRoute(route)),
  };
}

export default connect(null, bindAction)(Home);
