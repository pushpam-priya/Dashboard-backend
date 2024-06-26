const express = require("express");
const router = express.Router();
const { getWarehouses, createWarehouse, getWarehouse, updateWarehouse, deleteWarehouse, getMainWarehouses } = require("../controllers/warehouseController")

// router.get('/', getWarehouses).post('/', createWarehouse);
// router.get('/:id', getWarehouse);
// router.put('/update/:id', updateWarehouse);
// router.delete('/delete/:id', deleteWarehouse);

router.get("/main", getMainWarehouses);
router.route("/").get(getWarehouses).post(createWarehouse);
router.route("/:id").get(getWarehouse).put(updateWarehouse).delete(deleteWarehouse);


module.exports = router