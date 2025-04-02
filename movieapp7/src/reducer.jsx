import { combineReducers } from '@reduxjs/toolkit';
import ArrayReducer from './ArrayReducer';
import NumReducer from './NumReducer';

const AllReducer = combineReducers({
    ArrayReducer: ArrayReducer,
    NumReducer: NumReducer
})


export default AllReducer;