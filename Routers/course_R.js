const express = require('express');
const router = express.Router();
module.exports = router;

const courseMid=require("../middleware/course_Mid");

router.post("/courses",[courseMid.AddCourse], (req, res) => { //Create - הוספה
    if(req.success){
        res.status(200).json({msg:"ok",Last_Id:req.insertId});
    } else {
        return res.status(500).json({message: err});
    }
});
router.get('/courses',[courseMid.ReadCourses], (req, res) => { //Read - קבלת רשימה
    if(req.success){
        res.status(200).json({msg:"ok",data:req.course_data});
    } else {
        return res.status(500).json({message: err});
    }

});
router.put('/courses', [courseMid.UpdateCourse], (req, res) => { //Update - עריכה
    if(req.success){
        res.status(200).json({msg:"ok"});
    } else {
        return res.status(500).json({message: err});
    }
});
router.delete('/courses',[courseMid.DeleteCourses], (req, res) => { // Delete - מחיקה
    if(req.success){
        res.status(200).json({msg:"ok"});
    } else {
        return res.status(500).json({message: err});
    }
});
