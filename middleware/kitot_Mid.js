async function AddKita(req,res,next){
    //-- get data
    let name         = req.body.name;
    let teacher_name = req.body.teacher_name;

    //-- create query
    let Query = "INSERT INTO `kitot`(`name`, `teacher_name`) VALUES ";
    Query += ` ('${name}','${teacher_name}')`;

    //-- run query and return results
    const promisePool = db_pool.promise();
    let rows=[];
    try {
        [rows] = await promisePool.query(Query);
        req.success=true;
        req.insertId=rows.insertId;
    } catch (err) {
        console.log(err);
        req.success=false;
        req.insertId=-1;
    }

    next();
}
async function ReadKitot(req,res,next){
    const Query = `SELECT * FROM kitot `;
    // console.log(Query);
    const promisePool = db_pool.promise();
    let rows=[];
    req.kitotById=[];
    try {
        [rows] = await promisePool.query(Query);
        for(let idx in rows){
            rows[idx].name          = htmlspecialchars(rows[idx].name);
            rows[idx].teacher_name  = htmlspecialchars(rows[idx].teacher_name);

            req.kitotById[rows[idx].id]=rows[idx].name;
        }
        req.success=true;
        req.kitot_data=rows;
    } catch (err) {
        req.success=false;
        console.log(err);
    }
    next();
}
async function UpdateKitot(req,res,next){
    let idx             = req.body.idx;
    let name         = req.body.name;
    let teacher_name = req.body.teacher_name;

    let Query = `UPDATE kitot SET `;
    Query += ` name = '${name}' , `;
    Query += ` teacher_name = '${teacher_name}' `;
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
async function DeleteKitot(req,res,next){
    let idx             = req.body.idx;
    let Query = `DELETE FROM kitot  `;
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
    AddKita,
    ReadKitot,
    UpdateKitot,
    DeleteKitot,
}