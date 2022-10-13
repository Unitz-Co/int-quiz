import data from '../data.json'
import { FILTER_ADVISOR_BY_NAME, SET_DATA_LIST, SET_INPUT_VALUE } from './constants'

const initialState = {
    inputValue: '',
    advisorList: [data.data.advisorProfileCollection.items],
    foundAdvisorList: []
}

const reducer = (state, action) => {
    switch (action.type) {
        case SET_DATA_LIST:
            return {
                ...state,
                foundAdvisorList: [...state.advisorList]
            }
        case SET_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.payload
            }
        case FILTER_ADVISOR_BY_NAME:
            const keyword = action.payload

            if (keyword !== '') {
                const [advisorList] = state.advisorList
                const results = advisorList.filter(advisor => {
                    // const category = advisor.categoriesCollection.items.map(item => {
                    //     return item.displayName.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
                    // })

                    return advisor.displayName.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
                })
                return {
                    ...state,
                    foundAdvisorList: [results]
                }
            } else {
                return {
                    ...state,
                    foundAdvisorList: [data.data.advisorProfileCollection.items]
                }
            }
        default:
            throw new Error('Error has found. Please check action case...!')
    }
}

export { initialState }
export default reducer