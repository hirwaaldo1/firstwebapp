import React, { Component } from 'react';
import './suggestion.css'
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
import axios from 'axios'
var User = props =>(
    <tr id="bodyer1">
        <td>{props.user.fristName}</td>
        <td>{props.user.lastName}</td>
        <td>{props.user.email}</td>
        <td id="walk12">Chat</td>
    </tr>
)
class Suggestion extends Component {
    constructor(){
        super()
        this.state={user:[]}
    }
    componentDidMount(){
        axios.get('http://localhost:5000/users/login')
.then(response =>{
    this.setState({
        user:response.data
    })
})
.catch((error)=>{
    console.log(error);
    
})
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
    userList(){
        return this.state.user.map(currentuser =>{
            return <User user={currentuser} delectinguser={this.delectinguser} key={currentuser._id}/>
        })
    }
    render() { 
        return ( <div>
              <div className="left">
              <div id="Overviews" className="btn btn" onClick={()=>{this.props.history.push('/home/'+this.props.match.params.id)}}> <FontAwesomeIcon icon={faHome} style={{position:'absolute',left:"10px",top:8.5}} /> Overviews </div>
              <div id="Overviews1" className="btn btn"onClick={()=>{this.props.history.push('/profile/'+this.props.match.params.id)}}> <FontAwesomeIcon icon={faPersonBooth} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Account </div>
             <div id="Overviews2" className="btn btn"> <FontAwesomeIcon icon={faPeopleArrows} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Suggestion </div>
             <p id="setting">Setting</p>
             <div id="hirwa">
             <div id="Overviews1" className="btn btn"> <FontAwesomeIcon icon={faTools} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Settings </div>
             <div id="Overviews2" className="btn btn"> <FontAwesomeIcon icon={faAd} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Other webs </div>
             <div id="Overviews3" className="btn btn" onClick={()=>{this.props.history.push('/help/'+this.props.match.params.id)}}> <FontAwesomeIcon icon={faHandsHelping} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Help </div>
             <div id="Overviews4" className="btn btn"  onClick={()=>{this.props.history.push('/')}}> <FontAwesomeIcon icon={faExternalLinkAlt} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}}/> Exits </div>
          </div></div>
          <h3>Suggestion</h3>
         <table className="table" width="1000px"> 
             <thead className="thead23">
                 <tr id="heat" >
                     <th>Fristname</th>
                     <th>Lastname</th>
                     <th>Email</th>
                     <th>Action</th>
                 </tr>
             </thead>
             <tbody id="color">
             {this.userList()}
             </tbody>
         </table>
        </div> );
    }
}
 
export default Suggestion;