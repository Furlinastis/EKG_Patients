import db from '../database/db';

export default class PatientService {
    constructor() {};
  
    async patientList(){
        try{
            const Success = 'true';
            const Message = 'retrieved successfully';
            const Todos2 = await db.getPatientList();

            return {success: Success, message: Message, todos2 : Todos2};

        }
        catch(e){console.log("ERROR: " + e.Message)}

    };
}