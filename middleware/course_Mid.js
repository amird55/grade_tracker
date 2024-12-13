async function AddCourse(req,res,next){
    let course_name   = req.body.course_name;

    const Query = `INSERT INTO courses (name) VALUES('${course_name}')`;
    // console.log(Query);
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

module.exports = {
    AddCourse: AddCourse,
}