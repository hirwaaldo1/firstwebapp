const User =require('../module/Users')
const Userchat=require('../module/Chats')
const express =require('express') 
const router =express.Router()
const multer = require('multer');
let uuidv4 = require('uuid/v4')
const DIR = './public/';

const storage = multer.diskStorage({
destination: (req, file, cb) => {
cb(null, DIR);
},
filename: (req, file, cb) => {
const fileName = file.originalname.toLowerCase().split(' ').join('-');
cb(null, uuidv4() + '-' + fileName)
}
});

var upload = multer({
storage: storage,
fileFilter: (req, file, cb) => {
if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
cb(null, true);
} else {
cb(null, false);
return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
}
}
});
const userSession1 =require('../module/Users1')
const profileSession =require('../module/profile')
  router.post('/login',(req,res)=>{

        const {body}=req
        const {
            fristName,
            lastName,
            password,
            passwordConfim,
            image
        }=body
        let {
            email
         }=body
        if(!fristName){
            return res.send({
                success:false,
                messanges:'Missing of fristname'
             })
        }
        if(!lastName){
            return res.send({
                success:false,
                messanges:'Missing of lastname'
             })
        }
        if(!email){
            return res.send({
                success:false,
                messanges:'Missing of email'
             })
        }
        if(!password){
            return res.send({
                success:false,
                messanges:'Missing of password'
             })
        }
        if(!passwordConfim){
            return res.send({
                success:false,
                messanges:'Missing of  passwordconfim'
             })
        }
        if(passwordConfim!==password){
         return res.send({
             success:false,
             messanges:'Passwords do not match'
          })
     }
        
        console.log('here')
        email=email.toLowerCase()
        User.find({
            email:email
        },(err,previousUsers)=>{
            if(err){
                return res.send({
                   success:false,
                   messanges:'Servers errors'
                })
              }else if(previousUsers.length >0){
               return res.send({
                   success:false,
                   messanges:'account already exits'
                })
            }
                const newUser =new User()
                newUser.fristName=fristName
                newUser.lastName=lastName
                newUser.email=email
                newUser.password=password
                newUser.passwordConfim=passwordConfim 
                newUser.save((err,data)=>{
                    if(err){
                        return res.send({
                            success:false,
                            messanges:'Servers errors',
                         })
                      }
                     return res.send({
                         success:true ,
                         messanges:'signed up',
                      
                      })
                })
                
        })
    })
    router.get('/login',(req,res)=>{
      User.find(req.param.id)
      .then(users=>res.json(users))
      .catch(err =>res.status(400).json('eroor'+err))
    })
    router.post('/profile',(req,res,next)=>{ 
       var userSession12=userSession1.userId
        User12 =User._id
      userSession1.find({
        userSession12:User12
      },(err,users)=>{
         if(err){
            console.log({'errr':+err});
            
           return res.send({
              success:false,
              messanges:'servers errors',
              messange:'',
           })
         }
         if(users.length != 1){
           return res.send({
              success:false,
              messanges:'errroe:Invaild',
              messange:'',
           })
         }
         const user=users[0]
      const profile1  =new profileSession()
      profile1.userId=User._id
      profile1.save((err,doc)=>{
        if(err){
           console.log({'errr1':+err});
           return res.send({
              success:false,
              messanges:'servers errors',
              messange:'',
           })
        }
        return res.send({
           success:true,
           fristName:user.fristName,
           messange:'signed in',
           messanges:'',
           token:doc._id
        })
      })

    })})
     router.post('/logout',(req,res,next)=>{ 
        const {body}=req
        const{
         password
        }=body
        let {
           email
        }=body
        if(!email){
           return res.send({
               success:false, 
               messanges:'Missing of email',
               messange:'',
            })
            }
            if(!password){
              return res.send({
                  success:false,
                  messanges:'Missing of password',
                  messange:'',
               })
               } 

         User.find({
            email:email,
            password:password
         },(err,users)=>{
            if(err){
               console.log({'errr':+err});
               
              return res.send({
                 success:false,
                 messanges:'servers errors',
                 messange:'',
              })
            }
            if(users.length != 1){
              return res.send({
                 success:false,
                 messanges:'errroe:Invaild',
                 messange:'',
              })
            }
            const user=users[0]
            if(!user.password){
              return res.send({
                 success:false,
                 messanges:'erroerwe:Invaild',
                 messange:'',
              })
            }
            const userSession =new userSession1()
            userSession.userId=user._id
            userSession.save((err,doc)=>{
              if(err){
                 console.log({'errr1':+err});
                 return res.send({
                    success:false,
                    messanges:'servers errors',
                    messange:'',
                 })
              }
              return res.send({
                 success:true,
                 fristName:user.fristName,
                 messange:'signed in',
                 messanges:'',
                 token:doc.userId
              })
            })
         })
    })
    router.get('/verify',(req,res)=>{ 
        const {query}=req
        const {token}=query
        userSession1.findOneAndUpdate({
           _id:token,
           isDelected:false
     
        },(err,session)=>{
           if(err){
              console.log(err)
              return res.send({
                 success:false,
                 messanges:'ERRORS:server error'
              })
           }
           if(session.length != 1){
              return res.send({
                 success:false,
                 messanges:'ERRORS:anvalid'
              })
           }else{
              return res.send({
                 success:true,
                 messanges:'Good'
              })
           }
        })
     })
     router.get('/logout',(req,res)=>{ 
        const {query}=req
        const {token}=query
        userSession1.findOneAndUpdate({
           _id:token,
           isDelected:false
     
        },{
        $set:{isDelected:true}
        },null,(err,session)=>{
           if(err){
              return res.send({
                 success:false,
                 messanges:'ERRORS:server error'
              })
           }
          
              return res.send({
                 success:true,
                 messanges:'Good'
              })
        })
     }) 
  router.get('/login/:id',(req,res)=>{
   User.findById(req.params.id)
   .then(user =>res.json(user))
   .catch(err =>{res.status(400).json('errror'+err)})
  })
  router.delete('/login/:id',(req,res)=>{
   User.findByIdAndDelete(req.params.id)
   .then(() =>res.json('user delected'))
   .catch(err =>{res.status(400).json('errror'+err)})
  })
  router.post('/login/update/:id',(req,res)=>{
   User.findById(req.params.id)
   .then(user =>{
      user.fristName=req.body.fristName
      user.lastName=req.body.lastName
      user.email=req.body.email
      user.password=req.body.password
      user.passwordConfim=req.body.passwordConfim   
      user.save()
      .then(()=> res.json('user update'))
      .catch(err =>res.status(400).json('error'+err))

   })
   .catch(err =>{res.status(400).json('errror'+err)})
  })
  router.post('/login/uploadImage/:id',upload.single('avatar'),(req,res)=>{
   console.log(req.file, req.body)
   const url = req.protocol + '://' + req.get('host')
   User.findById(req.params.id)
   .then(user =>{ 
      user.image=url + '/public/' + req.file.filename
      user.save()
      .then(()=> res.json('user update'))
      .catch(err =>res.status(400).json('error'+err))

   })
   .catch(err =>{res.status(400).json('errror'+err)})
  })
  router.get('/chat',(req,res)=>{
   Userchat.find(req.param.id)
   .then(users=>res.json(users))
   .catch(err =>res.status(400).json('eroor'+err))
 })
     module.exports=router