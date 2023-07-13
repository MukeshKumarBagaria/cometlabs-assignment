import Question from '../models/question.js';
import CrudRepository from './crud-repository.js';


class QuestionRepository extends CrudRepository {
    constructor() {
        super(Question);
    }

    /**
     * 
     * @param {Get Question with it's testcases}
     * @returns 
     */
    async getWithTestcases(id) {
        try {
            const question = await Question.findById(id).populate({
                path: 'Testcase',
                populate: {
                    path: 'Testcase'
                }
            }).lean();
            return question;
        } catch (error) {
            console.log(error);
        }
    }

    async findBy(data) {
        try {
            const response = await Question.findOne(data);
            return response;
        } catch (error) {
            throw error;
        }
    }
}

export default QuestionRepository;