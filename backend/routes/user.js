const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");
const authRequired = require("../middleware/authRequired");


router.get("/",authRequired , ctrl.user.index);
router.get("/:id", ctrl.user.show);
router.post("/", ctrl.user.create);
router.put("/:id", ctrl.user.update);
router.delete("/:id", ctrl.user.destroy);

module.exports = router;