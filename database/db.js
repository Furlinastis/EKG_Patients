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

module.exports = {
    /*getPatientList : async(db) =>{
        let sqlRequest = await getPatientList();
        return sqlRequest;
    },*/
    getPatientList,
    test
};

