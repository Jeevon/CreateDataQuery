const fs = require('fs-extra');
const metrics = require('./metrics');

module.exports = async (dir, app, arn, tables) => {
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
        for (let b = 0; b < metricKeys.length; b++) {
            let stats = metrics[metricKeys[b]].stat;
            for (let c = 0; c < stats.length; c++) {
                let idchunk = tables[a].split('-').join('_').toLowerCase();
                let metric = metricKeys[b].toLowerCase();
                
                let thisQuery = {
                    ...query,
                    Id: `${idchunk}_${stats[c].toLowerCase()}_lambda_${metric}`,
                    Label: `${app};${tables[a]};${arn}${tables[a]};${stats[c]};${metricKeys[b]}`,
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

                output.push(thisQuery);
            }
        }

        fs.outputFile(__dirname + '/../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/' + dir + '/' + tables[a] + '.js', 'module.exports = ' + JSON.stringify(output), function(err) {
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