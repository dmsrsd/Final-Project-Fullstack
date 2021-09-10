import FIREBASE from '../config/FIREBASE';
import {storeData} from '../utils/LocalStorage';

export const REGISTER_USER = 'REGISTER_USER';
export const LOGIN_USER = 'LOGIN_USER';

export const registerUser = (data, password) => {
  return dispatch => {
    //LOADING PROSES
    dispatch({
      type: REGISTER_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    FIREBASE.auth()
      .createUserWithEmailAndPassword(data.email, password)
      .then(success => {
        //GET UID, and Create dataBaru (data+UID)
        const dataBaru = {
          ...data,
          uid: success.user.uid,
        };
        //SAVE to Realtime Database Firebase
        FIREBASE.database()
          .ref('users/' + success.user.uid)
          .set(dataBaru);

        //SUKSES
        dispatch({
          type: REGISTER_USER,
          payload: {
            loading: false,
            data: dataBaru,
            errorMessage: false,
          },
        });

        //SAVE to LOCAL STORAGE with Async Storage
        storeData('user', dataBaru);
      })
      .catch(error => {
        //Error handling
        dispatch({
          type: REGISTER_USER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
        alert(error.message);
      });
  };
};

export const LoginUser = (email, password) => {
  console.log('CEK MASUK ?', email + ' ' + password);
  return dispatch => {
    //LOADING PROSES
    dispatch({
      type: LOGIN_USER,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    FIREBASE.auth()
      .signInWithEmailAndPassword(email, password)
      .then(success => {
        console.log('LOGIN SUKSES', success);
        FIREBASE.database()
          .ref('/users/' + success.user.uid)
          .once('value')
          .then(resDB => {
            console.log('SUKSES CEK LOGIN', resDB);
            // ...

            if (resDB.val()) {
              //SUKSES
              dispatch({
                type: LOGIN_USER,
                payload: {
                  loading: false,
                  data: resDB.val(),
                  errorMessage: false,
                },
              });

              //SAVE to LOCAL STORAGE with Async Storage
              storeData('user', resDB.val());
            } else {
              dispatch({
                type: LOGIN_USER,
                payload: {
                  loading: false,
                  data: false,
                  errorMessage: 'DATA USER TIDAK DITEMUKAN',
                },
              });
              alert('DATA USER TIDAK DITEMUKAN');
            }
          });
      })
      .catch(error => {
        //Error handling
        dispatch({
          type: LOGIN_USER,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
        alert(error.message);
      });
  };
};
