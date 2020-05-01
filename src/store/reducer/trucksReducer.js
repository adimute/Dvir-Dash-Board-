import * as actionTypes from '../action/actionTypes';

const initialState = {
  trucksBigData: false,
};

const trucksReducer = (state = initialState, action) => { 
  switch (action.type) {
    case actionTypes.SET_TRUCKS:
      return {
        ...state,
        trucksBigData: action.payload
      };
    default:
      return state;
  }
};

export default trucksReducer