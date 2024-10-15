const express = require("express");
<<<<<<< HEAD
<<<<<<< HEAD
require('dotenv').config()
const mongoose = require("mongoose")
||||||| parent of c556ad3 (week4 assgnment done but not hard one)
const dotenv = require("dotenv");
dotenv.config();
=======
const dotenv = require("dotenv");
||||||| parent of eb9ff86 (check for undefined)
const dotenv = require("dotenv");
=======
require('dotenv').config()
>>>>>>> eb9ff86 (check for undefined)
const mongoose = require("mongoose")
<<<<<<< HEAD
dotenv.config();
//console.log(process.env.moongose_url)
>>>>>>> c556ad3 (week4 assgnment done but not hard one)

<<<<<<< HEAD
<<<<<<< HEAD
||||||| parent of 0602141 (complete login)
||||||| parent of eb9ff86 (check for undefined)
dotenv.config();
//console.log(process.env.moongose_url)
=======
>>>>>>> eb9ff86 (check for undefined)

//console.log(process.env.moongose_url)


=======

>>>>>>> 0602141 (complete login)
const UserRouter = require('./routes/user');
const todoRouter = require('./routes/todo');
||||||| parent of c556ad3 (week4 assgnment done but not hard one)
=======



<<<<<<< HEAD
const  { UserRouter } = require('./routes/user');
const { todoRouter } = require('./routes/todo');
>>>>>>> c556ad3 (week4 assgnment done but not hard one)
||||||| parent of fe9f654 (make user signup possible)
const  { UserRouter } = require('./routes/user');
const { todoRouter } = require('./routes/todo');
=======
const UserRouter = require('./routes/user');
const todoRouter = require('./routes/todo');
>>>>>>> fe9f654 (make user signup possible)
const app = express();
app.use(express.json());

<<<<<<< HEAD
<<<<<<< HEAD
||||||| parent of c556ad3 (week4 assgnment done but not hard one)
app.get("/healthy", (req, res)=> res.send("I am Healthy"));
=======
//app.get("/healthy", (req, res)=> res.send("I am Healthy"));
>>>>>>> c556ad3 (week4 assgnment done but not hard one)
||||||| parent of fe9f654 (make user signup possible)
//app.get("/healthy", (req, res)=> res.send("I am Healthy"));
=======
>>>>>>> fe9f654 (make user signup possible)

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

async function main() {
    await mongoose.connect(process.env.moongose_url)
    app.listen(process.env.PORT);
}

main()
>>>>>>> c556ad3 (week4 assgnment done but not hard one)
