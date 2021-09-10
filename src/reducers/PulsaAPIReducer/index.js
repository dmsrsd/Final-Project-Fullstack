import {GET_PULSA} from '../../actions/PulsaAPI';

const intialState = {
  getPulsaLoading: false,
  getPulsaResult: false,
  getPulsaError: false,
};
export default function (state = intialState, action) {
  switch (action.type) {
    case GET_PULSA:
      console.log('REDUCER DATA PULSA', action);
      return {
        ...state,
        getPulsaLoading: action.payload.loading,
        getPulsaResult: action.payload.data,
        getPulsaError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
