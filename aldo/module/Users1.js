const mongoose=require('mongoose')
const  userSession=new mongoose.Schema({
    userId:{
        type:String,
        default:''
    },
    timestamp:{
        type:Date,
        default:Date.now()
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
})
module.exports=mongoose.model('userSession', userSession)