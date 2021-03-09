const express =require('express');


const router=express.Router();


router.get('/login' , (req ,res)=>{
    res.send('Welcome to the register')
});

router.get('/register' , (req ,res)=>{
    res.send('Welcome to the login')
})





module.exports=router