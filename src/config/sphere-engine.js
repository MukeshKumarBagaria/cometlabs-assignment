import 'dotenv/config'
import request from 'request';

// define access parameters
var accessToken = process.env.SPHERE_ACCESS_TOKEN;
var endpoint = process.env.ENGINE_ENDPOINT;

// define request parameters
var submissionData = {
    compilerId: 11,
    source: '<source_code>'
};

// send request
request({
    url: 'https://' + endpoint + '/api/v4/submissions?access_token=' + accessToken,
    method: 'POST',
    form: submissionData
}, function (error, response, body) {
    
    if (error) {
        console.log('Connection problem');
    }
    
    // process response
    if (response) {
        if (response.statusCode === 201) {
            console.log(JSON.parse(response.body)); // submission data in JSON
        } else {
            if (response.statusCode === 401) {
                console.log('Invalid access token');
            } else if (response.statusCode === 402) {
                console.log('Unable to create submission');
            } else if (response.statusCode === 400) {
                var body = JSON.parse(response.body);
                console.log('Error code: ' + body.error_code + ', details available in the message: ' + body.message)
            }
        }
    }
});