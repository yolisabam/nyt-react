const router = require("express").Router();
const articleRoutes = require("./articles-api")

router.use("/", articleRoutes);

module.exports = router;