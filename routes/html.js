const router = require("express").Router();
const db = require("../models");
const path = require ("path");

router.get(" / ", function (req, res) {
    res.sendFile(path.join(__dirname, "../develolp/public/index.html"));
});

router.get(" /exercises", function(req, res) {
    res.sendFile(path.join(__dirname, "../develop/public/exercise.html"));
});

router.get(" /stats", function (req, res) {
    res.sendFile(path.join(__dirname, "../develop/public/stats.html"));
});

module.exports = router;