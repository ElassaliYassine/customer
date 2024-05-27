const express = require('express');
const router = express.Router();
const User = require("../models/customerSchema");
var moment = require('moment');



router.get("",( req , res)=>{
    res.render("user/add");
  });

router.post("",( req , res)=>{
    // const user = new User(req.body);
    // user.save().then(() => {
  
      User.create(req.body).then(() => {
      res.redirect("/");
    }).catch((err) => {
        console.log(err)
    });
  
    
  });




module.exports = router