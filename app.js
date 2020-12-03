import app from './api/api';

const config = require ('./config/index');

async function startServer() {

try{
    app.app.listen(process.env.PORT, () => {
    console.log(`Server running successfully on port: ${process.env.PORT}`);
  })

}catch(e){
  console.log("ERROR37: " + e.message);
  } 
};

startServer();



