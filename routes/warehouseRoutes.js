const express = require("express");
const router = express.Router();
const { getWarehouses, createWarehouse } = require("../controllers/warehouseController")

router.get('/', getWarehouses).post('/', createWarehouse);

module.exports = router