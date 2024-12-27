//npm i express body-parser mysql2 htmlspecialchars
const express = require('express');
const port = 6183;
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
const path = require("path");
app.use(bodyParser.urlencoded({extended: false}));

let db_M = require('./database');
global.db_pool = db_M.pool;

global.htmlspecialchars = require('htmlspecialchars');

//--- routers ---
const course_R = require('./Routers/course_R');
app.use('/C/',course_R);

const Students_R = require('./Routers/Students_R');
app.use('/S/',Students_R);

const kitot_R = require('./Routers/kitot_R');
app.use('/kitot/',kitot_R);

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port http://localhost:${port}`);
});
