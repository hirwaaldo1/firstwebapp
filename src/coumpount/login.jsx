import React, { Component } from 'react';
import{
    getFromStorage,
    setInStorage
}from './storage'
import {
    Link, Redirect,
  } from "react-router-dom";
import trail from './trail'
import './login.css'
class Trail extends Component {
constructor(){
    super()
    this.state={
        StyleCss:{
            height:"500px",
            width:"350px",
            bottom: -50,
            right: -370,
            backgroundColor:"#0984e3",
            padding:30

        },
        StyleCss1:{
            height:"500px",
            width:"350px",
            bottom: 450,
            right: -720,
            padding:30
            
        },
        StyleCss2:{
           color:"white",

        },
        StyleCss3:{
               backgroundColor:"white",
               color:"black",
               width:150
        },
        StyleCss4:{
            color:"#0984e3"
        },
        StyleCss5:{
            width:280,
            top:0,
            left:-8,
            position:"relative"
            
        },
        StyleCss7:{
            width:275,
            top:-1,
            left:1,
            position:"relative"
            
        },
        isLoading:true,
        token:'',
        Error1:'',
        Error2:'',
        password:'',
        email:'',
        id:''
       

    }
    this.onEmail=this.onEmail.bind(this)
    this.onPasword=this.onPasword.bind(this)
    this.onSignUp=this.onSignUp.bind(this)
}
componentDidMount(){
    const obj=getFromStorage('the_main_app')
    if(obj && obj.token){
        const {token}=obj
     fetch('http://localhost:5000/users/verify?token='+token)
     .then(res=>res.json())
     .then(json=>{
         if(json.success){
             this.setState({
                 token,
                 isLoading:false,
             })
         }else{
            this.setState({
                isLoading:false
            })
     }
    })
    }else{
        this.setState({
            isLoading:false
        })
    }
}
onEmail(e){
    this.setState({
        email:e.target.value
    })
}
onPasword(e){
    this.setState({
        password:e.target.value
    })
}
onSignUp(){
    const{
        email,
        password,
    }=this.state
    this.setState({
        isLoading:true
    })
    fetch('http://localhost:5000/users/logout',{
        method:'POST',
        headers: {
    'Content-Type': 'application/json'
    },
         body:JSON.stringify({
            email:email,
            password:password,
         }),    
    })
    .then(res=>res.json())
    .then(json=>{
        console.log('json',json)
        if(json.success){
            setInStorage('the_main_app',{token:json.token})
            this.setState({
                Error1:json.messanges,
                Error2:json.messange,
                isLoading:false,
                email:'',
                password:'',
               token:json.token
            })
        }else{
            this.setState({
                Error1:json.messanges,
            
                Error2:json.messange,
                isLoading:false
            })
        }
      
    })
    if(email==='admin'&& password==='admin' ){
        this.props.history.push('/admin')
       }
    }
    render() { 
        const {
            token,
            Error1,
            Error2,
            email,
            password,
            user,
        }=this.state;
        return ( 
            <div id="auto">
            <div className="card" style={this.state.StyleCss}>
               <h4 style={this.state.StyleCss2}>INFOMATION</h4 >
               <div style={{color:"white"}}>
                  A library is a collection of sources of information and similar resources, <br />
                  made accessible to a defined community for reference or borrowing. It <br />
                  provides physical or digital access to material and may be a physical <br />
                  building or room, or a virtual space, or both. </div>
               <button style={this.state.StyleCss3} className="btn btn-outline-primary"><Link to='/trail'>No acount </Link> </button>
            </div>
            <div className="card" style={this.state.StyleCss1}>
              <h4 style={this.state.StyleCss4} >LOGIN FORM</h4>
              <form>
                  <label style={{ left:3,top:-28,position:"relative"}}><br/>Your Email <input type="text"style={this.state.StyleCss7}onChange={this.onEmail}/> </label>
                  <label style={{ left:10,top:-30,position:"relative"}}>Password <input type="password"style={this.state.StyleCss5} onChange={this.onPasword}/> </label>
              </form>
              <button style={{backgroundColor:"#0984e3",color:"white"}} className="btn btn"onClick={this.onSignUp}>Verify</button>
              {(Error1)?(<div id='Errors' className="btn btn">{Error1}</div>):(null)}
              {(Error2)?(<div><p id='Error'  className="btn btn">{Error2}</p><button className="btn btn-primary" onClick={()=>{this.props.history.push('/profile/'+this.state.token)}}>Jump In</button></div>):(null)}
              


            </div>
            </div>
         );
    }
}

 
export default Trail;