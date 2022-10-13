import { CATEGORY, NAME, STATUS, VIEW } from "./actionTypes"

export function setStatus(payload) {
    return {
        type: STATUS,
        payload: payload,
    }
}
export function setName(payload) {
    return {
        type: NAME,
        payload: payload,
    }
}
export function setCategory(payload) {
    return {
        type: CATEGORY,
        payload: payload,
    }
}
export function setView(payload) {
    return {
        type: VIEW,
        payload: payload,
    }
}
