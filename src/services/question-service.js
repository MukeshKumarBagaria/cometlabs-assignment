import { QuestionRepository } from "../repository/index.js";

class QuestionService {
  constructor() {
    this.questionRepository = new QuestionRepository();
  }

  async createQuestion(data) {
    try {
      const result = await this.questionRepository.create(data);
      return result;
    } catch (error) {
      console.log("Something went wrong in QuestionService while creating a question", error);
      throw error;
    }
  }

  async deleteQuestion(id) {
    try {
      const result = await this.questionRepository.destroy(id);
      return result;
    } catch (error) {
      console.log("Something went wrong in QuestionService while deleting a question", error);
      throw error;
    }
  }

  async updateQuestion(id, data) {
    try {
      const result = await this.questionRepository.update(id, data);
      return result;
    } catch (error) {
      console.log("Something went wrong in QuestionService while updating a question", error);
      throw error;
    }
  }
}

export default QuestionService;
