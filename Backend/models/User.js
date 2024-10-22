const mongoose = require("mongoose")
const schema = mongoose.Schema;

const UserSchema = new schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    created_At: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model('user', UserSchema);
User.createIndexes();
module.exports = User;
