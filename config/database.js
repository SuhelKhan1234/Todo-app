const mongoose = require("mongoose");
require("dotenv").config();

console.log("DATABASE_URL =", process.env.DATABASE_URL);


const dbConnect =() =>{
    mongoose.connect(process.env.DATABASE_URL, {
        // useNewUrlParser:true,
        // useUnifiedTopology:true,
    })

    .then(()=> console.log("DB ka Connection is Successfully"))
    .catch((error) => {
        console.log("Issue in DB Connection");
        console.error(error.message);
        process.exit(1);
    });
    

   
    
}

module.exports = dbConnect;