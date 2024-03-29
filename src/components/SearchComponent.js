import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { logout } from '../actions/LoginActions';

class SearchComponent extends Component {

  onLogoutPressed() {
    this.props.logout();
  }

  render() {
    const { id, email, phoneNumber } = this.props.account;
    return (
      <View>
        <TouchableOpacity style={styles.button} onPress={() => this.onLogoutPressed()}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
        <Text style={styles.label}>Account Kit Id</Text>
        <Text style={styles.text}>{id}</Text>
        <Text style={styles.label}>Email</Text>
        <Text style={styles.text}>{email}</Text>
        <Text style={styles.label}>Phone Number</Text>
        <Text style={styles.text}>
          {phoneNumber ? `${phoneNumber.countryCode} ${phoneNumber.number}` : ''}
        </Text>
      </View>
    );
  }
}

const styles = {
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
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  const { account, token } = state.login;

  return { account, token };
};

export default connect(mapStateToProps, { logout })(SearchComponent);
