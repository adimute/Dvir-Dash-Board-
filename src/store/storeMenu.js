import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import signInReducer from '../store/reducer/signInReducer';
import dashBoardUiReducer from '../store/reducer/dashBoardUiReducer'
import driversReducer from '../store/reducer/driversReducer'
import trucksReducer from '../store/reducer/trucksReducer'
import managerReducer from '../store/reducer/managerReducer'
import trailersReducer from '../store/reducer/trailersReducer'
import reportsReducer from '../store/reducer/reportsReducer'

const rootReducer = combineReducers({
  ui: dashBoardUiReducer,
  drivers: driversReducer,
  reports: reportsReducer,
  manager: managerReducer,
  authUserReducer: signInReducer,
  trailers: trailersReducer,
  trucks: trucksReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store }



// REDUCER KIK START REDUX
// import * as actionTypes from '../action/actionTypes';

// const initialState = {
//   driversBigData: false,
// };

// const driversReducer = (state = initialState, action) => { 
//   switch (action.type) {
//     case actionTypes.SET_DRIVERS:
//       console.log('drivers reducer ok')
//       return {
//         ...state,
//         driversBigData: action.payload
//       };
//     default:
//       return state;
//   }
// };

// export default driversReducer

// ACTION KIK START REDUX
// import * as actionTypes from './actionTypes';

// export const setManager = (managerData) => {
//   return {
//     type: actionTypes.SET_MANAGER,
//     payload: managerData,
//   };
// };