import * as actionTypes from '../action/actionTypes';

const initialState = {
  reportsBigData: false,
};

const reportsReducer = (state = initialState, action) => { 
  switch (action.type) {
    case actionTypes.SET_REPORTS:
      return {
        ...state,
        reportsBigData: action.payload
      };
    default:
      return state;
  }
};

export default reportsReducer