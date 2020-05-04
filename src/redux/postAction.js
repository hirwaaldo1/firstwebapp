import {FETCH_POST,NEW_POST} from './type'
export const  fetchPosts = () =>dispatch =>{
        fetch('http://localhost:5000/users/chat')
        .then(res => res.json())
        .then(posts =>dispatch({
            type:FETCH_POST,
            payload:posts
        }))
    }
    export const  createPost = (postData) => dispatch =>{
        console.log('action called');
        
        fetch('http://localhost:5000/users/chat',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(postData)
        })
        .then(res =>res.json())
        .then(post =>dispatch({
            type:NEW_POST,
            payload:post
        }))
    }