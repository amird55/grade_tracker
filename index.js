//npm i express body-parser
const express = require('express');
const port = 6183;
const app = express();
app.use(express.json());

const bodyParser = require('body-parser');
const path = require("path");
app.use(bodyParser.urlencoded({extended: false}));

//--- courses ---
const course_R = require('./Routers/course_R');
app.use('/C/',course_R);


app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port http://localhost:${port}`);
});
