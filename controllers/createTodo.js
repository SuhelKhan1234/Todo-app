const Todo = require("../models/Todo");
//default route handler

exports.createTodo =async(req, res) =>{
    try{
        //extract lital and description from reauest body
        const {title, description} = req.body;
          //create a new Todo Obj and insert in DB
          const  response = await Todo.create({title,description});
          // send a json response with a succes flag
            res.status (200).json({
                success: true,
                data:response,
                message: 'Enter Created Successfully'
            }
        );

    }

    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success: false,
            data: "Internal Server Error",
            message: err.message,

        })

    }
}