import db from '../database/db';

export default class PatientService {
    constructor() {};
  
    async patientList(){
        try{
            const Success = 'true';
            const Message = 'retrieved successfully';
            const FromPl = await db.getPatientList();

            return {success: Success, message: Message, frompatientlist : FromPl};

        }
        catch(e){console.log("ERROR15: " + e.message)}
    };

    async patientByID(id){
        try{
            
            const PatientData = await db.getPatientByID(id);
            console.log(PatientData);
            const Success = PatientData === undefined ? false: true;
            return {success: Success, patientData : PatientData};

        }
        catch(e){console.log("ERROR26: " + e.message)}
    };

    async patientCreate(req){
        try{

            const PatientCreate= await db.createPatient(req);
            return  PatientCreate;

        }
        catch(e){console.log("ERROR33: " + e.message)}
    };




    async patientUpdate(id,req){
        try{
            
            const PatientPUT= await db.updatePatient(id,req);
            return PatientPUT;

        }
        catch(e){console.log("ERROR35: " + e.message)}
    };

  }

