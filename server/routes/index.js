const Router = require("express");
const router = new Router();
const userRouter = require("./userRouter");
const gameRouter = require("./gameRouter");
const publisherRouter = require("./publisherRouter");
const developerRouter = require("./developerRouter");
const keyRouter = require("./keyRouter");

router.use("/user", userRouter);
router.use("/game", gameRouter);
router.use("/publisher", publisherRouter);
router.use("/developer", developerRouter);
router.use("/key", keyRouter);

module.exports = router;
