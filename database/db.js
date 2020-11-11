
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
        return result.recordset;
};

async function getPatientByID(id) {

    await sql.connect(dbConfig())

        // Database query and get patient by ID
        var TAJdata = await sql.query(`SELECT TAJ, Name, SzuleteskoriName, MotherName, PlaceBirth, DateBirth from Personal_data where TAJ = ${id}`);

        return TAJdata.recordset[0];

};

async function createPatient(req) {

    await sql.connect(dbConfig())

        // Insert a new patient to the database
        var addPatient = await sql.query("INSERT INTO [Personal_data] (TAJ, Name, SzuleteskoriName, MotherName, PlaceBirth, DateBirth) VALUES ('"+req.body.TAJ+"','"+req.body.Name+"','"+req.body.SzuleteskoriName+"','"+req.body.MotherName+"','"+req.body.PlaceBirth+"','"+req.body.DateBirth.replace(/T.*/,"")+"')");

};


module.exports = {

    getPatientList,
    getPatientByID,
    createPatient,
    
};

