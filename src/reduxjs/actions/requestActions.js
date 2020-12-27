import api from 'helpers/api/api';

// Action Types
export const SET_LOGIN = 'SET_LOGIN';
export const UNSET_LOGIN = 'UNSET_LOGIN';
export const SET_IMAGE_DATA = 'SET_IMAGE_DATA';

// Action Creator
export function req(params, data) {
  return (dispatch) => {
    api
      .get('/api/users?page=2', params)
      .then((response) => {
        dispatch({ type: SET_LOGIN, data: true });
        dispatch({ type: SET_IMAGE_DATA, data: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
    api
      .post('/api/users', data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
