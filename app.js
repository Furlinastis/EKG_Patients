import bodyParser from 'body-parser';
import express from 'express';
//import {getPatientList,test} from './database/db';// Set up the express app
import PatientService from './services/service';

const app = express();// Parse incoming requests data
const db = require('./database/db');
//const PatientService = require('./services/service');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});

app.get('/api', async (req, res) => {
  try{
    let ps = new PatientService();
    const {success, message, todos2} = await ps.patientList();
    //console.log(await ps.patientList());
    return res.json({success, message, todos2});
  }catch(e){
    console.log("ERROR2: " + e.message);
  } 
});

app.get('/api/:id', async (req, res) => {
  const id = parseInt(req.params.id)
  try{
    let ps = new PatientService(id);
    const {success, patientData} = await ps.patientByID(id);
    //console.log(await ps.patientList());
    return res.json({success, patientData});
  }catch(e){
    console.log("ERROR37: " + e.message);
    return res.json({success, patientData});
  } 
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