//app.get('/', function (req, res)

function test(){
    return "TEST";

}

async function getPatientList() {
    const sql = require("mssql");

    // config for your database
    const config = {
        user: 'sa',
        password: 'BizagiBPM123',
        server: 'localhost', 
        database: 'SzemelyesAdatok',
        port: 53329
    };

    // connect to your database
    await sql.connect(config)
    

        // query to the database and get the records
        var result = await sql.query('SELECT * from Personal_data');
       
        console.log("NOW");
        //console.log(result);
        return result;
    //});
};

async function getPatientByID(id) {
    const sql = require("mssql");

    // config for your database
    const config = {
        user: 'sa',
        password: 'BizagiBPM123',
        server: 'localhost', 
        database: 'SzemelyesAdatok',
        port: 53329
    };

    // connect to your database
    await sql.connect(config)
    

        // query to the database and get the records
        var TAJdata = await sql.query(`SELECT TAJ, Name, SzuleteskoriName, MotherName, PlaceBirth, DateBirth from Personal_data where TAJ = ${id}`);
       
        console.log("NOW");
        //console.log(result);
        return TAJdata.recordset[0];
    //});
};

async function createPatient(req) {
    const sql = require("mssql");

    // config for your database
    const config = {
        user: 'sa',
        password: 'BizagiBPM123',
        server: 'localhost', 
        database: 'SzemelyesAdatok',
        port: 53329
    };

    // connect to your database
    await sql.connect(config)
    

        // query to the database and get the records
        var addPatient = await sql.query("INSERT INTO [Personal_data] (TAJ, Name, SzuleteskoriName, MotherName, PlaceBirth, DateBirth) VALUES ('"+req.body.TAJ+"','"+req.body.Name+"','"+req.body.SzuleteskoriName+"','"+req.body.MotherName+"','"+req.body.PlaceBirth+"','"+req.body.DateBirth+"')");
       
        console.log("NOW");
        //console.log(result);

    //});
};





module.exports = {
    /*getPatientList : async(db) =>{
        let sqlRequest = await getPatientList();
        return sqlRequest;
    },*/
    getPatientList,
    test,
    getPatientByID,
    createPatient
};

