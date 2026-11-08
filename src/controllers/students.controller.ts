import redis from "../config/cashe.js";
import studentModel from "../models/student.model.js";

const studentCotroller = async (req, res, next) => {
  const { name, age } = req.body;

  const isStudent = await redis.get(`student:${name}`);
  let student
  if (!isStudent) {
     student = await studentModel.find({
      age: age,
    })

    console.log(student)

    await redis.set(`student:${name}`,student.toString())

  }else{
    student = isStudent
  }

  res.status(200).json({
    message: student,
  });
};

export default studentCotroller;
