import React, { Component } from 'react';
import axios from 'axios'
import {
    Link,
  } from "react-router-dom";
import './Elvis.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import { faPersonBooth } from '@fortawesome/free-solid-svg-icons'
import { faPeopleArrows} from '@fortawesome/free-solid-svg-icons'
import { faTools} from '@fortawesome/free-solid-svg-icons'
import { faAd} from '@fortawesome/free-solid-svg-icons'
import { faHandsHelping} from '@fortawesome/free-solid-svg-icons'
import { faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import {faWifi} from '@fortawesome/free-solid-svg-icons'
import io from 'socket.io-client'
import {ChatCard} from "./ChatCard"
import {getChats,afterPostMessage} from '../action/chat_action'
import {connect} from 'react-redux'
var User = props =>(
    <div id="bodyer">
       {props.user.message} 
    </div>
   
)
class Elvis extends Component {
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
        let server ="http://localhost:5000"
        this.props.dispatch(getChats())
        this.socket=io(server)
        this.socket.on('output chat Messange',messangeFromBackEnd =>{
            console.log(messangeFromBackEnd);
            this.props.dispatch(afterPostMessage(messangeFromBackEnd))
        })
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
    userList(){
        return this.state.user.map(currentuser =>{
            return <User user={currentuser}  key={currentuser.message}/>
        })
    }
    renderCards = () =>{
        return this.props.chats.chats.map((chat)=>(
             <ChatCard key={chat._id} {...chat}/>
        ))
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
            <nav className="baba"><span class="dot100"></span><p style={{color:"white"}} className="namex">{fristName} {lastName}</p><p id="chat">Chats
            <u className="chatline"><p style={{color:'#1e272e'}}>Chats</p></u>
            </p><p id="ibare">19 Network</p><hr className="line"></hr></nav>
                <input type="text" value={this.state.chatMessange} id="messange" onChange={this.handleSecherUser}/>
                <button className="btn btn-primary"id="caca" onClick={this.submitChats}>Send</button>
    <p className="username"> You join Morel Elvis</p>
            <div>
                <div className="middle">
                
                {this.props.chats &&(
                    <div>
                    {this.renderCards()}
                    </div>
                )}
                 
                <div>
                </div>
                </div>
            </div>
            </div>
            </div>
        </div> );
    }
}
const  mapStateToProps = state =>{
    return {
        user:state.user,
        chats:state.chat
    }
}
export default connect(mapStateToProps)(Elvis);