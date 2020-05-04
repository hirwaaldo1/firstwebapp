import React, { Component } from 'react';
import './profile.css'
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
import { faUserPlus} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
var User = props =>(
    <tr>
        <td>{props.user.fristName}</td>
        <td>{props.user.lastName}</td>
        <td>{props.user.email}</td>
        <td>{props.user.password}</td>
        <td><Link to={'/edit/'+props.user._id}>Edit</Link> |<a href="#" onClick={()=>{props.delectinguser(props.user._id)}}>delect</a></td>
    </tr>
)
 class Profile extends Component {
   constructor(){
       super()
       this.state={user:[]}
       this.delectinguser=this.delectinguser.bind(this)
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
}
delectinguser(id){
    axios.delete('http://localhost:5000/users/login/'+id)
    .then(res =>console.log(res.data))
    this.setState({
        user:this.state.user.filter(el => el._id !==id)
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
             <div id="Overviews" className="btn btn"> <FontAwesomeIcon icon={faHome} style={{position:'absolute',left:"10px",top:8.5}} /> <p className="mama">Overviews</p> </div>
             <div id="Overviews1" className="btn btn"> <FontAwesomeIcon icon={faPersonBooth} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> <p className="mama">Account</p> </div>
             <div id="Overviews2" className="btn btn"onClick={()=>{this.props.history.push('/suggestion/'+this.props.match.params.id)}}> <FontAwesomeIcon icon={faPeopleArrows} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Suggestion </div>
             <p id="setting">Setting</p>
             <div id="hirwa">
             <div id="Overviews1" className="btn btn"> <FontAwesomeIcon icon={faTools} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Settings </div>
             <div id="Overviews2" className="btn btn"> <FontAwesomeIcon icon={faAd} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Other webs </div>
             <div id="Overviews3" className="btn btn"> <FontAwesomeIcon icon={faHandsHelping} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Help </div>
             <div id="Overviews4" className="btn btn"> <FontAwesomeIcon icon={faExternalLinkAlt} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Exits </div>
          </div>  </div>
          <div className="whole"></div>
          <h3>Adimin</h3>
         <table className="table" width="1000px"> 
             <thead className="thead">
                 <tr  >
                     <th>Fristname</th>
                     <th>Lastname</th>
                     <th>Email</th>
                     <th>Password</th>
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
 
export default Profile;