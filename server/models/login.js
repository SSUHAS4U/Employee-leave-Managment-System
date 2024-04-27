const mongoose = require('mongoose');

const LoginSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        //required: true,
        enum:["HR","Employee"]
    }
});

const LoginModel = mongoose.model("Login", LoginSchema);

module.exports = LoginModel;
