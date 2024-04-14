const express = require("express");
const Warehouse = require("../models/warehouseModel")

const getWarehouses = async (req, res) => {
    try {
      const warehouse = await Warehouse.find();
      return res.status(200).json(warehouse);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
};

// const getWarehouse = async (req, res) => {
//     try {
//         const partNum = req.params.partNum;
//         const warehouse = await Warehouse.find({partNumber: partNum});
//     }
//     catch (err) {
//         res.status(500).json({error: err.message});
//     }
// }


module.exports = { getWarehouses }