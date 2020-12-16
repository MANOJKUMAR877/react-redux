import { FETCH_POST } from '../actions/types'
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
        default:
            return state;
    }
}