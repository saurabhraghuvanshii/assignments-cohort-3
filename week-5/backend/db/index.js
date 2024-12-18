const mongoose = require('mongoose');
require('dotenv').config();

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const connectToDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected");
    } catch (err) {
        console.error("connection failed:", err); 
    }
}

const UserSchema = new Schema({
    username: String,
    password: String,
});

const TodoSchema = new Schema({
    userId: ObjectId,
    title: String,
    completed: Boolean,
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    connectToDb,
    User,
    Todo
}
