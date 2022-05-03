const mongoose = require('mongoose');

const connectDatabase = ( )=>{
    // console.log(process.env.DB_URI);
    mongoose.connect(process.env.DB_URI).then((data)=>{
        console.log (`MongoDB connected with server: ${data.connection.host}`);
    })
}


module.exports = connectDatabase