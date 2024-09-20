const mongoose = require('mongoose');
const connect = mongoose.connect('mongodb://localhost:27017/authe', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Check if the database is connected or not
connect.then(() => {
    console.log("Database connected");
})
.catch((error) => {
    console.log("Database is not connected: ", error.message);
});

// Create schema
const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Collection part
const collection = mongoose.model('login', LoginSchema);

module.exports = collection;
