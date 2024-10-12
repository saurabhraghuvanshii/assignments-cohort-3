const express = require("express");
<<<<<<< HEAD
require('dotenv').config()
const mongoose = require("mongoose")
||||||| parent of c556ad3 (week4 assgnment done but not hard one)
const dotenv = require("dotenv");
dotenv.config();
=======
const dotenv = require("dotenv");
const mongoose = require("mongoose")
dotenv.config();
//console.log(process.env.moongose_url)
>>>>>>> c556ad3 (week4 assgnment done but not hard one)

<<<<<<< HEAD
const UserRouter = require('./routes/user');
const todoRouter = require('./routes/todo');
||||||| parent of c556ad3 (week4 assgnment done but not hard one)
=======



const  { UserRouter } = require('./routes/user');
const { todoRouter } = require('./routes/todo');
>>>>>>> c556ad3 (week4 assgnment done but not hard one)
const app = express();
app.use(express.json());

<<<<<<< HEAD
||||||| parent of c556ad3 (week4 assgnment done but not hard one)
app.get("/healthy", (req, res)=> res.send("I am Healthy"));
=======
//app.get("/healthy", (req, res)=> res.send("I am Healthy"));
>>>>>>> c556ad3 (week4 assgnment done but not hard one)

//  start writing your routes here
app.use("/user", UserRouter);

app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));

<<<<<<< HEAD
app.use("/todo", todoRouter);

async function main() {
    await mongoose.connect(process.env.moongose_url)
    app.listen(3000);
}

main()
||||||| parent of c556ad3 (week4 assgnment done but not hard one)
=======
app.use("/todo", todoRouter);

async function main(){
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(process.env.PORT);
}

main()
>>>>>>> c556ad3 (week4 assgnment done but not hard one)
