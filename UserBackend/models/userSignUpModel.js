const mongoose = require("mongoose");

const schema = mongoose.Schema;

const RegisterSchema = schema({
    username: {
        type : String,
        required : true,
    },
    password: {
        type : String,
        required : true
    }
})

const registerModel = mongoose.model('userregister', RegisterSchema);

module.exports = registerModel;