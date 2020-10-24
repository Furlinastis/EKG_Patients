import bodyParser from 'body-parser';
import express from 'express';
import getPatientList from './database/db';// Set up the express app
const app = express();// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/v1/todos/', (req, res) => {
  //console.log(req.params.name);
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: getPatientList
  })
});const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});


app.get('/api/v1/todos/:id', (req, res) => { 
  const id = parseInt(req.params.id, 10);  
  db.map((todo) => {    
    if (todo.id === id) {      
      return res.status(200).send({        
        success: 'true',       
         message: 'todo retrieved successfully',        
         todo,      
        });   
       } 
      });
 return res.status(404).send({   
   success: 'false',   
   message: 'todo does not exist',  
  });
});

