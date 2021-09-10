import {UPDATE_PROFILE} from '../../actions/ProfileAction';

const intialState = {
  updateProfileLoading: false,
  updateProfileResult: false,
  updateProfileError: false,
};
export default function (state = intialState, action) {
  switch (action.type) {
    case UPDATE_PROFILE:
      console.log('REDUCER DATA PULSA', action);
      return {
        ...state,
        updateProfileLoading: action.payload.loading,
        updateProfileResult: action.payload.data,
        updateProfileError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
