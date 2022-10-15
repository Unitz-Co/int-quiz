import data from '../data.json'
import {
    FILTER_ADVISOR_BY_CATEGORY, FILTER_ADVISOR_BY_NAME,
    FILTER_ADVISOR_BY_STATUS, SET_DATA_LIST, SET_INPUT_VALUE
} from './constants'

const initialState = {
    inputValue: '',
    advisorList: [data.data.advisorProfileCollection.items],
    foundAdvisorList: [],
    checkTypeSearch: 'Tư vấn tâm lý, Xem phong thủy, Tư vấn hôn nhân gia đình, Hon nhan va gia dinh, xem chỉ tay, Xem tướng học'
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
            const [newAdvisorList] = [...state.advisorList]
            const { checkTypeSearch } = state
            const keyword = action.payload

            const check = checkTypeSearch.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
            console.log('check: ', check)

            if (keyword !== '') {
                if (check) {
                    const [advisorList] = state.advisorList
                    // These code for filter advisor by category
                    const results = advisorList.filter(advisor => {
                        const category = advisor.categoriesCollection.items.some(item => {
                            return item.displayName.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
                        })
                        return category && advisor
                    })
                    return {
                        ...state,
                        foundAdvisorList: [results]
                    }
                } else {
                    const [advisorList] = state.advisorList
                    // These code for filter advisor by name
                    const results = advisorList.filter(advisor => {
                        return advisor.displayName.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
                    })
                    return {
                        ...state,
                        foundAdvisorList: [results]
                    }
                }
            } else {
                return {
                    ...state,
                    foundAdvisorList: [data.data.advisorProfileCollection.items]
                }
            }

        case FILTER_ADVISOR_BY_STATUS:
            const status = action.payload
            if (status !== '') {
                const [advisorList] = state.advisorList
                if (status) {
                    const results = advisorList.filter(advisor => {
                        return advisor.isOnline === Boolean(status)
                    })
                    return {
                        ...state,
                        foundAdvisorList: [results]
                    }
                } else {
                    const results = advisorList.filter(advisor => {
                        return advisor.isOnline === Boolean(status)
                    })
                    return {
                        ...state,
                        foundAdvisorList: [results]
                    }
                }
            } else {
                return {
                    ...state,
                    foundAdvisorList: [data.data.advisorProfileCollection.items]
                }
            }
        case FILTER_ADVISOR_BY_CATEGORY:
            const query = action.payload
            if (query !== '') {
                const [advisorList] = state.advisorList
                // These code for filter advisor by category
                const results = advisorList.filter(advisor => {
                    const category = advisor.categoriesCollection.items.some(item => {
                        return item.sys.id === query
                    })
                    return category && advisor
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