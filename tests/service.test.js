const testing = require('../database/db');
const https = require('http');

//const application = require('../app.js');

/*describe('greet-test', () => {

    it('should retutn the greeting message', () => {
    const result = testing.greet('Noemi')
    expect(result).toMatch(/Noemi/);
    });

    it('should return the greeting message with error', () => {
        const result = testing.greet('Akarmilyen string')
        expect(result).toMatch(/Akarmilyen string/);
        });
});
*/
describe('get-test', () => {
    //startServer();

    it('should retutn the patient data status 200',  () => {
        const options = {
            hostname: "localhost",
            port : 3000,
            path : ":api/222333444",
            method: 'GET'
        } 
        const req =  https.request(options, res =>{
            console.log(res.statusCode);
             expect(res.statusCode).toMatch(200);

           /* res.on('data', d => {
                console.log(d);
                    expect(d).toMatch({
                        "success": true,
                        "patientData": {
                            "TAJ": 222333444,
                            "Name": "Fekete Dóra",
                            "SzuleteskoriName": "Fekete Szabina",
                            "MotherName": "Grózinger Kata",
                            "PlaceBirth": "Budapest",
                            "DateBirth": "1992-06-18T00:00:00.000Z"
                        }
                    
                    });

            })*/

        });

    });
/*
    it('should return the greeting message with error', () => {
        const result = testing.greet('Akarmilyen string')
        expect(result).toMatch(/Akarmilyen string/);
        });
*/
});
