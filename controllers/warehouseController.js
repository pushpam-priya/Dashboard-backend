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

const createWarehouse = async (req, res) => {
    const 
    {
        title, 
        country, 
        street, 
        city, 
        state, 
        postalCode, 
        firstName, 
        lastName, 
        phone, 
        division,
        description,
        mainWarehouse
    } = req.body

    try{
        const warehouse = await Warehouse.create({
            title, 
            country, 
            street, 
            city, 
            state, 
            postalCode, 
            firstName, 
            lastName, 
            phone, 
            division,
            description,
            mainWarehouse
        });
        res.status(200).json(warehouse);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getWarehouse = async (req, res) => {
    try {
        const warehouse = await Warehouse.findById(req.params.id);
        res.status(200).json(warehouse);
    }
    catch (err) {
        res.status(500).json({error: err.message});
    }
};

const updateWarehouse = async (req, res) => {
    try{
        const warehouse = await Warehouse.findByIdAndUpdate(req.params.id,req.body,{ new: true });
        res.status(200).json(warehouse);
    }
    catch(err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteWarehouse = async (req, res) => {
    try{
        const warehouse = await Warehouse.findByIdAndDelete(req.params.id);
        res.send(`Warehouse with id (${req.params.id}) has been deleted..`);
    }
    catch (err){
        res.status(500).json({ error: err.message});
    }
};

const getMainWarehouses = async (req, res) => {
    try {
      const mainWarehouses = await Warehouse.find({ mainWarehouse: true });
      res.status(200).json(mainWarehouses);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  


module.exports = { getWarehouses, createWarehouse, getWarehouse, updateWarehouse, deleteWarehouse, getMainWarehouses }
