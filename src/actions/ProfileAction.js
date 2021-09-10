import FIREBASE from '../config/FIREBASE';
import {storeData} from '../utils/LocalStorage';

export const UPDATE_PROFILE = 'UPDATE_PROFILE';

export const updateProfile = data => {
  return dispatch => {
    //LOADING
    dispatch({
      type: UPDATE_PROFILE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    const dataBaru = {
      uid: data.uid,
      nama: data.nama,
      email: data.email,
      nomorHp: data.nomorHp,
      status: 'user',
      avatar: data.updateAvatar ? data.avatarForDB : data.avatarLama,
    };

    FIREBASE.database()
      .ref('users/' + dataBaru.uid)
      .update(dataBaru)
      .then(response => {
        dispatch({
          type: UPDATE_PROFILE,
          payload: {
            loading: false,
            data: response ? response : [],
            errorMessage: false,
          },
        });
        //Save To Local Storage
        storeData('user', dataBaru);
      })
      .catch(error => {
        //Error handling
        dispatch({
          type: UPDATE_PROFILE,
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
