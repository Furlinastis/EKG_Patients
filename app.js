import express from 'express';
import test from './api/api';
import app from './api/api';
//const api = express();
//onst hereyou = new HereYou();

const config = require ('./config/index');

async function startServer() {

try{
    app.app.listen(process.env.PORT, () => {
    console.log(`Server running successfully on port: ${process.env.PORT}`);
    console.log(test.test);
  })

}catch(e){
  console.log("ERROR37: " + e.message);
  } 
};

startServer();



