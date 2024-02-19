const express = require('express');
const app = express();
const asyHchandler =require('express-async-handler')
const ApiError = require('./utilis/handler')
const globalError = require('./middleware/ErrorGlobal')
const dbConnection = require('./mongoose/database')
const dotenv  = require('dotenv')
const morgan = require('morgan')
const cors = require('cors')




app.use(cors());
app.use(express.json());

dotenv.config({ path: 'config.env' });


dbConnection();
// const mongoose = require('mongoose');
// const url = "mongodb+srv://mohamedassim2001:Mohamed2001@ma88.qxfimfq.mongodb.net/m88?retryWrites=true&w=majority"
// mongoose.connect(url).then(() =>{
//     console.log('Connected to Database');
   
//     });

const auhtrouter = require('./routes/auth.route');
app.use('/api/users',auhtrouter);

//محتاج افهمها 

 app.all('*', (req, res, next) => {
 return next (new ApiError(`Can't find this route`, 400));

   
  });
  app.use(globalError);

 


const port = process.env.port ||3000;
 const server = app.listen(port,()=>{
console.log('Welcome')
});


// Handle rejection outside express
process.on('unhandledRejection', (err) => {
    console.error(`UnhandledRejection Errors: ${err.name} | ${err.message}`);
    server.close(() => {
      console.error(`Shutting down....`);
      process.exit(1);
    });
  });