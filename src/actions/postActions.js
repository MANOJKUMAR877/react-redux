import { FETCH_POST } from '../actions/types'
export const fetchPost = () => dispatch => {

    
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => dispatch({
                type: FETCH_POST,
                paylaod: posts
            }))
    
}