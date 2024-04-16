const mongoose = require("mongoose");

const divisionSchema = mongoose.Schema({
  title:{
    type: String,
    required: [true, "Please enter the title."]
  },
  warehouse:{
    type: String,
    required: [true, "Please select warehouse."]
  },
  fileUpload:{
    type: String,
    required: [true, "Please upload image."]
  }
},
{ 
  timestamps: true,
});

module.exports = mongoose.model("Division", divisionSchema);