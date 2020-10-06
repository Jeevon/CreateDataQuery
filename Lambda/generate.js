const fs = require('fs-extra');
const metrics = require('./metrics');

module.exports = async (dir, app, arn, tier, tables) => {
    //function ensureExists(path, mask, cb) {
    //    if (typeof mask == 'function') { // allow the `mask` parameter to be optional
    //        cb = mask;
    //        mask = 0777;
    //    }
    //    fs.mkdir(path, mask, function(err) {
    //        if (err) {
    //            if (err.code == 'EEXIST') cb(null); // ignore the error if the folder already exists
    //            else cb(err); // something else went wrong
    //        } else cb(null); // successfully created folder
    //    });
    //}

    //ensureExists(__dirname + '/' + dir, 0744, function(err) {
    //    if (err) 
    //        console.log('ERROR', err)
    //});

    let query = {
        Id: "",
        Label: "",
        MetricStat: {},
        ReturnData: true
    }

    for (let a = 0; a < tables.length; a++) {
        let metricKeys = Object.keys(metrics);
        let output = [];
        const availableMetrics = [];
        for (let b = 0; b < metricKeys.length; b++) {
            let stats = metrics[metricKeys[b]].stat;
            for (let c = 0; c < stats.length; c++) {
                let idchunk = tables[a].split('-').join('_').toLowerCase();
                let metric = metricKeys[b].toLowerCase();
                
                let thisQuery = {
                    ...query,
                    Id: `${idchunk}_${stats[c].toLowerCase()}_lambda_${metric}`,
                    Label: `${app};${tables[a]};${arn}${tables[a]};${stats[c]};${metricKeys[b]};${tier}`,
                    MetricStat: {
                        Metric: {
                            Namespace: "AWS/Lambda",
                            MetricName: metricKeys[b],
                            Dimensions: [{
                                Name: "FunctionName",
                                Value: tables[a]
                            }]
                        },
                        Period: 300,
                        Stat: stats[c],
                        Unit: metrics[metricKeys[b]].unit
                    }
                }

                availableMetrics.push(`${metricKeys[b]}-${stats[c]}`);

                output.push(thisQuery);
            }
        }

        //const metricsComputation = computation.lambda;
        //const keys = Object.keys(metricsComputation);

        //keys.forEach(metric => {
        //    const aIndex = availableMetrics.indexOf(metric);
        //    if(typeof metricsComputation[metric] ===  'object') {
        //        metricsComputation[metric].forEach(m => {
        //            const bIndex = availableMetrics.indexOf(m);
        //            if(aIndex >= 0 && bIndex >= 0) { 
        //                const expressionLabel = output[aIndex].Label.split(';');
        //                expressionLabel[4] = `${expressionLabel[4]}_Percent`

        //                output.push({
        //                    Id: `${output[aIndex].Id}_percent`,
        //                    Label: expressionLabel.join(';'),
        //                    Expression: `${output[aIndex].Id} / ${output[bIndex].Id} * 100` 
        //                });
        //            }
        //        });
        //    } else {
        //        const bIndex = availableMetrics.indexOf(metricsComputation[metric]);
        //        if(aIndex >= 0 && bIndex >= 0) { 
        //            const expressionLabel = output[aIndex].Label.split(';');
        //            expressionLabel[4] = `${expressionLabel[4]}_Percent`

        //            output.push({
        //                Id: `${output[aIndex].Id}_percent`,
        //                Label: expressionLabel.join(';'),
        //                Expression: `${output[aIndex].Id} / ${output[bIndex].Id} * 100` 
        //            });
        //        }
        //    }
        //});

        const path = __dirname + '/../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/' + dir;
        if(!fs.existsSync(path)) {
            fs.mkdirSync(path, { recursive: true})
        }

        fs.outputFile(path + '/' + tables[a] + '.js', 'module.exports = ' + JSON.stringify(output), function(err) {
            if (err) {
                console.log(err);
            }
        });
    }

    let imports = [];
    let exports = 'module.exports = [\n';
    for (let x = 0; x < tables.length; x++) {
        let filename = tables[x].split('-').join('').toLowerCase();
        imports.push(`const ${filename} = require('./${tables[x]}');`);
        exports+=`  ${filename},\n`;
    }
    exports+='];'
    let output = imports.join('\n') + '\n\n' + exports;

    fs.outputFile(__dirname + `/../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/${dir}/` + dir + '.js', output, function(err) {
        if (err) {
            console.log(err);
        }
    });
}