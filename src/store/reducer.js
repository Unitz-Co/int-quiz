import { CATEGORY, NAME, STATUS, VIEW } from "./actionTypes"

const initialState = {
    
    status: 'all',
    name: '',
    category: 'all',
    view: 'vertical'
}
// vertical and horizontal

export default function reducer(state = initialState, actions) {
    // const {status, name, category, view} = actions.payload;
    switch(actions.type) {
        case STATUS: 
            return {...state, status: actions.payload}
        case NAME: 
            return {...state, name: actions.payload}
        case CATEGORY:
            return {...state, category: actions.payload}
        case VIEW: 
            return {...state, view: actions.payload}
        default:
            return state;
    }
}