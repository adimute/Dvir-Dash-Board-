import * as actionTypes from '../action/actionTypes';

const initialState = {
  token: 'x',
  expiryDate: '',
  userUID: '',
  refreshToken: ''
};

const signInReducer = (state = initialState, action) => { 
  switch (action.type) {
    case actionTypes.SIGN_IN_UPDATE:
      const expirationDate = new Date(new Date().getTime() + parseInt(action.payload.expiresIn) * 1000);
      return {
        ...state,
        token:action.payload.idToken,
        expiryDate: expirationDate,
        userUID: action.payload.localId,
        refreshToken: action.payload.refreshToken
      };
    default:
      return state;
  }
};

export default signInReducer