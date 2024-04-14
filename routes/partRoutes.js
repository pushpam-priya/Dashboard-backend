const express = require("express");
const router = express.Router();
const {getParts,createPart,updatePart, deletePart, getPart} = require("../controllers/partController.js")

router.get("/",getParts).post("/",createPart);
router.put("/update/:partNum",updatePart);
router.delete("/delete/:partNum",deletePart);
router.get("/:partNum", getPart);
 

module.exports = router