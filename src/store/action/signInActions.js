import * as actionTypes from './actionTypes';

export const signInUpdate = (userdata) => {
  return {
    type: actionTypes.SIGN_IN_UPDATE,
    payload: userdata,
  };
};