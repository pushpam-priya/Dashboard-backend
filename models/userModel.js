const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter firstName"]
    },
    lastName: {
        type: String,
        required: [true, "Please enter lastName"]
    },
    email: {
        type: String,
        required: [true, "Please enter emailID"],
        unique:true
    },
    address: {
        type: String,
        required: [true, "Please enter address"]
    },
    phone: {
        type: String,
        required: [true, "Please enter phone number"]
    },
    password: {
        type: String,
        required: [true, "Please enter password"]
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("User", userSchema);
