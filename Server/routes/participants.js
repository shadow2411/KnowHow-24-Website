const express = require("express");
const router = express.Router();
const participantsController = require("../controllers/participantsController");

router.post("/add-participant", participantsController.addParticipant);

module.exports = router;
