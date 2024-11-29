const express = require('express');
const router = express.Router();
module.exports = router;

let courses=[];

router.post("/courses", (req, res) => { //Create - הוספה
    let course_name   = req.body.course_name;

    const Query = `INSERT INTO courses (name) VALUES('${course_name}')`;
    db_pool.query(Query,function (err,rows,fields,){
        if (err){
            res.status(500).json({message:err});
        }else{
            res.status(200).json({message:"OK",Last_Id:rows.insertId});
        }
    })
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
