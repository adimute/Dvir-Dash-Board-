import * as actionTypes from './actionTypes';

export const setManager = (managerData) => {
  return {
    type: actionTypes.SET_MANAGER,
    payload: managerData,
  };
};