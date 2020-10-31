import bodyParser from 'body-parser';
import express from 'express';
import {getPatientList,test} from './database/db';// Set up the express app

const app = express();// Parse incoming requests data
const db = require('./database/db');

let usetTEST = db.test;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api', async (req, res) => {
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

app.get('/api/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  //console.log(req.params.name);
  console.log("START");
  res.status(200).send({
    success: 'true',
    b: await db.getPatientByID(id)
  })
  console.log("FINISH");
});

app.post('/api', async (req, res) => {
  console.log(req.body);
  if(!req.body.TAJ) {
    return res.status(400).send({
      success: 'false',
      message: 'TAJ is required'
    });
  } else if(!req.body.Name) {
    return res.status(400).send({
      success: 'false',
      message: 'Name is required'
    });
  }
  await db.createPatient(req);
 return res.status(201).send({
   success: 'true',
   message: 'todo added successfully'
 })
});


/*app.get('/api/v1/todos/:id', (req, res) => { 
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
});*/

