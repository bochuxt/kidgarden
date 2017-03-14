
import React, { Component } from 'react';
import { Image, Platform } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Content, Text, Item, Input, Button, Icon, View, Form } from 'native-base';

import styles from './styles';

const {
  pushRoute,
  replaceAtIndex,
} = actions;

const backgroundImage = require('../../../images/glow2.png');
const logo = require('../../../images/logo.png');

class Login extends Component {

  static propTypes = {
    replaceAtIndex: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
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

  replaceAtIndex(route) {
    this.props.replaceAtIndex( this.props.navigation.index, { key: route }, this.props.navigation.key);
  }

  pushRoute(route) {
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }

  render() {
    return (
      <Container>

        <Content style={{ backgroundColor: '#384850' }} scrollEnabled={this.state.scroll}>
          <Image source={backgroundImage} style={styles.container}>
            <Image source={logo} style={styles.shadow}>
              <View style={styles.bg}>
                    <Item underline style={{ marginBottom: 20 }}>
                      <Icon active name="person" />
                      <Input
                        autoCorrect={false}
                        placeholder="Email"
                        placeholderTextColor="#FFF"
                        onChangeText={email => this.setState({ email })}
                      />
                    </Item>
                    <Item underline style={{ marginBottom: 30 }}>
                      <Icon name="unlock" />
                      <Input
                        placeholder="Password"
                        placeholderTextColor="#FFF"
                        secureTextEntry
                        onChangeText={password => this.setState({ password })}
                      />
                    </Item>
                <Button transparent style={{ alignSelf: 'flex-end', marginBottom: (Platform.OS === 'ios') ? 5 : 0, marginTop: (Platform.OS === 'ios') ? -10 : 0 }}>
                  <Text>
                    Forgot Password
                  </Text>
                </Button>
                <Button rounded block style={{ marginBottom: 10 }} onPress={() => this.replaceAtIndex('home')}>
                  <Text style={{ color:'#00C497' }}>
                    Login
                  </Text>
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
    replaceAtIndex: (routeKey, route, key) => dispatch(replaceAtIndex(routeKey, route, key)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindActions)(Login);
