const express = require("express");
const Division = require("../models/divisionModel");

const getDivisions = async (req, res) => {
  try{
    const division = await Division.find();
    return res.status(200).json(division);
  }
  catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createDivision = async (req, res) => {
  console.log(req.body);
  const { title, warehouse, fileUpload } = req.body;
  try{
    const division = await Division.create({
      title,
      warehouse,
      fileUpload
    });
    res.status(200).json(division);
  }
  catch (err) {
    res.status(500).json({ error: err.message });
  }
}

const getDivision = async (req, res) => {
  try{
    const division = await Division.findById(req.params.id);
        res.status(200).json(division);
  }
  catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateDivision = async (req, res) => {
  try{
      const division = await Division.findByIdAndUpdate(req.params.id,req.body,{ new: true });
      res.status(200).json(division);
  }
  catch(err) {
      res.status(500).json({ error: err.message });
  }
};

const deleteDivision = async (req, res) => {
  try{
      const division = await Division.findByIdAndDelete(req.params.id);
      res.send(`Warehouse with id (${req.params.id}) has been deleted..`);
  }
  catch (err){
      res.status(500).json({ error: err.message });
  }

}

module.exports = { getDivisions, createDivision, getDivision, updateDivision, deleteDivision }
