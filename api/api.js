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
      if(success == false) 
        {
           return res.status(404).send({success :false, patientData :{}});
      }
    else 
      return res.json({success, patientData});
    }catch(e){
      console.log("ERROR38: " + e.message);
      return res.json({success :false, patientData :{}});
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
      let ps = new PatientService();
      let createNew = await ps.patientCreate(req)
      return res.status(createNew ? 201 : 400).send({
     success: createNew ? 'true' : "failed",
     message: createNew ? 'Patient added successfully' : 'Patient cannot added, the request was failed'
   })
  });

  app.put('/api/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    try{
      let ps = new PatientService(id);
      let updateResult = await ps.patientUpdate(id,req) >0 ?   true : false;
      console.log(updateResult);
      return  res.status(updateResult ? 200 :400).send({
        success: updateResult ?   "success" :"failed",
        rowsAffected: updateResult
      });

    }catch(e){
      console.log("ERROR40: " + e.message);
    } 
  });


module.exports = {
  test, 
  app
};

