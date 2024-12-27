const express = require('express');
const router = express.Router();
module.exports = router;

const kitot_Mid=require("../middleware/kitot_Mid");

router.post('/',[kitot_Mid.AddKita], (req, res) => {
    if(req.success){
        res.status(200).json({msg:"ok",Last_Id:req.insertId});
    } else {
        return res.status(500).json({message: err});
    }
});
router.get('/',[kitot_Mid.ReadKitot], (req, res) => { //Read - קבלת רשימה
    if(req.success){
        res.status(200).json({msg:"ok",data:req.kitot_data});
    } else {
        return res.status(500).json({message: err});
    }

});
router.put('/', [kitot_Mid.UpdateKitot], (req, res) => { //Update - עריכה
    if(req.success){
        res.status(200).json({msg:"ok"});
    } else {
        return res.status(500).json({message: err});
    }
});
router.delete('/',[kitot_Mid.DeleteKitot], (req, res) => { // Delete - מחיקה
    if(req.success){
        res.status(200).json({msg:"ok"});
    } else {
        return res.status(500).json({message: err});
    }
});
