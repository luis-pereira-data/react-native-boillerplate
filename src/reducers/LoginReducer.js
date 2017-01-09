import { LOGIN_FAIL, LOGIN_SUCCESS } from '../actions/LoginActions';

const INITIAL_STATE = {
  account: null,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, ...INITIAL_STATE, account: action.payload };
    case LOGIN_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '' };
    default:
      return state;
  }
};
