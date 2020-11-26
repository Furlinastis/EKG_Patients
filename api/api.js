import PatientService from '../services/service';
import bodyParser from 'body-parser';
import express from 'express';

const db = require('../database/db');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var test = 'teszt';
console.log(test);

app.get('/api', async (req, res) => {
    try{
      let ps = new PatientService();
      const {success, message, frompatientlist} = await ps.patientList();
      //console.log(await ps.patientList());
      return res.json({success, message, frompatientlist});
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


module.exports = {
  test, 
  app
};

