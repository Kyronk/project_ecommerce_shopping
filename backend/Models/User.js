const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        
    },
    email: {
        type: String,
        unique: true,
        require: true
    },
    avatar: {
        type: String
    },
    firstName: {
        type: String,
        // required: true,
    },
    lastName: {
        type: String,
    },
    phoneNumber: {
        type: Number,
    },
    address: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Users', UserSchema);
