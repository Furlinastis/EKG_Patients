import "babel-polyfill";
const config = require ('../config/index');
const supertest = require('supertest');
const application = require('../api/api');
const request = supertest(application.app);

describe('/GET return patient by TAJ', () => {

    it('successful request', async done => {
        const response = await request.get('/api/111222333');

        expect(response.status).toBe(200)
        expect(response.body.success).toEqual(true)
        done()

      })

      it('returns correct data', async done => {

        const response = await request.get('/api/111222333');
        //console.log(response.body);

        expect(response).toBeDefined()
        expect(response.body.patientData.TAJ).toEqual(111222333)
        expect(response.body.patientData.MotherName).toEqual('Karl Zsófia')
        expect(response.body.patientData.Name).toEqual('Fekete József')
        expect(response.body.patientData.PlaceBirth).toEqual('Budapest')

        //TODO: add hozzá a fennmaradó részét

        /*expect(200,   {

                TAJ: 123456789,
                Name: 'NAME',
                SzuleteskoriName: 'SZULNAME',
                MotherName: 'MNAME',
                PlaceBirth: 'PB',
                DateBirth: '1911-11-11'
          }, done)*/
         done()
      })
    })

    describe('/POST create patient', () => {
                 //console.log(response.body);
             //https://www.npmjs.com/package/supertest
             //https://zellwk.com/blog/endpoint-testing/
             //https://jestjs.io/docs/en/tutorial-async
   
          it('returns correct data', async done => {
             const response = await request.post('/api')
             .send({ TAJ: 784784784, Name: 'NAME', SzuleteskoriName: 'SZULNAME', MotherName: 'MNAME', PlaceBirth: 'PB', DateBirth: '1911-11-11'})
             expect(response.status).toBe(201)
             // TODO: expect(response.body.success).toEqual(true)
             // TODO: expect(response).toBeDefined()
             // TODO: expect(response.body.patientData.TAJ).toEqual(123456789)
             // TODO: expect(response.body.patientData.Name).toEqual('NAME')
             expect(1).toBe(1)
             done()
              })
      })    

