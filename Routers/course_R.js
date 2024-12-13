const express = require('express');
const router = express.Router();
module.exports = router;

let courses=[];

router.post("/courses",async (req, res) => { //Create - הוספה
    let course_name   = req.body.course_name;

    const Query = `INSERT INTO courses (name) VALUES('${course_name}')`;
    // console.log(Query);
    const promisePool = db_pool.promise();
    let rows=[];
    try {
        [rows] = await promisePool.query(Query);
        res.status(200).json({msg:"ok",data:rows,Last_Id:rows.insertId});
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: err});
    }
});
router.get('/courses',async (req, res) => { //Read - קבלת רשימה
    const Query = `SELECT * FROM courses `;
    // console.log(Query);
    const promisePool = db_pool.promise();
    let rows=[];
    try {
        [rows] = await promisePool.query(Query);
        res.status(200).json({msg:"ok",data:rows});
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: err});
    }

});
router.put('/courses', async (req, res) => { //Update - עריכה
    let idx             = req.body.idx;
    let course_name     = req.body.course_name;

    let Query = `UPDATE courses SET `;
    Query += ` name = '${course_name}' `;
    Query += ` WHERE id = ${idx} `;

    const promisePool = db_pool.promise();
    let rows=[];
    try {
        [rows] = await promisePool.query(Query);
        res.status(200).json({msg:"ok",data:rows});
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: err});
    }
});
router.delete('/courses',async (req, res) => { // Delete - מחיקה
    let idx             = req.body.idx;
    let Query = `DELETE FROM courses  `;
    Query += ` WHERE id = ${idx} `;

    const promisePool = db_pool.promise();
    let rows=[];
    try {
        [rows] = await promisePool.query(Query);
        res.status(200).json({msg:"ok",data:rows});
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: err});
    }
});
