const express = require('express');
const router = express.Router();
module.exports = router;

const Students_Mid=require("../middleware/Student_Mid");
const kitot_Mid = require("../middleware/kitot_Mid");

router.post('/students',[Students_Mid.AddStudent], (req, res) => {
    if(req.success){
        res.status(200).json({msg:"ok",Last_Id:req.insertId});
    } else {
        return res.status(500).json({message: err});
    }
});
router.get('/students',[Students_Mid.ReadStudents], (req, res) => { //Read - קבלת רשימה
    if(req.success){
        res.status(200).json({msg:"ok",data:req.students_data});
    } else {
        return res.status(500).json({message: err});
    }

});
router.put('/students', [Students_Mid.UpdateStudent], (req, res) => { //Update - עריכה
    if(req.success){
        res.status(200).json({msg:"ok"});
    } else {
        return res.status(500).json({message: err});
    }
});
router.delete('/students',[Students_Mid.DeleteStudent], (req, res) => { // Delete - מחיקה
    if(req.success){
        res.status(200).json({msg:"ok"});
    } else {
        return res.status(500).json({message: err});
    }
});

router.get('/tito',[kitot_Mid.ReadKitot,Students_Mid.ReadStudents], (req, res) => { //Read - קבלת רשימה
    if(req.success){
        res.status(200).json(
            {
                msg:"ok",
                students:req.students_data,
                kitot:req.kitotById,
            });
    } else {
        return res.status(500).json({message: err});
    }

});
