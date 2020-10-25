import bodyParser from 'body-parser';
import express from 'express';
import {getPatientList,test} from './database/db';// Set up the express app

const app = express();// Parse incoming requests data
const db = require('./database/db');

let usetTEST = db.test;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/v1/todos/', async (req, res) => {
  //console.log(req.params.name);
  console.log("START");
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos2: await db.getPatientList()/*.then ((result) => console.log( result ))*/,
    a : usetTEST()
  })
  console.log("FINISH");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});


app.get('/api/v1/todos/:id', (req, res) => { 
  const id = parseInt(req.params.id, 10);  
  db.map((todo) => {    
    if (todo.id === id) {      
      return res.status(200).send({        
        success: 'true',        
         message: 'todo retrieved successfully',        
         todo,      
        });   
       } 
      });
 return res.status(404).send({   
   success: 'false',   
   message: 'todo does not exist',  
  });
});

