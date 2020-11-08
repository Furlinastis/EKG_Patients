import bodyParser from 'body-parser';
import express from 'express';
//import {getPatientList,test} from './database/db';// Set up the express app
import PatientService from './services/service';

const app = express();// Parse incoming requests data
const db = require('./database/db');
//const PatientService = require('./services/service');

//let usetTEST = db.test;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api', async (req, res) => {
  try{
    let ps = new PatientService();
    const {success, message, todos2, a} = await ps.patientList();
    //console.log(await ps.patientList());
    return res.json({success, message, todos2});
  }catch(e){
    console.log("ERROR2: " + e.message);
  }
  
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