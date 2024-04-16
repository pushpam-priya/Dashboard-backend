const express = require("express");
const router = express.Router();

const { getDivisions, createDivision, getDivision, updateDivision, deleteDivision } = require("../controllers/divisionController");

router.get('/', getDivisions);
router.get('/:id', getDivision);
router.post('/', createDivision);
router.put('/:id', updateDivision);
router.delete('/:id', deleteDivision);

module.exports = router