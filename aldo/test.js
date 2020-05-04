const express=require('express')
const path =require('path')
const mongoose=require('mongoose')
const cors=require('cors')
const Userchat=require('./module/Chats')
const connect = mongoose.connect('mongodb://localhost:27017/test12',{useNewUrlParser:true,useUnifiedTopology: true})
mongoose.Promise=global.Promise
const app =express()
const server =require('http').createServer(app)
const io=require('socket.io')(server)
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use('/public',express.static('public'))
var port =process.env.PORT || 5000
var Users =require(".//router/Users")
app.use('/users',Users)
app.use('/chat',require(".//router/chat"))
io.on('connection',socket =>{
    socket.on('imput chat Messange',msg =>{
        connect
        .then(db =>{
            try{
            let chat= new Userchat({message:msg.chatMessange,sender:msg.userId})
            chat.save((err,doc)=>{
            if(err)return res.json({success:false,err})
            Userchat.find({'_id':doc._id})
            .populate('sender')
            .exec((err,doc)=>{
            return io.emit('output chat Messange',doc)
            }) })
            }catch(error){
            console.error(error);
            console.log(';adpsadpskdaksdoskad');
            }
        })
    })
})
server.listen(port,()=>{
    console.log("Server is running on port");
    
})