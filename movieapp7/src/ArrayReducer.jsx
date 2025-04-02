import React from 'react'
const ArrayReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADDLIST':
            return [...state, action.payload];
        case 'REMOVELIST':
            return state.filter((item) => item !== action.payload);
        default:
            return state;
    }
}
export default ArrayReducer;

