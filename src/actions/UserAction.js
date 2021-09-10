export const GET_USER = 'GET_USERS';

export const getUser = () => {
  return dispatch => {
    dispatch({
      type: GET_USER,
      payload: {
        nama: 'Bopak Castello',
        nomorHp: '0812345678',
        email: 'bopak@yahoo.com',
      },
    });
  };
};
