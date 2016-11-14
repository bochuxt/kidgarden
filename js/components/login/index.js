
import React, { Component } from 'react';
import { Image, Platform } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Content, Text, InputGroup, Input, Button, Icon, View } from 'native-base';

import login from './login-theme';
import styles from './styles';

const {
  replaceAt,
} = actions;

const backgroundImage = require('../../../images/glow2.png');
const logo = require('../../../images/logo.png');

class Login extends Component {

  static propTypes = {
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      scroll: false,
    };
  }

  replaceAt(route) {
    this.props.replaceAt('login', { key: route }, this.props.navigation.key);
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
                <Button rounded block style={{ marginBottom: 20 }} onPress={() => this.replaceAt('home')}>
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
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindActions)(Login);
