import React, { Component } from 'react';
import{
    getFromStorage,
    setInStorage
}from './storage'
import {
    Link,
  } from "react-router-dom";
class Trail extends Component {
constructor(){
    super()
    this.state={
        isLoading:true,
        token:'',
        fristName:''
    }
}
componentDidMount(){
    const obj=getFromStorage('the_main_app')
    if(obj && obj.token){
        const {token}=obj
     fetch('http://localhost:5000/users/verify?token='+token)
     .then(res=>res.json())
     fetch('http://localhost:5000/users/profile',{
        method:'POST',
        headers: {
    'Content-Type': 'application/json'
    },})
    .then(res=>res.json())
    .then(json=>{
        console.log('json',json)
        if(json.success){
            setInStorage('the_main_app',{token:json.token})
            this.setState({
               fristName:json.fristName,
                isLoading:false,
               token:json.token
            })
        }else{
            this.setState({
                fristName:json.fristName,
                isLoading:false
            })
        }
    })
    }
}
    render() { 
        const {
            fristName
        }=this.state
        console.log(fristName)
        return ( 
            <div id="auto">
           {fristName}
            </div>
         );
    }
}

 
export default Trail;