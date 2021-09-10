import axios from 'axios';
import {API_GET_ALL_PAKETDATA, API_TIMEOUT} from '../utils/constant';

export const GET_PAKETDATA = 'GET_PAKETDATA';

export const getPaketDataList = () => {
  console.log('DATANYA MASUUUK');
  return dispatch => {
    dispatch({
      type: GET_PAKETDATA,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: 'get',
      url: API_GET_ALL_PAKETDATA + 'getAll',
      timeout: API_TIMEOUT,
    })
      .then(response => {
        if (response.status !== 200) {
          dispatch({
            type: GET_PAKETDATA,
            payload: {
              loading: false,
              data: false,
              errorMessage: response,
            },
          });
        } else {
          // SUKSES GET
          console.log('RESPONSE BERHASIL', response.data);
          dispatch({
            type: GET_PAKETDATA,
            payload: {
              loading: false,
              data: response.data ? response.data : [],
              errorMessage: false,
            },
          });
        }
      })
      .catch(error => {
        //ERROR HANDLING
        dispatch({
          type: GET_PAKETDATA,
          payload: {
            loading: false,
            data: false,
            errorMessage: error,
          },
        });
        alert(error);
      });
  };
};
