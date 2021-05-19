import * as Types from './../constants/ActionTypes';

var initialState = [];

const advisors = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_ADVISORS:
            state = action.advisors;
            return [...state]
        default: return[...state];
    }
}

export default advisors;