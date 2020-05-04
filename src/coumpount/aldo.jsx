import React, { Component } from 'react';
import axios from 'axios'
import {
    Link,
  } from "react-router-dom";
  import './aldo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import { faPersonBooth } from '@fortawesome/free-solid-svg-icons'
import { faPeopleArrows} from '@fortawesome/free-solid-svg-icons'
import { faTools} from '@fortawesome/free-solid-svg-icons'
import { faAd} from '@fortawesome/free-solid-svg-icons'
import { faHandsHelping} from '@fortawesome/free-solid-svg-icons'
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import { faComment} from '@fortawesome/free-solid-svg-icons'
import {faFingerprint} from '@fortawesome/free-solid-svg-icons'
import elivs from './elivs.PNG'
import olly from './olly.PNG'
import roje from './roje.PNG'
import audz from './audz.PNG'
import vessal from './house.PNG'
class Moral extends Component {
    constructor(){
        super()
        this.state={
            isLoading:true,
            token:'',
            fristName:'',
            lastName:'',
            email:'',
            password:'',
            passwordConfim:'',
             image: '',
             chatMessange:'',
             iduser:"",
             user:[]
        }
    }
    handleSecherUser =(e) =>{
     this.setState({
         chatMessange:e.target.value
     })
    }
    componentDidMount(){
           setTimeout(()=>{
            this.setState({
              isLoading:false
            })
          },4000)
        axios.get('http://localhost:5000/users/login/'+this.props.match.params.id)
    .then(res =>{
        this.setState({
            fristName:res.data.fristName,
            lastName:res.data.lastName,
            email:res.data.email,
            password:res.data.password,
            passwordConfim:res.data.passwordConfim,
            iduser:this.props.match.params.id

        })
    })
    .catch(function(error){
        console.log(error)
    })
    axios.get('http://localhost:5000/users/chat')
        .then(response =>{
            this.setState({
                user:response.data
            })
        })
        .catch((error)=>{
            console.log(error);
            
        })
    }
    submitChats=(e)=>{
        e.preventDefault()
        let userId=this.state.iduser
        let name=this.state.fristName
        let chatMessange=this.state.chatMessange
        this.socket.emit('imput chat Messange',{
            chatMessange,
            name,
            userId
        })
        this.setState({chatMessange:''})
    }
    render() {

        const {
            isLoading,
            token,
            fristName,
            lastName,
            email,
            password,
            passwordConfim,
            user
        }=this.state;
        
        return (  this.state.isLoading === true ? <div className="container"><p className="img-one">1</p><p className="img-two">9</p><p className="img-three">N</p></div>:
            <div>
            <div className="left">
             <div id="Overviews22" className="btn btn"> <FontAwesomeIcon icon={faHome} style={{position:'absolute',left:"10px",top:8.5}} /> <p className="mama">Overviews</p> </div>
             <div id="Overviews1" className="btn btn"> <FontAwesomeIcon icon={faPersonBooth} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> <Link to={"/profile/"+this.props.match.params.id} className="mama">Account</Link> </div>
             <div id="Overviews2" className="btn btn"onClick={()=>{this.props.history.push('/suggestion/'+this.props.match.params.id)}}> <FontAwesomeIcon icon={faPeopleArrows} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Suggestion </div>
             <p id="setting">Setting</p>
             <div id="hirwa">
             <div id="Overviews1" className="btn btn"> <FontAwesomeIcon icon={faTools} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Settings </div>
             <div id="Overviews2" className="btn btn"> <FontAwesomeIcon icon={faAd} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Other webs </div>
             <div id="Overviews3" className="btn btn" onClick={()=>{this.props.history.push('/help/'+this.props.match.params.id)}}> <FontAwesomeIcon icon={faHandsHelping} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Help </div>
             <div id="Overviews4" className="btn btn"  onClick={()=>{this.props.history.push('/')}}> <FontAwesomeIcon icon={faExternalLinkAlt} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}}/> Exits </div></div>
            <div>
            <nav className="baba"><span class="dot100"></span><p style={{color:"white"}} className="namex">{fristName} {lastName}</p><p id="chat">Picture
            <u className="chatline"><p style={{color:'#1e272e'}}>Picture</p></u>
            </p><p id="ibare">19 Network</p><hr className="line"></hr></nav>
            <div id="image">
            <div className="container-content">
            <img  src={elivs}  id="img123"/>
              <div className="content-text">
               <p className="morel__elvis">Moral Elvis</p>
               <p>God above y'all✝️🔵
🍁 UNDER CONTROL. 🍁
♌L E O Z O D I A C♌
👑27th July king👑
👻SC: elvis.ml2👻</p>
<FontAwesomeIcon icon={faFingerprint} id="faFingerprint" /> 
               <FontAwesomeIcon icon={faComment} id="faComment" onClick={()=>{this.props.history.push('/Elvis/'+this.props.match.params.id)}}/> 
              </div>
            </div>
          </div>
          <div id="image1">
            <div className="container-content">
            <img  src={olly}  id="img123"/>
              <div className="content-text">
              <p className="morel__elvis">Moral Elvis</p>
               <p>God above y'all✝️🔵
🍁 UNDER CONTROL. 🍁
♌L E O Z O D I A C♌
👑27th July king👑
👻SC: elvis.ml2👻</p>
<FontAwesomeIcon icon={faFingerprint} id="faFingerprint" /> 
               <FontAwesomeIcon icon={faComment} id="faComment" onClick={()=>{this.props.history.push('/Elvis/'+this.props.match.params.id)}}/> 
              </div>
            </div>
          </div>
          <div id="image2">
          <div className="container-content">
            <img  src={audz}  id="img123"/>
              <div className="content-text">
              <p className="morel__elvis">Moral Elvis</p>
               <p>God above y'all✝️🔵
🍁 UNDER CONTROL. 🍁
♌L E O Z O D I A C♌
👑27th July king👑
👻SC: elvis.ml2👻</p>
<FontAwesomeIcon icon={faFingerprint} id="faFingerprint" /> 
               <FontAwesomeIcon icon={faComment} id="faComment"onClick={()=>{this.props.history.push('/Elvis/'+this.props.match.params.id)}} /> 
              </div>
            </div>
          </div>
          <div id="image3">
          <div className="container-content">
            <img  src={vessal}  id="img123"/>
              <div className="content-text">
              <p className="morel__elvis">Moral Elvis</p>
               <p>God above y'all✝️🔵
🍁 UNDER CONTROL. 🍁
♌L E O Z O D I A C♌
👑27th July king👑
👻SC: elvis.ml2👻</p>
<FontAwesomeIcon icon={faFingerprint} id="faFingerprint" /> 
               <FontAwesomeIcon icon={faComment} id="faComment"onClick={()=>{this.props.history.push('/Elvis/'+this.props.match.params.id)}} /> 
              </div>
            </div>
          </div>
          <div id="image2p">
          <div className="container-content">
            <img  src={roje}  id="img123"/>
              <div className="content-text">
              <p className="morel__elvis">Moral Elvis</p>
               <p>God above y'all✝️🔵
🍁 UNDER CONTROL. 🍁
♌L E O Z O D I A C♌
👑27th July king👑
👻SC: elvis.ml2👻</p>
<FontAwesomeIcon icon={faFingerprint} id="faFingerprint" /> 
               <FontAwesomeIcon icon={faComment} id="faComment" onClick={()=>{this.props.history.push('/Elvis/'+this.props.match.params.id)}} /> 
              </div>
            </div>
          </div>
          <div id="image3p">
          <div className="container-content">
            <img  src={elivs}  id="img123"/>
              <div className="content-text">
              <p className="morel__elvis">Moral Elvis</p>
               <p>God above y'all✝️🔵
🍁 UNDER CONTROL. 🍁
♌L E O Z O D I A C♌
👑27th July king👑
👻SC: elvis.ml2👻</p>
<FontAwesomeIcon icon={faFingerprint} id="faFingerprint" /> 
               <FontAwesomeIcon icon={faComment} id="faComment" onClick={()=>{this.props.history.push('/Elvis/'+this.props.match.params.id)}}/> 
              </div>
            </div>
          </div>
                </div>
                </div>
            </div>
          );
    }
}
export default Moral;