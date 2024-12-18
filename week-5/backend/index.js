const express = require('express');
const cors = require('cors');
const todoRouter = require("./routes/todo");
const userRouter = require("./routes/user");
const { connectToDb } = require("./db");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/todo", todoRouter);
app.use("/user", userRouter);

connectToDb().then(() => {
    const PORT = process.env.PORT ;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})