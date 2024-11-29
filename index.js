//npm i express body-parser
const express = require('express');
const port = 6183;
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
const path = require("path");
app.use(bodyParser.urlencoded({extended: false}));

//--- courses ---
let courses=[];
app.post("/courses", (req, res) => { //Create - הוספה
    let course_name   = req.body.course_name;
    courses.push({name:course_name});
    res.status(200).json("ok");
});
app.get('/courses', (req, res) => { //Read - קבלת רשימה
    res.status(200).json(courses);
});
app.put('/courses', (req, res) => { //Update - עריכה
    let idx             = req.body.idx;
    let course_name     = req.body.course_name;
    courses[idx]={name:course_name};
    res.status(200).json("ok");
});
app.delete('/courses', (req, res) => { // Delete - מחיקה
    let idx             = req.body.idx;
    courses.splice(idx, 1);
    res.status(200).json("ok");
});


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port http://localhost:${port}`);
});
