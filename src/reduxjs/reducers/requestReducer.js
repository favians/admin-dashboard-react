import { SET_LOGIN, UNSET_LOGIN, SET_IMAGE_DATA } from 'reduxjs/actions/requestActions';

// State Types
const initialState = {
  loginStatus: false,
  imagesData: [],
};

const requestReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGIN:
      return { ...state, loginStatus: action.data };
    case UNSET_LOGIN:
      return { ...state, loginStatus: action.data };
    case SET_IMAGE_DATA:
      return { ...state, imagesData: action.data };
    default:
      return { ...state };
  }
};

export default requestReducer;
