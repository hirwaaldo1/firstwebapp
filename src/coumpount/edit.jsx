import React, { Component } from 'react';
import{
    getFromStorage,
    setInStorage
}from './storage'
import {
    Link,
  } from "react-router-dom";
  import axios from 'axios'
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
            width:130,
            top:27,
            left:-76,
            position:"relative"
            
        },
        StyleCss6:{
            width:130,
            top:27,
            left:-76,
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
        fristName:'',
        lastName:'',
        email:'',
        password:'',
        passwordConfim:'',
    }
    this.onFristname=this.onFristname.bind(this)
    this.onLastname=this.onLastname.bind(this)
    this.onEmail=this.onEmail.bind(this)
    this.onPasword=this.onPasword.bind(this)
    this.onPasword2=this.onPasword2.bind(this)
    this.onSignUp=this.onSignUp.bind(this)
}
componentDidMount(){
    axios.get('http://localhost:5000/users/login/'+this.props.match.params.id)
.then(res =>{
    this.setState({
        fristName:res.data.fristName,
        lastName:res.data.lastName,
        email:res.data.email,
        password:res.data.password,
        passwordConfim:res.data.passwordConfim,
    })
})
.catch(function(error){
    console.log(error)
})
}
onFristname(e){
    this.setState({
        fristName:e.target.value
    })
}
onLastname(e){
    this.setState({
        lastName:e.target.value
    })
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
onPasword2(e){
    this.setState({
        passwordConfim:e.target.value
    })
}
onSignUp(){
const aldo = {
    fristName:this.state.fristName,
    lastName:this.state.lastName,
    email:this.state.email,
    password:this.state.password,
    passwordConfim:this.state.passwordConfim,
}
this.setState({
    isLoading:true
})

axios.post('http://localhost:5000/users/login/update/'+this.props.match.params.id,aldo)
.then(res=>console.log(res.data))
}
render() { 
        const {
            isLoading,
            token,
            Error1,
            Error2,
            fristName,
            lastName,
            email,
            password,
            passwordConfim,
        }=this.state;

       if(!token){
            return(
            <div className="auto">
            <div className="card" style={this.state.StyleCss}>
               <h4 style={this.state.StyleCss2}>INFOMATION</h4 >
               <div style={{color:"white"}}>
                  A library is a collection of sources of information and similar resources, <br />
                  made accessible to a defined community for reference or borrowing. It <br />
                  provides physical or digital access to material and may be a physical <br />
                  building or room, or a virtual space, or both. </div>
               <button style={this.state.StyleCss3} className="btn btn-outline-primary" > <Link to='/'>Have an account</Link> </button>
            </div>
            <div className="card" style={this.state.StyleCss1}>
              <h4 style={this.state.StyleCss4} >REGISTER FORM</h4>
              <form>
                  <label style={{ top:10,position:"relative"}}>First name <input type="text"style={this.state.StyleCss5} value={fristName} onChange={this.onFristname}/> </label>
                  <label style={{ left:150,top:-28,position:"relative"}}>Last name <input type="text"style={this.state.StyleCss6} value={lastName}onChange={this.onLastname}/> </label>
                  <label style={{ left:3,top:-28,position:"relative"}}><br/>Your Email <input type="text"style={this.state.StyleCss7} value={email}onChange={this.onEmail}/> </label>
                  <label style={{ left:10,top:-30,position:"relative"}}>Password <input type="text"style={this.state.StyleCss5} value={password}onChange={this.onPasword}/> </label>
                  <label style={{ left:150,top:-69,position:"relative"}}>Confirm Password <input type="text"style={{  width:130,top:27,left:-132,position:"relative"}} value={passwordConfim}onChange={this.onPasword2}/> </label>
                  <label style={{top:-25,position:"relative"}}><input type="radio"/>I agree to the <a href="/"><u>terms and policy</u></a> </label><br/>
              </form>
              <button style={{backgroundColor:"#0984e3",color:"white"}} className="btn btn"onClick={(e)=>this.onSignUp()}>Register Now</button>
        {(Error1)?(<div id='Errors' className="btn btn">{Error1}</div>):(null)}
            </div>
            </div>

            )}
    
    }
}
 
export default Trail;