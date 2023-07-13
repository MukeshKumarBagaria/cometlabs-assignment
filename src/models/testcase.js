import mongoose from "mongoose";

const testcaseSchema = new mongoose.Schema({
  input: {
    type: String,
    required: true
  },
  output: {
    type: String,
    required: true
  }
}, { timestamps: true });


const Testcase = mongoose.model('Testcase', testcaseSchema);
export default Testcase;