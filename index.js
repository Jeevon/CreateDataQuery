const rds = require('./RDS');
const dynamodb = require('./DynamoDB');
const lambda = require('./Lambda');
const ec2 = require('./ec2')
const threshold = require('./threshold')

rds();
dynamodb();
lambda();
ec2();
threshold();