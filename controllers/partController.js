const express = require("express");
const Part = require("../models/partModel");

const getParts = async (req, res) => {
  try {
    const part = await Part.find();
<<<<<<< HEAD
    return res.status(200).json(part); 
=======
    return res.status(200).json(part);
>>>>>>> origin/main
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPart = async (req, res) => {
  try {
    const partNum = req.params.partNum;
    const part = await Part.find({partNumber: partNum});
    return res.status(200).json(part);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createPart = async (req, res) => {
  const { division, partNumber, partDesc, img, serialized } = req.body;
  try{
  const part = await Part.create({
    division,
    partNumber,
    partDesc,
    img,
    serialized
  });
  res.status(200).json(part);
  console.log(req.body);
} catch (err) {
    res.status(500).json({ error: err.message });
}
};


const updatePart = async (req, res) => {
    const partNum = req.params.partNum;
    const updateFields = req.body; 

    try {
        const result = await Part.findOneAndUpdate({ partNumber: partNum }, updateFields, { new: true });

        if (!result) {
            return res.status(404).json({ message: "Part not found" });
        }

        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const deletePart = async(req,res) => {
    try{
    const partNum = req.params.partNum;
    const data = await Part.findOneAndDelete(partNum);
    res.send(`Part Number : ${partNum} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}



module.exports = { getParts, getPart, createPart, updatePart, deletePart };
