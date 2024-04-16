<<<<<<< HEAD
const { Timestamp } = require('mongodb');
=======
>>>>>>> origin/main
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
<<<<<<< HEAD
    postalCode:{
        type: String,
        required: [true, "Please enter postal number."],
    },
    firstName:{
        type: String,
        required: [true, "Please enter first name."],
    },
    lastName:{
=======
    postal:{
        type: String,
        required: [true, "Please enter postal number."],
    },
    first:{
        type: String,
        required: [true, "Please enter first name."],
    },
    last:{
>>>>>>> origin/main
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
    },
    mainWarehouse:{
        type: Boolean, 
        default: false
    }
<<<<<<< HEAD
},
{
    timestamps: true,
=======
>>>>>>> origin/main
});

module.exports = mongoose.model("Warehouse", warehouseSchema);
