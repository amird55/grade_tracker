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

async function ReadCourses(req,res,next){
    const Query = `SELECT * FROM courses `;
    // console.log(Query);
    const promisePool = db_pool.promise();
    let rows=[];
    try {
        [rows] = await promisePool.query(Query);
        for(let idx in rows){
            rows[idx].name= htmlspecialchars(rows[idx].name);
        }
        req.success=true;
        req.course_data=rows;
    } catch (err) {
        req.success=false;
        console.log(err);
    }
    next();
}

module.exports = {
    AddCourse: AddCourse,
    ReadCourses:ReadCourses,
}