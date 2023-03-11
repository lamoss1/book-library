const express = require("express");
// const { route } = require("../app");

const controllers = require("../controllers/reader");

const router = express.Router();

router.post("/readers", controllers.createReader);
router.get("/readers", controllers.findReader);
router.get("/readers/:id", controllers.findByPK);
router.patch("/readers/:id", controllers.readerUpdate);
router.delete("/readers/:id", controllers.readerDelete);

module.exports = router;
