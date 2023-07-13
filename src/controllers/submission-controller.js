import SphereService from "../services/sphere-service.js";

const sphereService = new SphereService();

export const createQuestionSubmission = async (req, res) => {
  try {
    const { questionId, language, source } = req.body;
    const submissionData = {
      problemId: questionId,
      language,
      source,
    };

    const submissionResult = await sphereService.submitSolution(submissionData);

    if (submissionResult.isSubmitted) {
      return res.status(200).json({
        success: true,
        message: "Question submission created successfully",
        data: submissionResult.data,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Failed to create question submission",
        error: submissionResult.message,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while creating question submission",
      error: error.message,
    });
  }
};
