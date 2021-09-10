import {REGISTER_USER, LOGIN_USER} from '../../actions/AuthAction';

const intialState = {
  registerLoading: false,
  registerResult: false,
  registerError: false,

  loginLoading: false,
  loginResult: false,
  loginError: false,
};
export default function (state = intialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      console.log('REDUCER REGISTER', action);
      return {
        ...state,
        registerLoading: action.payload.loading,
        registerResult: action.payload.data,
        registerError: action.payload.errorMessage,
      };
    case LOGIN_USER:
      console.log('REDUCER LOGIN', action);
      return {
        ...state,
        loginLoading: action.payload.loading,
        loginResult: action.payload.data,
        loginError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
