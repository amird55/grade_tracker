async function AddStudent(req, res,next) {
    let name    = req.body.name;
    let tz      = req.body.tz;
    let kita_id = req.body.kita_id ;

    let Query="INSERT INTO `student` ";
    Query += " ( `name`, `tz`, `kita_id`) ";
    Query += " VALUES ";
    Query += ` ('${name}','${tz}','${kita_id}') `;

    const promisePool = db_pool.promise();
    let rows=[];
    try {
        [rows] = await promisePool.query(Query);
        req.insertId=rows.insertId;
        req.success=true;
    } catch (err) {
        req.success=false;
        console.log(err);
    }
    next();
}
async function ReadStudents(req,res,next){
    let search_str = (req.body.search_txt===undefined) ? "" : req.body.search_txt;

    let Query = `SELECT * FROM student `;
    if(search_str !== ""){
        Query += ` WHERE (name LIKE '%${search_str}%')`;
        Query += ` OR (tz LIKE '%${search_str}%')`;
    }
    // console.log(Query);
    const promisePool = db_pool.promise();
    let rows=[];
    try {
        [rows] = await promisePool.query(Query);
        for(let idx in rows){
            rows[idx].name= htmlspecialchars(rows[idx].name);
            rows[idx].tz  = htmlspecialchars(rows[idx].tz);
        }
        req.success=true;
        req.students_data=rows;
    } catch (err) {
        req.success=false;
        console.log(err);
    }
    next();
}
async function UpdateStudent(req,res,next){
    let idx     = req.body.idx;
    let name    = req.body.name;
    let tz      = req.body.tz;
    let kita_id = req.body.kita_id ;

    let Query = `UPDATE student SET `;
    Query += ` kita_id = '${kita_id}' , `;
    Query += ` name = '${name}' , `;
    Query += ` tz = '${tz}' `;
    Query += ` WHERE id = ${idx} `;
    // console.log(Query);
    const promisePool = db_pool.promise();
    let rows=[];
    try {
        [rows] = await promisePool.query(Query);
        req.success=true;
    } catch (err) {
        req.success=false;
        console.log(err);
    }
    next();
}
async function DeleteStudent(req,res,next){
    let idx             = req.body.idx;
    let Query = `DELETE FROM student  `;
    Query += ` WHERE id = ${idx} `;
    // console.log(Query);
    const promisePool = db_pool.promise();
    let rows=[];
    try {
        [rows] = await promisePool.query(Query);
        req.success=true;
    } catch (err) {
        req.success=false;
        console.log(err);
    }
    next();
}


module.exports = {
    AddStudent,
    ReadStudents,
    UpdateStudent,
    DeleteStudent,
}