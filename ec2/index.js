const generate = require('./generate');

const aesop = [
    'i-0f2a404333fed9fa4',
    'i-0cffbc2b8a0cc1b94',
    'i-0e1f5338e10124f04',
    'i-0923d7b86ad70391e',
    'i-053cb0ba850288680',
    'i-099a88c9a2f022c37',
    'i-03d35af9ef7650895',
];


//AESOP 073504361408
//CYO 656703133871

const cyo = [
    'i-08528da0fdd545e0a',
    'i-0351a1c5c0f09f008'
];

module.exports = function() {
    generate('AESOP', 'AESOP', 'arn:aws:ec2:ap-southeast-1b:073504361408:instance/', 'Tier 2', aesop);
    generate('CYO', 'CYO', 'arn:aws:ec2:ap-southeast-1b:656703133871:instance/', 'Tier 2', cyo);
}