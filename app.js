const express = require('express');
const app = express();
const port = process.env.PORT || 3000 ;
const mongoose = require('mongoose');
app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');
app.use(express.static('public'));
var methodOverride = require('method-override');
app.use(methodOverride('_method'));
const allRoutes = require("./routes/allRoutes");
const addUserRoute = require('./routes/addUser');


// start Auto refrech 
 
  const path = require("path");
  const livereload = require("livereload");
  const liveReloadServer = livereload.createServer();
  liveReloadServer.watch(path.join(__dirname, 'public'));
  
  
  const connectLivereload = require("connect-livereload");
  app.use(connectLivereload());
  
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });
//  end Auto refrech 



mongoose
  .connect("mongodb://yassine:yassine@ac-tmscor2-shard-00-00.07kljkx.mongodb.net:27017,ac-tmscor2-shard-00-01.07kljkx.mongodb.net:27017,ac-tmscor2-shard-00-02.07kljkx.mongodb.net:27017/?ssl=true&replicaSet=atlas-asdwhr-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0")
  .then(() => { 
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`)
    })
  })
  .catch((err) => { console.log(err)});


app.use(allRoutes);
app.use('/user/add.html',addUserRoute);
 

