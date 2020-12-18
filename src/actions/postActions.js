import { FETCH_POST, NEW_POST } from '../actions/types'
export const fetchPost = () => dispatch => {


    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POST,
            paylaod: posts
        }))

}


export const createPost = (postData) => dispatch => {

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(posts =>  dispatch({
            type: NEW_POST,
            paylaod: posts
        }))


}