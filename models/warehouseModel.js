const mongoose = require('mongoose')

const warehouseSchema = mongoose.Schema({
    title:{
        type: String,
        required: [true, "Please enter title."],
    },
    country:{
        type: String,
        required: [true, "Please enter country name."],
    },
    street:{
        type: String,
        required: [true, "Please enter street name."],
    },
    city:{
        type: String,
        required: [true, "Please enter city name."],
    },
    state:{
        type: String,
        required: [true, "Please enter state name."],
    },
    postal:{
        type: String,
        required: [true, "Please enter postal number."],
    },
    first:{
        type: String,
        required: [true, "Please enter first name."],
    },
    last:{
        type: String,
        required: [true, "Please enter last name."],
    },
    phone:{
        type: String,
        required: [true, "Please enter phone number."],
    },
    division:{
        type: String,
        required: [true, "Please enter division."],
    },
    description:{
        type: String,
        required: [true, "Please enter description."],
    }
});

module.exports = mongoose.model("Warehouse", warehouseSchema);
