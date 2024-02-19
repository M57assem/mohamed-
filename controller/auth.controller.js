const express = require('express');
const bcrypt = require('bcryptjs');
const DB = require('../data/database');
const asyHchandler =require('express-async-handler')
const { Db } = require('mongodb');
const ApiError = require('../utilis/handler');




const GetUsers =  asyHchandler(async(req,res,next)=>{

    const users = await DB.find({});
    if(users.length ===0 ){
      return next(new ApiError("Null !!!",500));
    }  
    res.json(users);
     
});



const signup = asyHchandler( async (req, res, next) => {
  
    const { Name, Email, Password , confirmPassword , Height , Lenght } = req.body;
    const findUser = await DB.findOne({ Email });

    if (findUser) {
      return next(new ApiError("Wrong email or password !",404));
    }

    const hashedPassword = await bcrypt.hash(Password, 10);
    const newUser = new DB({ Name, Email, Password: hashedPassword ,confirmPassword,Height,Lenght});
    await newUser.save();
    res.status(201).send("Registered successfully!");
    if(!newUser){
      return next(new ApiError("Something Wrong",404));
    } 
});

 
  const login = asyHchandler( async (req, res , next) => {
 
    const { Email , Password } = req.body;

    if(!Email && !Password){
      return next(new ApiError("Wrong email and passwordare required!",404));
    }
    const findUser = await DB.findOne({ Email });

    if (!findUser) {
      return next(new ApiError("Wrong email or password 111111111!",404));
    }
    const passwordMatch = await bcrypt.compare(Password, findUser.Password);
    
    if(passwordMatch) {
        res.status(200).send( ' Logged in successfully!')
        
    }else{
      return next(new ApiError("Wrong email or password 2222222!",404));
    }
    
  })


  



  




 





module.exports ={
    GetUsers,
    signup,
    login
}