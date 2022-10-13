import {
    FILTER_ADVISOR_BY_NAME, SET_DATA_LIST, SET_INPUT_VALUE
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