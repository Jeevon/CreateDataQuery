const fsExtra = require('fs-extra');
const fs = require('fs').promises;
var parse = require('csv-parse/lib/sync');

module.exports = async () => {
    const fileContent = await fs.readFile(__dirname+'/Threshold.csv');
    const records = parse(fileContent, {columns: true});
    const result = {};

    for (let a = 0; a < records.length; a++) {
        let record = records[a];
        if(result[record.resource_type.toLowerCase()]) {
            if(result[record.resource_type.toLowerCase()][record.resource_name]) {
                if(!result[record.resource_type.toLowerCase()][record.resource_name][record.metric_name]) {
                    result[record.resource_type.toLowerCase()][record.resource_name][record.metric_name] = {}
                }

                result[record.resource_type.toLowerCase()][record.resource_name][record.metric_name][record.threshold]  = parseInt(record.metric_value.replace(/,/g, ''));
            } else {
                result[record.resource_type.toLowerCase()][record.resource_name] = {}
                result[record.resource_type.toLowerCase()][record.resource_name][record.metric_name] = {}
                result[record.resource_type.toLowerCase()][record.resource_name][record.metric_name][record.threshold]  = parseInt(record.metric_value.replace(/,/g, ''));
            }
        } else {
            result[record.resource_type.toLowerCase()] = {}
            result[record.resource_type.toLowerCase()][record.resource_name] = {}
            result[record.resource_type.toLowerCase()][record.resource_name][record.metric_name] = {}
            result[record.resource_type.toLowerCase()][record.resource_name][record.metric_name][record.threshold]  = parseInt(record.metric_value.replace(/,/g, ''));
        }
    }

    const path = __dirname + '/../../centralizedlogger/lambda/cloudwatch-metrics';
    if(!fsExtra.existsSync(path)) {
        fsExtra.mkdirSync(path, { recursive: true})
    }

    fsExtra.outputFile(path + '/MetricThreshold.js', 'module.exports = ' + JSON.stringify(result), function(err) {
        if (err) {
            console.log(err);
        }
    });
};