import {
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  // LOGOUT_FAILED,
  // LOGOUT_SUCCESSFUL
} from '../actions/actionTypes';

const inititalState = {
  isLoggedIn: false,
};

const loginReducer = (state = inititalState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
