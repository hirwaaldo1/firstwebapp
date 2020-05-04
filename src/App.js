import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import login from './coumpount/login'
import trail from './coumpount/trail'
import profile from './coumpount/profile'
import home from './coumpount/home'
import edit from './coumpount/edit'
import suggestion from './coumpount/suggestion'
import help from './coumpount/help'
import moral from './coumpount/aldo'
import elvis from './coumpount/Elvis'
import self from './coumpount/self'
import error from './coumpount/404'

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Router>
      <Switch>
        <Route exact path="/" component={login}></Route>
        <Route exact path="/404" component={error}></Route>
        <Route exact path="/trail" component={trail}></Route>
        <Route exact path="/admin" component={profile}></Route>
        <Route exact path="/home/:id" component={home}></Route>
        <Route exact path="/help/:id" component={help}></Route>
        <Route exact path="/ImageElvis/:id" component={moral}></Route>
        <Route exact path="/suggestion/:id" component={suggestion}></Route>
        <Route exact path="/Elvis/:id" component={elvis}></Route>
        <Route exact path="/profile/:id" component={self}></Route>
        <Route exact path="/edit/:id" component={edit}></Route>
        <Redirect to="/404"/>
      </Switch>
    </Router>
      );
  }
}
 
export default App;
