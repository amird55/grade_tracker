async function AddStudent(req, res,next) {
    let name    = req.body.name;
    let tz      = req.body.tz;

    let Query="INSERT INTO `student` ";
    Query += " ( `name`, `tz`) ";
    Query += " VALUES ";
    Query += ` ('${name}','${tz}') `;

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

export {
    AddStudent,
}