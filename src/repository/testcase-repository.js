import Testcase from '../models/testcase.js';
import CrudRepository from './crud-repository.js';

class TestcaseRepository extends CrudRepository{
    constructor(){
        super(Testcase);
    }
    async findBy(data) {
        try {
            const response = await Testcase.findOne(data);
            return response;
        } catch(error) {
            throw error;
        }
    }
}

export default TestcaseRepository;