import React, { Component } from 'react';
import './help.css'
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
class Hepl extends Component {
    state = {  }
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
            })
        })
    }
    render() { 
        return ( <div>
             <div className="left">
             <div id="Overviews" className="btn btn" onClick={()=>{this.props.history.push('/home/'+this.props.match.params.id)}}> <FontAwesomeIcon icon={faHome} style={{position:'absolute',left:"10px",top:8.5}} /> Overviews </div>
              <div id="Overviews1" className="btn btn"onClick={()=>{this.props.history.push('/profile/'+this.props.match.params.id)}}> <FontAwesomeIcon icon={faPersonBooth} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Account </div>
                <div id="Overviews2" className="btn btn"onClick={()=>{this.props.history.push('/suggestion/'+this.props.match.params.id)}}> <FontAwesomeIcon icon={faPeopleArrows} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Suggestion </div>
                <p id="setting">Setting</p>
                <div id="hirwa">
                <div id="Overviews1" className="btn btn"> <FontAwesomeIcon icon={faTools} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Settings </div>
                <div id="Overviews2" className="btn btn"> <FontAwesomeIcon icon={faAd} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Other webs </div>
                <div id="Overviews300" className="btn btn"> <FontAwesomeIcon icon={faHandsHelping} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Help </div>
                <div id="Overviews4" className="btn btn"  onClick={()=>{this.props.history.push('/')}}> <FontAwesomeIcon icon={faExternalLinkAlt} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}}/> Exits </div>
             </div></div>
             <h3>Help</h3>
             <div id="image">
              <p id="Photography">Overviews</p>
              <p id="cent">Overviews  is a general summary of something. An overview gives the big picture, while leaving out the minor details.</p>
          </div>
          <div id="image1">
              <p id="Photography">Account</p>
              <p id="cent">Account refers to assets, liabilities, income, expenses, and equity, as represented by individual ledger pages, to which changes in value are chronologically recorded with debit and credit entries.</p>
          </div>
          <div id="image2">
          <p id="Photography">Suggestion</p>
          <p id="cent">Suggestion is the psychological process by which one person guides the thoughts, feelings, or behavior of another person.</p>
          </div>
          <div id="image3">
              <p id="Photography">Settings</p>
              <p id="cent">The setting is both the time and geographic location within a narrative, either nonfiction or fiction. A literary element, the setting helps initiate the main backdrop and mood for a story.</p>
          </div>
          <div id="image2p">
          <p id="Photography">Other webs</p>
          <p id="cent">Suggestion is the psychological process by which one person guides the thoughts, feelings, or behavior of another person.</p>
          </div>
          <div id="image3p">
              <p id="Photography">Exits</p>
              <p id="cent">The setting is both the time and geographic location within a narrative, either nonfiction or fiction. A literary element, the setting helps initiate the main backdrop and mood for a story.</p>
          </div>
        </div> );
    }
}
 
export default Hepl;