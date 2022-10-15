import {
    FILTER_ADVISOR_BY_CATEGORY,
    FILTER_ADVISOR_BY_NAME, FILTER_ADVISOR_BY_STATUS, SET_DATA_LIST, SET_INPUT_VALUE
} from './constants'

export const setInputValue = payload => ({
    type: SET_INPUT_VALUE,
    payload
})

export const setDataList = payload => ({
    type: SET_DATA_LIST,
    payload

})

export const filterAdvisorByName = payload => ({
    type: FILTER_ADVISOR_BY_NAME,
    payload
})

export const filterAdvisorByStatus = payload => ({
    type: FILTER_ADVISOR_BY_STATUS,
    payload
})

export const filterAdvisorByCategory = payload => ({
    type: FILTER_ADVISOR_BY_CATEGORY,
    payload
})
