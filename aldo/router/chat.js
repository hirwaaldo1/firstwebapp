const express =require('express')
const router =express.Router()
const {Chat} =require('../module/Chats')
router.get('/getchats',(req,res)=>{
Chat.find()
    .populate('sender')
    .exec((err,chats) =>{
        res.status(200).send(chats)
    })

})
module.exports=router
