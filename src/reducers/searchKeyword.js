import * as Types from '../constants/ActionTypes';

var initialState = {
    id: 0,
    keyword: ''
};

const searchKeyword = (state = initialState, action) => {
    switch (action.type) {
        case Types.SEARCH_KEYWORD:
            state.id = Math.floor(Math.random()*1000);
            state.keyword = action.keyword;
            return state;
        default: return state;
    }
}

export default searchKeyword;