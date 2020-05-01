import * as actionTypes from './actionTypes';

export const setDrivers = (drivers) => {
  return {
    type: actionTypes.SET_DRIVERS,
    payload: drivers,
  };
};