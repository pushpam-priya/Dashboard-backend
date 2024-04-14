const express = require("express");
const router = express.Router();
const {getPart,createPart,updatePart, deletePart} = require("../controllers/partController.js")

router.get("/",getPart).post("/",createPart);
router.put("/update/:partNum",updatePart);
router.delete("/delete/:partNum",deletePart);
 

module.exports = router