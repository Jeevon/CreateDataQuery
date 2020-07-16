module.exports = async() => {
    const dynamodb = require('./dynamodb');
    const lambda = require('./lambda');
    const rds = require('./rds');

    dynamodb();
    lambda();
    rds();
}