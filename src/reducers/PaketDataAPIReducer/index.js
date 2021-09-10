import {GET_PAKETDATA} from '../../actions/PaketDataAPI';

const intialState = {
  getPaketDataLoading: false,
  getPaketDataResult: false,
  getPaketDataError: false,
};
export default function (state = intialState, action) {
  switch (action.type) {
    case GET_PAKETDATA:
      console.log('REDUCER PAKET DATA', action);
      return {
        ...state,
        getPaketDataLoading: action.payload.loading,
        getPaketDataResult: action.payload.data,
        getPaketDataError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
