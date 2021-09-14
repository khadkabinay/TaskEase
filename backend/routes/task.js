const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");


router.get("/", ctrl.task.index);
router.get("/:id", ctrl.task.show);
router.post("/", ctrl.task.create);
router.put("/:id", ctrl.task.update);
router.delete("/:id", ctrl.task.destroy);


module.exports = router;