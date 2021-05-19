import * as Types from './../constants/ActionTypes';

var initialState = [];

const search = (state = initialState, action) => {
    
    switch (action.type) {
        case Types.SEARCH:
            state = action.advisors;
            var keywordNameConvert = action.keyword.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            var result = state.filter((advisor) => {
                var resultCategory = 0;
                resultCategory = advisor.categoriesCollection.items.filter((item) => {
                    var advisorCategoryConvert = item.displayName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                    return ((item.displayName.toLowerCase().indexOf(action.keyword) !== -1)||(advisorCategoryConvert.indexOf(keywordNameConvert)!== -1))
                })
                if(resultCategory.length > 0) {resultCategory = 1}
                var advisorNameConvert = advisor.displayName.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                return ((advisor.displayName.toLowerCase().indexOf(action.keyword) !== -1)||(advisorNameConvert.indexOf(keywordNameConvert)!== -1)||(resultCategory === 1))
            })
            return state = result;
        default : return[...state];
    }
}

export default search;