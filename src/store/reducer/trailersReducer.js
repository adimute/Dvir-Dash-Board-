import * as actionTypes from '../action/actionTypes';

const initialState = {
  trailersBigData: false,
};

const trailersReducer = (state = initialState, action) => { 
  switch (action.type) {
    case actionTypes.SET_TRAILERS:
      return {
        ...state,
        trailersBigData: action.payload
      };
    default:
      return state;
  }
};

export default trailersReducer