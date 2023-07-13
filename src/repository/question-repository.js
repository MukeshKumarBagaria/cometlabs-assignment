import Question from '../models/question.js';
import CrudRepository from './crud-repository.js';


class QuestionRepository extends CrudRepository{
    constructor(){
        super(Question);
    }
    async findBy(data) {
        try {
            const response = await Question.findOne(data);
            return response;
        } catch(error) {
            throw error;
        }
    }
}

export default QuestionRepository;