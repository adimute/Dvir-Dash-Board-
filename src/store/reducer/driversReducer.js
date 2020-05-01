import * as actionTypes from '../action/actionTypes';

const initialState = {
  driversBigData: false,
};

const driversReducer = (state = initialState, action) => { 
  switch (action.type) {
    case actionTypes.SET_DRIVERS:
      return {
        ...state,
        driversBigData: action.payload
      };
    default:
      return state;
  }
};

export default driversReducer