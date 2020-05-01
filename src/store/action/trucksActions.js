import * as actionTypes from './actionTypes';

export const setTrucks = (trucks) => {
  return {
    type: actionTypes.SET_TRUCKS,
    payload: trucks,
  };
};