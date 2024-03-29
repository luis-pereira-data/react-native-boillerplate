import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import AccountKit, { Color } from 'react-native-facebook-account-kit';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { loginUser, attempGetAccount } from '../actions/LoginActions';

class LoginComponent extends Component {

  componentWillMount() {
    AccountKit.configure({
      theme: styles.accountKit,
      countryWhitelist: ['GB'],
      defaultCountry: 'GB'
    });

    this.props.attempGetAccount();
  }

  onPhoneLoginPressed() {
    this.props.loginUser();
  }

  onEmailLoginPressed() {
    AccountKit.loginWithEmail()
      .then(token => this.onLogin(token))
      .catch((e) => this.onLoginError(e));
  }

  onLoginError(e) {
    console.log('Failed to login', e);
  }

  render() {
    return (
      <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => this.onPhoneLoginPressed()}>
        <Text style={styles.buttonText}>SMS</Text>
      </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.onEmailLoginPressed()}>
          <Text style={styles.buttonText}>Email</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    height: 50,
    width: 300,
    backgroundColor: 'aqua',
    marginBottom: 10
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  label: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  accountKit: {
    backgroundColor: Color.rgba(0, 0, 0, 0.4),
    textColor: Color.hex('#EEEEEE'),
    titleColor: Color.hex('#EEEEEE'),
    backgroundImage: 'backgroundAK',
  },
};

export default connect(null, { loginUser, attempGetAccount })(LoginComponent);
