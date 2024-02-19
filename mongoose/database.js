const mongoose = require('mongoose');
const dbConnection = () => {
    // const url = "mongodb+srv://mohamedassim2001:Mohamed2001@ma88.qxfimfq.mongodb.net/m88?retryWrites=true&w=majority"
   
mongoose.connect(process.env.DB_URI).then(() =>{
    console.log('Connected to Database');
   
    });
}

    module.exports = dbConnection;