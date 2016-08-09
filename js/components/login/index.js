'use strict';

import React, { Component } from 'react';
import { Image, Platform } from 'react-native';
import { connect } from 'react-redux';

import { pushNewRoute, replaceRoute } from '../../actions/route';
import { Container, Content, Text, InputGroup, Input, Button, Icon, View } from 'native-base';

import login from './login-theme';
import styles from './styles';

class Login extends Component {

	constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            scroll: false
        };
    }

    replaceRoute(route, passProps) {
        this.props.replaceRoute(route, passProps);
    }

    pushNewRoute(route, passProps) {
         this.props.pushNewRoute(route, passProps);
    }

    render() {
        return (
            <Container>
                <Content style={{backgroundColor: '#384850'}} theme={login} scrollEnabled={this.state.scroll}>
                    <Image source={require('../../../images/glow2.png')} style={styles.container}>
                        <Image source={require('../../../images/logo.png')} style={styles.shadow}>
                            <View style={styles.bg}>
                                <View style={{marginBottom: 20}}>
                                    <InputGroup >
                                        <Icon name='ios-person' />
                                        <Input 
                                            placeholder='EMAIL' 
                                            onChangeText={(email) => this.setState({email})}
                                        />
                                    </InputGroup>
                                </View>

                                <View style={{marginBottom: 30}}>
                                    <InputGroup >
                                        <Icon name='ios-unlock-outline' />
                                        <Input
                                            placeholder='PASSWORD'
                                            secureTextEntry={true}
                                            onChangeText={(password) => this.setState({password})}
                                        />
                                    </InputGroup>
                                </View>

                                <Button transparent style={{alignSelf: 'flex-end',  marginBottom: (Platform.OS === 'ios' ) ? 5 : 0, marginTop: (Platform.OS === 'ios' ) ? -10 : 0}}>
                                    <Text>
                                        Forgot Password
                                    </Text>
                                </Button>
                                <Button rounded block style={{marginBottom: 20}} onPress={() => this.replaceRoute('home', {email: this.state.email, password: this.state.password})}>
                                    Login
                                </Button>
                                <Button transparent style={{alignSelf: 'center'}}>
                                    <Text>
                                        Sign Up Here
                                    </Text>
                                </Button>
                            </View>
                        </Image>
                    </Image>
                </Content>
            </Container>
        )
    }
}


function bindActions(dispatch){
    return {
        replaceRoute:(route, passProps)=>dispatch(replaceRoute(route, passProps)),
        pushNewRoute:(route, passProps)=>dispatch(pushNewRoute(route, passProps))
    }
}

export default connect(null, bindActions)(Login);
