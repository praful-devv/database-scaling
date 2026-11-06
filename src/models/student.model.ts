import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  schoolName: String,
  class: Number,
  division: String,
  classTeacher: String,
});



const studentModel = mongoose.model("students", studentSchema);

export default studentModel;
