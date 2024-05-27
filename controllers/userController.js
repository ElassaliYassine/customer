const User = require("../models/customerSchema");
var moment = require('moment');

const user_index_get =  (req, res) => {
    User.find()
        .then((reselt)=>{
          res.render('index' , {mytitle : "Home page" , users:reselt , moment:moment } );
        })
        .catch((err)=>{
          console.log(err)
        }); 
  }


const bbb = ( req , res)=>{
    User.findById(req.params.id)
        .then((result)=>{
          res.render("user/edit",{user:result,  moment:moment } );
        })
        .catch((err)=>{console.log(err)});
  
  }


  module.exports = {user_index_get , bbb}
