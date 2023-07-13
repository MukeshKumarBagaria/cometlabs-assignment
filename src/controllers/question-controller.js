import QuestionService from "../services/question-service.js";
const questionService = new QuestionService();

export const createQuestion = async (req, res) => {
  try {
    const { title, description, difficulty } = req.body;
    const newQuestion = await questionService.createQuestion({ title, description, difficulty });
    return res.status(201).json({
      success: true,
      message: "Successfully created a new question",
      data: newQuestion,
      err: {}
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while creating a new question",
      data: {},
      err: error
    });
  }
};

export const deleteQuestion = async (req, res) => {
  try {
    const { id } = req.query;
    const deletedQuestion = await questionService.deleteQuestion(id);
    return res.status(200).json({
      success: true,
      message: "Successfully deleted the question",
      data: deletedQuestion,
      err: {}
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while deleting the question",
      data: {},
      err: error
    });
  }
};

export const updateQuestion = async (req, res) => {
  try {
    const { id } = req.query;
    const { title, description, difficulty } = req.body;
    const updatedQuestion = await questionService.updateQuestion(id, { title, description, difficulty });
    return res.status(200).json({
      success: true,
      message: "Successfully updated the question",
      data: updatedQuestion,
      err: {}
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while updating the question",
      data: {},
      err: error
    });
  }
};
