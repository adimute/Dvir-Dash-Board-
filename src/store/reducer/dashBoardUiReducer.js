import * as actionTypes from '../action/actionTypes';

const initialState = {
  loading: false,
};

const dashBoardUiReducer = (state = initialState, action) => { 
  switch (action.type) {
    case actionTypes.SET_LOADING_TRUE:
      return {
        ...state,
        loading: true
      };
      case actionTypes.SET_LOADING_FALSE:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default dashBoardUiReducer