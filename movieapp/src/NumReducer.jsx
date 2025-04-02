import React from 'react'

const NumReducer = (state = 1, action) => {
    switch (action.type) {
        case 'PAGES':
            return state + action.payload;
        default:
            return state;
    }
}
export default NumReducer;
