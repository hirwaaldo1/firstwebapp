import React, { Component } from 'react';
import './self.css'
import{
    getFromStorage,
    setInStorage
}from './storage'
import {
    Link,
  } from "react-router-dom";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faPersonBooth } from '@fortawesome/free-solid-svg-icons'
import { faPeopleArrows} from '@fortawesome/free-solid-svg-icons'
import { faTools} from '@fortawesome/free-solid-svg-icons'
import { faAd} from '@fortawesome/free-solid-svg-icons'
import { faHandsHelping} from '@fortawesome/free-solid-svg-icons'
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import { faPlus} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
class Trail extends Component {
constructor(){
    super()
    this.state={
        isLoading:true,
        token:'',
        Error1:'',
        Error2:'',
        fristName:'',
        lastName:'',
        email:'',
        password:'',
        passwordConfim:'',
         image: '',
         selectfile:null,
         tests13:false

    }
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
        image:res.data.image
    })
})
.catch(function(error){
    console.log(error)
})
}
onSignUp(){
const aldo = {
    fristName:this.state.fristName,
    lastName:this.state.lastName,
    email:this.state.email,
    password:this.state.password,
    passwordConfim:this.state.passwordConfim,
    image:this.state.selectfile
}
this.setState({
    isLoading:true
})
}
fileSelected =event =>{
    this.setState({
        selectfile:event.target.files[0],
        tests13:true
    })
}
fileUploadImage =(e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append('avatar', this.state.selectfile)
    axios.post('http://localhost:5000/users/login/uploadImage/'+this.props.match.params.id,formData, {
    }).then(res => {
        console.log(res)
        this.props.history.push('/profile/'+this.props.match.params.id)
    })
    this.props.history.push('/profile/'+this.props.match.params.id)
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
            image
        }=this.state;

       if(!token){
            return(
                <div>
                <div className="left">
                <div id="Overviews" className="btn btn" onClick={()=>{this.props.history.push('/home/'+this.props.match.params.id)}}> <FontAwesomeIcon icon={faHome} style={{position:'absolute',left:"10px",top:8.5}} /> Overviews </div>
                <div id="Overviews15" className="btn btn"> <FontAwesomeIcon icon={faPersonBooth} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> <p className="mama">Account</p> </div>
                <div id="Overviews2" className="btn btn"onClick={()=>{this.props.history.push('/suggestion/'+this.props.match.params.id)}}> <FontAwesomeIcon icon={faPeopleArrows} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Suggestion </div>
                <p id="setting">Setting</p>
                <div id="hirwa">
                <div id="Overviews1" className="btn btn"> <FontAwesomeIcon icon={faTools} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Settings </div>
                <div id="Overviews2" className="btn btn"onClick={()=>{this.props.history.push('/ImageElvis/'+this.props.match.params.id)}}> <FontAwesomeIcon icon={faAd} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Other webs </div>
                <div id="Overviews3" className="btn btn" onClick={()=>{this.props.history.push('/help/'+this.props.match.params.id)}}> <FontAwesomeIcon icon={faHandsHelping} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Help </div>
                <div id="Overviews4" className="btn btn"  onClick={()=>{this.props.history.push('/')}}> <FontAwesomeIcon icon={faExternalLinkAlt} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}}/> Exits </div>
             </div>  </div>
             <h3>Account</h3>
             <div><span class="dotss"><FontAwesomeIcon onClick={()=>this.fileInput.click()} id="addimage" icon={faPlus} style={{position:'absolute',left:"65px",top:60,color:"#2d3436", cursor:'pointer'}}></FontAwesomeIcon></span>
             <input type="file" style={{display:'none'}} ref={fileInput =>this.fileInput=fileInput} onChange={this.fileSelected} name="avatar"/>
             {this.state.image=='' ?<button onClick={this.fileUploadImage} id="Uploads" className="btn btn-primary">Uploads</button> :<img src={image} id="image1234"/>}
             
             </div>
            <div className="auto">
            <p id="welcome">Welcome - {fristName} {lastName}</p>
            <p id="network">19,Network</p>
            <p id="change">I’m Dave and I work with small businesses across the <br /> world to create websites that enhance their brand and <br /> engage users.</p>
            </div>
                </div>
            )}
        
        }
    }
 
export default Trail; 