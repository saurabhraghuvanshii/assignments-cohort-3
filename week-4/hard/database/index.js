const mongoose = require('mongoose');
<<<<<<< HEAD
<<<<<<< HEAD

||||||| parent of c556ad3 (week4 assgnment done but not hard one)

// Connect to MongoDB
mongoose.connect('your-mongodb-url');

=======
//dotenv.config();
// Connect to MongoDB
//await mongoose.connect(process.env.moongose_url);
||||||| parent of fe9f654 (make user signup possible)
//dotenv.config();
// Connect to MongoDB
//await mongoose.connect(process.env.moongose_url);
=======
>>>>>>> fe9f654 (make user signup possible)

>>>>>>> c556ad3 (week4 assgnment done but not hard one)
// Define schemas

const UserSchema = new mongoose.Schema({
    // Schema definition here
    email: String,
    password: String,
    name: String
});

const TodoSchema = new mongoose.Schema({
    // Schema definition here
    text: String,
    Priority: String,
    Progress: String
});

const User = mongoose.model('User', UserSchema);
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = {
    User,
    Todo
}