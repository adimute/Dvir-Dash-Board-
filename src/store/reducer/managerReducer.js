import * as actionTypes from '../action/actionTypes';

const initialState = {
  managerBigData: false,
};

const managerReducer = (state = initialState, action) => { 
  switch (action.type) {
    case actionTypes.SET_MANAGER:
      return {
        ...state,
        managerBigData: action.payload
      };
    default:
      return state;
  }
};

export default managerReducer