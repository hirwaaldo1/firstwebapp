import axios from 'axios'
import {
    GET_CHATS,
    AFTER_POST_MESSAGE
}from './types'
export function getChats(){
    const request =axios.get('http://localhost:5000/users/chat')
    .then(res =>res.data)
    return{
        type:GET_CHATS,
        payload:request
    }
}  

export  function afterPostMessage(data){
    return {
        type:AFTER_POST_MESSAGE,
        payload:data
    }
}