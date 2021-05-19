import * as Types from './../constants/ActionTypes';
import callApi from './../utils/apiCaller';

//Advisor
export const actFetchAdvisorsRequest = () => {
    return (dispatch) => {
        return callApi('advisors', 'GET', null).then(res => {
            dispatch(actFetchAdvisors(res.data[0].data.advisorProfileCollection.items))
        });
    }
}

export const actFetchAdvisors = (advisors) => {
    return {
        type: Types.FETCH_ADVISORS,
        advisors
    };
}

export const actSearchAdvisorRequest = (keyword) => {
    return (dispatch) => {
        return callApi('advisors', 'GET', null).then(res => {
            dispatch(actSearchAdvisor(res.data[0].data.advisorProfileCollection.items, keyword))
            dispatch(actSearchKeyword(keyword))
        });
    }
}

export const actSearchAdvisor = (advisors,keyword) => {
    return {
        type: Types.SEARCH,
        advisors,
        keyword
    }
}

export const actSearchKeyword = (keyword) => {
    return {
        type: Types.SEARCH_KEYWORD,
        keyword
    }
}