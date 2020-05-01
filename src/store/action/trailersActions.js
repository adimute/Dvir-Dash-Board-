import * as actionTypes from './actionTypes';

export const setTrailers = (trilers) => {
  return {
    type: actionTypes.SET_TRAILERS,
    payload: trilers,
  };
};