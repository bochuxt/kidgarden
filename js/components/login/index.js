
import React, { Component } from 'react';
import { Image, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Text, InputGroup, Input, Button, Icon, View } from 'native-base';

import { pushNewRoute, replaceRoute } from '../../actions/route';

import login from './login-theme';
import styles from './styles';

const backgroundImage = require('../../../images/glow2.png');
const logo = require('../../../images/logo.png');

class Login extends Component {

  static propTypes = {
    replaceRoute: React.PropTypes.func,
    pushNewRoute: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      scroll: false,
    };
  }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  pushNewRoute(route) {
    this.props.pushNewRoute(route);
  }

  render() {
    return (
      <Container>
        <Content style={{ backgroundColor: '#384850' }} theme={login} scrollEnabled={this.state.scroll}>
          <Image source={backgroundImage} style={styles.container}>
            <Image source={logo} style={styles.shadow}>
              <View style={styles.bg}>
                <View style={{ marginBottom: 20 }}>
                  <InputGroup >
                    <Icon name="ios-person" />
                    <Input
                      placeholder="EMAIL"
                      onChangeText={email => this.setState({ email })}
                    />
                  </InputGroup>
                </View>

                <View style={{ marginBottom: 30 }}>
                  <InputGroup >
                    <Icon name="ios-unlock-outline" />
                    <Input
                      placeholder="PASSWORD"
                      secureTextEntry
                      onChangeText={password => this.setState({ password })}
                    />
                  </InputGroup>
                </View>

                <Button transparent style={{ alignSelf: 'flex-end', marginBottom: (Platform.OS === 'ios') ? 5 : 0, marginTop: (Platform.OS === 'ios') ? -10 : 0 }}>
                  <Text>
                    Forgot Password
                  </Text>
                </Button>
                <Button rounded block style={{ marginBottom: 20 }} onPress={() => this.replaceRoute('home', { email: this.state.email, password: this.state.password })}>
                  Login
                </Button>
                <Button transparent style={{ alignSelf: 'center' }}>
                  <Text>
                    Sign Up Here
                  </Text>
                </Button>
              </View>
            </Image>
          </Image>
        </Content>
      </Container>
        );
  }
}


function bindActions(dispatch) {
  return {
    replaceRoute: route => dispatch(replaceRoute(route)),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
  };
}

export default connect(null, bindActions)(Login);
