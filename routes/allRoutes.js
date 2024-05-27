const express = require('express');
const router = express.Router();
const User = require("../models/customerSchema");
var moment = require('moment');
const userController = require('../controllers/userController');


// :::::::::::     Get Requst   :::::::::::::::
  router.get("/", userController.user_index_get);
    
  router.get("/edit/:id", userController.bbb);
  
  router.get("/view/:id",( req , res)=>{
    // result opject 
    User.findById(req.params.id)
        .then((result)=>{
          res.render("user/view" , {user:result ,moment:moment} );
        })
        .catch((err)=>{
          console.log(err);
        })
  });
  
  // :::::::::::     Post Requst   :::::::::::::::
  
  router.post("/search" , (req , res)=>{
    const searchText=req.body.search.trim(); 
    User.find({$or:[{firsName:searchText} , {lastName:searchText}]} )
      .then((result)=>{
        res.render("user/search" , {users:result ,moment:moment} );
      }).catch((err)=>{
        console.log(err);
      })
  })
  
  // :::::::::::     delete Requst   :::::::::::::::
  
  
  router.delete("/delete/:id",( req , res)=>{
  
    User.findByIdAndDelete(req.params.id)
    .then((result)=>{
      res.redirect("/");
    })
    .catch((err)=>{
      console.log(err);
    });
  
    
  });
  
  // :::::::::::     update Requst   :::::::::::::::
  
  router.put("/update/:id",(req , res)=>{
    
    User.findByIdAndUpdate(req.params.id , req.body)
      .then(()=>{
        res.redirect('/')
      }).catch(err =>{
        console.log(err)
      })
  
    // User.updateOne(req.body)
    // .then(()=>{
    //   res.redirect('/')
    // }).catch(err =>{
    //   console.log(err)
    // })
  })
  
  
  
  
  
  



module.exports = router