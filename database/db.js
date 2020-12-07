
const sql = require("mssql");

// Config for database
function dbConfig() {
    return {
        database: process.env.DATABASE,
        user: process.env.USER,
        password: process.env.PASSWORD,
        server: process.env.SERVER, 
        port: parseInt(process.env.DATABASE_PORT)
      };
  };


async function getPatientList() {

    await sql.connect(dbConfig())
  
        // Database query and get the recordset
        var result = await sql.query('SELECT * from Personal_data');
        sql.close();
        return result.recordset;
};



async function getPatientByID(id) {
    console.log(dbConfig());
    await sql.connect(dbConfig())

        // Database query, get patient by ID
        var TAJdata = await sql.query
        (`SELECT TAJ, Name, SzuleteskoriName, MotherName, PlaceBirth, DateBirth from Personal_data where TAJ = ${id}`);
        sql.close();

        return TAJdata.recordset[0];

};

async function createPatient(req) {

    await sql.connect(dbConfig())

        // Insert a new patient to the database
        var addPatient = await sql.query("INSERT INTO [Personal_data] (TAJ, Name, SzuleteskoriName, MotherName, PlaceBirth, DateBirth) VALUES ('"+req.body.TAJ+"','"+req.body.Name+"','"+req.body.SzuleteskoriName+"','"+req.body.MotherName+"','"+req.body.PlaceBirth+"','"+req.body.DateBirth.replace(/T.*/,"")+"')");
        sql.close();
        return addPatient.rowsAffected[0];
};

async function updatePatient(id,req) {
      //  console.log(req);
    await sql.connect(dbConfig())

        // Update patient to the database
        console.log(`UPDATE Personal_data SET Name='${req.body.Name}', SzuleteskoriName='${req.body.SzuleteskoriName}', MotherName='${req.body.MotherName}', PlaceBirth='${req.body.MotherName}' DateBirth='${req.body.DateBirth.replace(/T.*/,'')}' where TAJ = ${id}`);
        
        let updatePatient = await sql.query(`UPDATE Personal_data SET Name='${req.body.Name}', SzuleteskoriName='${req.body.SzuleteskoriName}', MotherName='${req.body.MotherName}', PlaceBirth='${req.body.PlaceBirth}', DateBirth='${req.body.DateBirth.replace(/T.*/,'')}' where TAJ = ${id}`);

        console.log(updatePatient);
        sql.close();
        return updatePatient.rowsAffected[0];
};

    function greet (name){
    return 'Welcome ' + name;
    }

module.exports = {

    getPatientList,
    getPatientByID,
    createPatient,
    updatePatient,
    greet
    
};

