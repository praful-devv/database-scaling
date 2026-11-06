import studentModel from "../models/student.model.js";

const studentCotroller = async (req, res, next) => {
  const { name,age} = req.body;

  const classs = req.body.class

  const student = await studentModel.find({name:name,
                                           age:age, 
                                           class:classs})
    // .explain("executionStats");

  res.status(200).json({
    message: student,
  });
};

export default studentCotroller;
