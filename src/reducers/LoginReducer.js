import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from '../actions/types';

const INITIAL_STATE = {
  account: null,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log(action);
      return { ...state, ...INITIAL_STATE, account: action.payload.account };
    case LOGIN_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '' };
    case LOGOUT_SUCCESS:
        console.log(action);
        return { ...state, account: null };
    case LOGOUT_FAIL:
        return { ...state };
    default:
      return state;
  }
};
