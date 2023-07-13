import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    difficulty: {
      type: String,
      enum: ['Easy', 'Medium', 'Hard'],
      required: true
    },
    testcases: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Testcase'
    }]
  }, {timestamps: true});


const Question = mongoose.model('Question', questionSchema);

export default Question;