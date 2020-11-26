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
            const Success = PatientData === undefined ? false : true;
            return {success: Success, patientData : PatientData};

        }
        catch(e){console.log("ERROR26: " + e.message)}
    };

}