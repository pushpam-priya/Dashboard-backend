const mongoose = require("mongoose");

const partSchema = mongoose.Schema({
    division: {
        type: String,
        required: [true, "Please enter division"]
    },
    partNumber: {
        type: String,
        required: [true, "Please enter part number"],
        unique:true
    },
    partDesc: {
        type: String,
        required: [true, "Please enter part description"]
    },
    img: {
        data: Buffer,
        contentType: String,
        // required: true // 'required' should be set to a boolean value
    },
    serialized: {
        type: Boolean, 
        default: false
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Part", partSchema);
