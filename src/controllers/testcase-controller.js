import TestcaseService from "../services/testcase-service.js";
const testcaseService = new TestcaseService();

export const createTestcase = async (req, res) => {
    try {
        const { input, output, questionId } = req.body;
        const newTestcase = await testcaseService.createTestcase({ input, output, questionId });
        return res.status(201).json({
            success: true,
            message: "Successfully created a new test case",
            data: newTestcase,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong while creating a new test case",
            data: {},
            err: error
        });
    }
};

export const deleteTestcase = async (req, res) => {
    try {
        const { id } = req.query;
        const deletedTestcase = await testcaseService.deleteTestcase(id);
        return res.status(200).json({
            success: true,
            message: "Successfully deleted the test case",
            data: deletedTestcase,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong while deleting the test case",
            data: {},
            err: error
        });
    }
};

export const updateTestcase = async (req, res) => {
    try {
        const { id } = req.query;
        const { input, output } = req.body;
        const updatedTestcase = await testcaseService.updateTestcase(id, { input, output });
        return res.status(200).json({
            success: true,
            message: "Successfully updated the test case",
            data: updatedTestcase,
            err: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went wrong while updating the test case",
            data: {},
            err: error
        });
    }
};
