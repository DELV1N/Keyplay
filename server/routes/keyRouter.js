const Router = require("express");
const router = new Router();
const keyController = require("../controllers/keyController");
const checkRole = require("../middleware/checkRoleMiddleware");

router.post("/", checkRole("ADMIN"), keyController.create);
router.get("/", keyController.getAll);

module.exports = router;
