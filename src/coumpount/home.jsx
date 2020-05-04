import React, { Component } from 'react';
import './home.css'
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
import elivs from './elivs.PNG'
import olly from './olly.PNG'
import roje from './roje.PNG'
import audz from './audz.PNG'
import vessal from './house.PNG'
import { DatePicker, RangePicker, theme } from 'react-trip-date';
import {ThemeProvider} from 'styled-components';
import 'react-calendar/dist/Calendar.css';  
import {Theme } from 'react-trip-date';
import {faWalking} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
class Home extends Component {
    state = { 
        isLoading:true
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
            })
        })
      }
    
    render() { 
        const  handleResponsive  =  setNumberOfMonth  =>  {
            let  width  =  document.querySelector('.tp-calendar').clientWidth;
            if  (width  >  900)  {
                setNumberOfMonth(3);
            }  else  if  (width  <  900  &&  width  >  580)  {
                setNumberOfMonth(2);
            }  else  if  (width  <  580)  {
                setNumberOfMonth(1);
            }
        };
        const  Day = ({  day  }) => {
            return  (
                <>
                    <p  className="date">{day.format('DD')}</p>
                    
                </>
                );
            };
            
        return (
            this.state.isLoading === true ? <div className="container"><p className="img-one">1</p><p className="img-two">9</p><p className="img-three">N</p></div>:
            <div>
          <div className="left">
             <div id="Overviews22" className="btn btn"> <FontAwesomeIcon icon={faHome} style={{position:'absolute',left:"10px",top:8.5}} /> <p className="mama">Overviews</p> </div>
             <div id="Overviews1" className="btn btn"onClick={()=>{this.props.history.push('/profile/'+this.props.match.params.id)}}> <FontAwesomeIcon icon={faPersonBooth} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Account </div>
             <div id="Overviews2" className="btn btn"onClick={()=>{this.props.history.push('/suggestion/'+this.props.match.params.id)}}> <FontAwesomeIcon icon={faPeopleArrows} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Suggestion </div>
             <p id="setting">Setting</p>
             <div id="hirwa">
             <div id="Overviews1" className="btn btn"> <FontAwesomeIcon icon={faTools} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Settings </div>
             <div id="Overviews2" className="btn btn"> <FontAwesomeIcon icon={faAd} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Other webs </div>
             <div id="Overviews3" className="btn btn" onClick={()=>{this.props.history.push('/help/'+this.props.match.params.id)}}> <FontAwesomeIcon icon={faHandsHelping} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}} /> Help </div>
             <div id="Overviews4" className="btn btn"  onClick={()=>{this.props.history.push('/')}}> <FontAwesomeIcon icon={faExternalLinkAlt} style={{position:'absolute',left:"10px",top:8.5,color:"#06090a"}}/> Exits </div>
          </div>  <h6><FontAwesomeIcon icon={faUserPlus} style={{position:'absolute',left:15,top:8}}/></h6> </div>
          <div className="whole">
          <h3>Overviews</h3>
          <h5><FontAwesomeIcon icon={faUserPlus} style={{position:'absolute',left:15,top:8}}/></h5>
          <div id="image">
              <p id="Photography">Photography</p>
              <div className="Elvis" onClick={()=>{this.props.history.push('/ImageElvis/'+this.props.match.params.id)}}><span class="dot"><img src={elivs} class="dot1"/></span><p  id="name">Morel Elvis</p></div><p id="down">12 Posts</p> <p id="money">5000frw</p><br />
              <div><span class="dot"><img src={olly} class="dot1"/></span><p id="name">Olly</p></div><p id="down">13 Posts</p>   <p id="money">5000frw</p><br />
              <div><span class="dot"><img src={roje} class="dot1"/></span><p id="name">Rojazcobi</p></div><p id="down">15 Posts</p>   <p id="money">5000frw</p><br />
          </div>
          <div id="image1">
              <p id="Photography">House and Tanks</p>
              <div><span class="dot"><img src={vessal} class="dot1"/></span><p  id="name">Vanessa</p></div><p id="down">12 Posts</p> <p id="money">5000frw</p><br />
              <div><span class="dot"><img src={olly} class="dot1"/></span><p id="name">Aldo</p></div><p id="down">13 Posts</p>   <p id="money">5000frw</p><br />
          </div>
          <div id="image2">
          <p id="Photography">Fashion</p>
          <div><span class="dot"><img src={audz} class="dot1"/></span><p  id="name">Audz</p></div><p id="down">12 Posts</p> <p id="money">5000frw</p><br />
              <div><span class="dot"><img src={olly} class="dot1"/></span><p id="name">Aldo</p></div><p id="down">13 Posts</p>   <p id="money">5000frw</p><br />

          </div>
          <div id="image3">
              <p id="Photography">Bites</p>
              <div><span class="dot"><img src={audz} class="dot1"/></span><p  id="name">Audz</p></div><p id="down">12 Posts</p> <p id="money">5000frw</p><br />
              <div><span class="dot"><img src={olly} class="dot1"/></span><p id="name">Aldo</p></div><p id="down">13 Posts</p>   <p id="money">5000frw</p><br />
          </div>
          <div id="aldo">
          
        <DatePicker
        
		  selectedDays={['2019-3-25']} //initial selected days
		  jalali={false}
		  numberOfMonths={3}
		  numberOfSelectableDays={3} // number of days you need 
		  disabledDays={['2019-12-02']} //disabeld days
		  responsive={handleResponsive} // custom responsive, when using it, `numberOfMonths` props not working
		  disabledBeforToday={true} 
		  disabled={false} // disable calendar 
		  dayComponent={Day} //custom day component 
		   // custom title of days
        />
        </div>
          </div>
        </div>  );
    }
}
 
export default Home;