import axios from "axios";
import 'dotenv/config'
//url: 'https://' + endpoint + '/api/v4/submissions?access_token=' + accessToken,

class SphereService {
  constructor() {
    this.accessToken = process.env.SPHERE_ACCESS_TOKEN;
    this.endpoint = process.env.SPHERE_ENGINE_ENDPOINT;
  }

  async addQuestion(questionData) {
    try {
      const response = await axios.post(
        `https://${this.endpoint}/api/v4/problems?access_token=${this.accessToken}`,
        JSON.stringify(questionData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      return {
        questionId: data.id,
        message: "Question added successfully.",
      };
    } catch (error) {
      return this.handleError(error, "Failed to add question.");
    }
  }

  async deleteQuestion(questionId) {
    try {
      await axios.delete(
        `${this.endpoint}/api/v4/problems/${questionId}?access_token=${this.accessToken}`
      );

      return {
        isDeleted: true,
        message: "Question deleted successfully.",
      };
    } catch (error) {
      return this.handleError(error, "Failed to delete question.");
    }
  }

  async updateQuestion(questionId, newQuestionData) {
    try {
      await axios.put(
        `${this.endpoint}/api/v4/problems/${questionId}?access_token=${this.accessToken}`,
        JSON.stringify(newQuestionData),
        { headers: { "Content-Type": "application/json" } }
      );

      return {
        isUpdated: true,
        message: "Question updated successfully.",
      };
    } catch (error) {
      return this.handleError(error, "Failed to update question.");
    }
  }

  async addTestCase(questionId, testCaseData) {
    try {
      const response = await axios.post(
        `${this.endpoint}/api/v4/problems/${questionId}/testcases?access_token=${this.accessToken}`,
        JSON.stringify(testCaseData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;

      return {
        message: "Test case added successfully.",
        testcaseNumber: data.number,
      };
    } catch (error) {
      return this.handleError(error, "Failed to add test case.");
    }
  }

  async submitSolution(submissionData) {
    try {
      const response = await axios.post(
        `https://${this.endpoint}/api/v4/submissions?access_token=${this.accessToken}`,
        JSON.stringify(submissionData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return {
        isSubmitted: true,
        message: "Solution submitted successfully.",
        data: response.data,
      };
    } catch (error) {
      return this.handleError(error, "Failed to submit solution.");
    }
  }

  async getSubmissionStatus(submissionId) {
    try {
      const response = await axios.get(
        `${this.endpoint}/api/v4/submissions/${submissionId}?access_token=${this.accessToken}`
      );

      const status = response.data.result.status;

      return {
        message: status.name,
        submissionData: response.data,
      };
    } catch (error) {
      return this.handleError(error, "Failed to get submission status.");
    }
  }

  handleError(error, errorMessage) {
    if (error.response) {
      const status = error.response.status;
      const message =
        status >= 400 && status < 500
          ? error.response.data.message
          : "Connection error. Please try again later.";

      return {
        error: true,
        message: message || errorMessage,
      };
    } else {
      return {
        error: true,
        message: errorMessage || "An error occurred. Please try again.",
      };
    }
  }
}

export default SphereService;
