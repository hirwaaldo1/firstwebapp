import React, { Component } from 'react';
class Error extends Component {
    state = {  }
    render() { 
        return (
            <div className="card" style={this.state.StyleCss}>
               <h4 style={this.state.StyleCss2}>404 status  not Found </h4 >
        </div> );
    }
}
 
export default Error;