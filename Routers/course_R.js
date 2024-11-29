const express = require('express');
const router = express.Router();
module.exports = router;

router.post("/courses", (req, res) => { //Create - הוספה
    let course_name   = req.body.course_name;
    courses.push({name:course_name});
    res.status(200).json("ok");
});
router.get('/courses', (req, res) => { //Read - קבלת רשימה
    res.status(200).json(courses);
});
router.put('/courses', (req, res) => { //Update - עריכה
    let idx             = req.body.idx;
    let course_name     = req.body.course_name;
    courses[idx]={name:course_name};
    res.status(200).json("ok");
});
router.delete('/courses', (req, res) => { // Delete - מחיקה
    let idx             = req.body.idx;
    courses.splice(idx, 1);
    res.status(200).json("ok");
});
