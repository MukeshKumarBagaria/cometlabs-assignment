import { TestcaseRepository, QuestionRepository } from "../repository/index.js";

class TestcaseService {
    constructor() {
        this.testcaseRepository = new TestcaseRepository();
        this.questionRepository = new QuestionRepository();
    }

    async createTestcase(data) {
        try {
            var question = await this.questionRepository.get(data.questionId);
            const testcase = await this.testcaseRepository.create(data);
            question.testcases.push(testcase);
            await question.save();
            return testcase;
        } catch (error) {
            console.log("Something went wrong in TestcaseService while creating a testcase", error);
            throw error;
        }
    }

    async deleteTestcase(id) {
        try {
        
            const result = await this.testcaseRepository.destroy(id);
            return result;
        } catch (error) {
            console.log("Something went wrong in TestcaseService while deleting a testcase", error);
            throw error;
        }
    }

    async updateTestcase(id, data) {
        try {
            const result = await this.testcaseRepository.update(id, data);
            return result;
        } catch (error) {
            console.log("Something went wrong in TestcaseService while updating a testcase", error);
            throw error;
        }
    }
}

export default TestcaseService;
