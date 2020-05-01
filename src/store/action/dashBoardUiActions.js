import * as actionTypes from './actionTypes';

export const setLoadingTrue = () => {
  return {
    type: actionTypes.SET_LOADING_TRUE,
  };
};


export const setLoadingFalse = () => {
  return {
    type: actionTypes.SET_LOADING_FALSE,
  };
};