import axios from 'axios';
import {API_GET_ALL_PULSA, API_TIMEOUT} from '../utils/constant';

export const GET_PULSA = 'GET_PULSA';

export const getPulsaList = () => {
  console.log('DATA PULSA MASUUUK BOSSS');
  return dispatch => {
    //LOADING
    dispatch({
      type: GET_PULSA,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    axios({
      method: 'get',
      url: API_GET_ALL_PULSA + 'getAll',
      timeout: API_TIMEOUT,
    })
      .then(response => {
        if (response.status !== 200) {
          dispatch({
            type: GET_PULSA,
            payload: {
              loading: false,
              data: false,
              errorMessage: response,
            },
          });
        } else {
          console.log('RESPONSE GET DATA PULSA BERHASIL', response.data);
          // SUKSES GET
          dispatch({
            type: GET_PULSA,
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
          type: GET_PULSA,
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
