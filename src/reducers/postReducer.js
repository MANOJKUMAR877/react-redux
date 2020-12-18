import { FETCH_POST, NEW_POST } from '../actions/types'
const initialState = {
    items: [],
    item: {}
}
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POST:
            return {
                ...state,
                items: action.paylaod
            }
        case NEW_POST:
            return {
                ...state,
                item: action.paylaod
            }
        default:
            return state;
    }
}