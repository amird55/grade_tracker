const express = require('express');
const path = require("path");
const router = express.Router();
module.exports = router;

router.get('/students', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,"/../views/student_mngr.html"));
})