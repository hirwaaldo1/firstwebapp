const mongoose=require('mongoose')
const Schema =mongoose.Schema
const chatSchema = new mongoose.Schema({
    message:{
        type:String
    },
    sender:{
        type:Schema.Types.ObjectId,
        ref:'Userchat'
    },
    type:{
        type:String
    },}, {timestamps:true}
)
const Userchat1 =mongoose.model('Userchat',chatSchema)
module.exports=Userchat1
