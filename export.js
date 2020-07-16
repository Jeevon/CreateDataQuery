const fs = require('fs-extra');
const queries = require('../centralizedlogger/lambda/cloudwatch-metrics/queries/queries');

const rds = require("../centralizedlogger/lambda/cloudwatch-metrics/queries/rds");
const lambda = require("../centralizedlogger/lambda/cloudwatch-metrics/queries/lambda");
const dynamodb = require("../centralizedlogger/lambda/cloudwatch-metrics/queries/dynamodb");


fs.outputFile(__dirname + `/queries.json`, JSON.stringify([...dynamodb]), function(err) {
    if (err) {
        console.log(err);
    }
});