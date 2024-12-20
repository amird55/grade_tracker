const express = require('express');
const router = express.Router();
module.exports = router;

const Students_Mid=require("../middleware/Student_Mid");
router.post('/students',[Students_Mid.AddStudent], (req, res) => {
    if(req.success){
        res.status(200).json({msg:"ok",Last_Id:req.insertId});
    } else {
        return res.status(500).json({message: err});
    }
});
