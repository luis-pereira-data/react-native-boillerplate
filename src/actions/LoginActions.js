import { Actions } from 'react-native-router-flux';
import AccountKit from 'react-native-facebook-account-kit';
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
} from './types';

export const attempGetAccount = () => {

  return (dispatch) => {

      AccountKit.getCurrentAccessToken()
        .then(token => {
        if (token) {
          loginSuccess(dispatch, token);
        } else {
          loginFail(dispatch);
        }
      })
      .catch(() => loginFail(dispatch));
  };
};

export const loginUser = () => {
  return (dispatch) => {
    AccountKit.loginWithPhone()
      .then(token => {
         if (!token) {
           loginFail(dispatch);
         } else {
            loginSuccess(dispatch, token);
          }
       })
      .catch(() => loginFail(dispatch));
  };
};

const loginFail = (dispatch) => {
  dispatch({ type: LOGIN_FAIL });
};

const loginSuccess = (dispatch, token) => {
  AccountKit.getCurrentAccount()
    .then((account) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token, account }
      });
      Actions.search();
    });
};

export const logout = () => {
  return (dispatch) => {
    AccountKit.logout()
      .then(() => {
        dispatch({ type: LOGOUT_SUCCESS });
          Actions.login();
    })
    .catch(() => {
      dispatch({ type: LOGOUT_FAIL });
        Actions.login();
      });
  };
};
