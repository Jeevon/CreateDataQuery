const rds = require('./RDS');
const dynamodb = require('./DynamoDB');
const lambda = require('./Lambda');
const unitTesting = require('./UnitTesting');

//rds();
dynamodb();
//lambda();


unitTesting();
