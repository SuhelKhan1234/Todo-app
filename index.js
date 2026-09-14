const express = require("express")
const app = express(); //server inteceate

// app.listen(3000, ()=> {
//     console.log ("App is runing Successfully")
// })

//load config from enc file

require("dotenv").config();

const PORT = process.env.PORT || 4000;

//middleware to parse json request body

app.use(express.json());

const todoRoutes =  require("./routes/todo");

//Mount the todo API Routes

app.use("/api/v1", todoRoutes);


//Connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default route

app.get("/", (req,res) =>{
    res.send(`<h1>This is HOMEPAGE baby</h1>`);
})


//srate Server
app.listen(PORT, () => {
    console.log(`Server started successfullu at ${PORT}`);

});