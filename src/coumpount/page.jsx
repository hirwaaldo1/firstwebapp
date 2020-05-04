import React, { Component } from 'react';
class Page extends Component {
    state = { 
        StyleCss:{
            width:200,
            height:590,
            borderRadius:0
        },
        StyleCss3:{
            height: 50,
            width: 50,
            backgroundColor: "#0984e3",
            borderRadius: 90,
            display: "block"
        },
        StyleCss4:{
            height: 50,
            width: 50,
            backgroundColor: "#fdcb6e",
            borderRadius: 90,
            display: "block"
        },
        StyleCss5:{
            height: 50,
            width: 50,
            backgroundColor: "#00b894",
            borderRadius: 90,
            display: "block"
        },
        StyleCss9:{
            height: 50,
            width: 50,
            backgroundColor: "#546de5",
            borderRadius: 90,
            display: "block"
        },
      button2:{
        border: "none",
        padding:20,
        margin:10,
        width:198,
        position:"relative",
        right:50,
        backgroundColor:"white",
        color:"silver"
      }
      
      
     }
    render() { 
        return ( 
            <div>
                <nav style={{width:1365,height:35,backgroundColor:"#546de5"}}>
                <p style={{left:20 ,top:5, position:"fixed",color:"white"}}>19 library</p>
                </nav>
                <div className="card" style={this.state.StyleCss}>
                <span class="dot"style={this.state.StyleCss9}><p style={{position:"relative",top:13,right:-15,color:"white"}}>HA</p><p style={{position:"relative",top:-35,right:-60,width:100}}>Hirwa Aldo</p><p style={{position:"relative",top:-55,right:-60,width:100,color:"silver" }}>28 views</p></span>
                <hr/>
                <ul>
                    <button style={{ border: "none",padding:20,margin:10,width:198,position:"relative",right:50,backgroundColor:"#546de5",color:"silver"}}>Home</button><br />
                    <button style={this.state.button2}>Setting</button><br />
                    <button style={this.state.button2}>About</button><br />
                    <button style={this.state.button2}>Other web</button><br />
                </ul>
                </div>
                
                 <div className="card" style={{position:"relative",top:-590,right:-200,height:40,width:1165,borderRadius:0,backgroundColor:"black"}}>
               <p style={{position:"relative",top:8,color:"#546de5",right:-10}}>Home</p>
               <p style={{position:"relative",top:-35,color:"#546de5",right:-1050}}>Logout ></p>
            </div>
            <div className="card-group"style={{position:"relative",top:-590,right:-200,width:1165,borderRadius:0,padding:20}}>
  <div className="card"style={{margin:10,borderRadius:6}} >
    <div className="card-body">
    <span class="dot"style={this.state.StyleCss3}><p style={{position:"relative",top:13,right:-20,color:"white"}}>/></p><p style={{position:"relative",top:-35,right:-60}}>Coding</p><p style={{position:"relative",top:-55,right:-60,width:100,color:"silver" }}>777</p></span>
            
    </div>
  </div>
  <div className="card" style={{margin:10,borderRadius:6}}>
    <div className="card-body">
    <span class="dot"style={this.state.StyleCss4}><p style={{position:"relative",top:13,right:-20,color:"white"}}>S</p><p style={{position:"relative",top:-35,right:-60}}>Story</p><p style={{position:"relative",top:-55,right:-60,width:100,color:"silver" }}>477</p></span>
    
    </div>
  </div>
  <div className="card" style={{margin:10,borderRadius:6}}>
    <div className="card-body">
    <span class="dot"style={this.state.StyleCss5}><p style={{position:"relative",top:13,right:-20,color:"white"}}>N</p><p style={{position:"relative",top:-35,right:-60,width:100}}>Network</p><p style={{position:"relative",top:-55,right:-60,width:100,color:"silver" }}>374</p></span>
    </div>
  </div>
</div>



<div className="card-group"style={{position:"relative",top:-640,right:-200,width:1165,borderRadius:0,padding:20}}>
  <div className="card"style={{margin:2,marginLeft:10,marginTop:10,borderRadius:6,height:100 ,backgroundColor:"#FFC312"}} >
    <div className="card-body">
     <p style={{color:"white",position:"relative",top:-15,fontSize:20}}>Javasrcipt</p>
     <p style={{color:"white",position:"relative",right:-3,top:-40,fontSize:12}}>mode in 2008 </p>
     <p style={{color:"white",position:"relative",top:-50,fontSize:30}}>38723</p>
    </div>
  </div>
  <div className="card" style={{margin:2,marginLeft:10,marginTop:10,borderRadius:6,height:100,backgroundColor:"#546de5"}}>
    <div className="card-body">
    <p style={{color:"white",position:"relative",top:-15,fontSize:20}}>Php</p>
     <p style={{color:"white",position:"relative",right:-3,top:-40,fontSize:12}}>mode in 2008 </p>
     <p style={{color:"white",position:"relative",top:-50,fontSize:30}}>58932</p>    

    </div>
  </div>
  <div className="card" style={{margin:2,marginLeft:10,marginTop:10,borderRadius:6,height:100,backgroundColor:"#ff793f"}}>
    <div className="card-body">
    <p style={{color:"white",position:"relative",top:-15,fontSize:20}}>Python</p>
     <p style={{color:"white",position:"relative",right:-3,top:-40,fontSize:12}}>mode in 2008 </p>
     <p style={{color:"white",position:"relative",top:-50,fontSize:30}}>98382</p>
    </div>
  </div>
</div>

<div className="card-group"style={{position:"relative",top:-640,right:-200,width:1165,borderRadius:0,padding:20}}>
  <div className="card"style={{margin:2,marginLeft:10,marginTop:10,borderRadius:6,height:100 ,backgroundColor:"#16a085"}} >
    <div className="card-body">
    <p style={{color:"white",position:"relative",top:-15,fontSize:20}}>Reactjs</p>
     <p style={{color:"white",position:"relative",right:-3,top:-40,fontSize:12}}>mode in 2008 </p>
     <p style={{color:"white",position:"relative",top:-50,fontSize:30}}>12324</p>
    </div>
  </div>
  <div className="card" style={{margin:2,marginLeft:10,marginTop:10,borderRadius:6,height:100,backgroundColor:"#9b59b6"}}>
    <div className="card-body">
    <p style={{color:"white",position:"relative",top:-15,fontSize:20}}>Java</p>
     <p style={{color:"white",position:"relative",right:-3,top:-40,fontSize:12}}>mode in 2008 </p>
     <p style={{color:"white",position:"relative",top:-50,fontSize:30}}>69868</p>
    
    </div>
  </div>
  <div className="card" style={{margin:2,marginLeft:10,marginTop:10,borderRadius:6,height:100,backgroundColor:"#e67e22"}}>
    <div className="card-body">
    <p style={{color:"white",position:"relative",top:-15,fontSize:20}}>Nodejs</p>
     <p style={{color:"white",position:"relative",right:-3,top:-40,fontSize:12}}>mode in 2008 </p>
     <p style={{color:"white",position:"relative",top:-50,fontSize:30}}>27393</p>
    </div>
  </div>
</div>

<div className="card-group"style={{position:"relative",top:-640,right:-200,width:1165,borderRadius:0,padding:20}}>
  <div className="card"style={{margin:2,marginLeft:10,marginTop:10,borderRadius:6,height:100 ,backgroundColor:"#badc58"}} >
    <div className="card-body">
    <p style={{color:"white",position:"relative",top:-15,fontSize:20}}>Sql</p>
     <p style={{color:"white",position:"relative",right:-3,top:-40,fontSize:12}}>mode in 2008 </p>
     <p style={{color:"white",position:"relative",top:-50,fontSize:30}}>78091</p>
    </div>
  </div>
  <div className="card" style={{margin:2,marginLeft:10,marginTop:10,borderRadius:6,height:100,backgroundColor:"#ff7979"}}>
    <div className="card-body">
    <p style={{color:"white",position:"relative",top:-15,fontSize:20}}>Mysql</p>
     <p style={{color:"white",position:"relative",right:-3,top:-40,fontSize:12}}>mode in 2008 </p>
     <p style={{color:"white",position:"relative",top:-50,fontSize:30}}>89201</p>
    </div>
  </div>
  <div className="card" style={{margin:2,marginLeft:10,marginTop:10,borderRadius:6,height:100,backgroundColor:"#dff9fb"}}>
    <div className="card-body">
    <p style={{color:"white",position:"relative",top:-15,fontSize:20}}>Mongoose</p>
     <p style={{color:"white",position:"relative",right:-3,top:-40,fontSize:12}}>mode in 2008 </p>
     <p style={{color:"white",position:"relative",top:-50,fontSize:30}}>34567</p>
    </div>
  </div>
</div>




            </div>
         );
    }
}
 
export default Page;