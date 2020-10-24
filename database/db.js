//app.get('/', function (req, res)
var getPatientList = function() {
   
    var sql = require("mssql");

    // config for your database
    var config = {
        user: 'sa',
        password: 'BizagiBPM123',
        server: 'localhost', 
        database: 'SzemelyesAdatok',
        port: 53329
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from Personal_data', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
           return recordset;
            
        });
    });
};

