const mongoose=require('mongoose')
const bcrypt =require('bcrypt')
const Schema =mongoose.Schema
const newSchema=new Schema ({
   fristName:{
        type:String,
        default:""
    },
    lastName:{
        type:String,
        default:""
    },
    email:{
        type:String,
        default:""
    },
    password:{
        type:String,
        default:""
    },
  passwordConfim:{
        type:String,
        default:""
    },
   image:{
    type:String,
    default:""
   },
    isDeleted:{
        type:Boolean,
        default:false
    },
})
newSchema.methods.generateHash =function(password){
 return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null)
}
newSchema.methods.validpassword=function(){
    return bcrypt.compareSync(password,this.password)
}
const Aldo =mongoose.model('Aldo',newSchema)
module.exports=Aldo

