// BAGEL
const vmbgldpd01 = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/RDS/BAGELMobile/vmbgldpd01');
const vmottdpd01 = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/RDS/BAGELContentDelivery/vmottdpd01');
const vmottdpd02 = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/RDS/BAGELContentDelivery/vmottdpd02');
const vmottdpd03 = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/RDS/BAGELContentDelivery/vmottdpd03');

// BBART
const vmbbadpd01 = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/RDS/BBARTSelfServiceAppBB/vmbbadpd01');
const vmbbadpd02 = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/RDS/BBART/vmbbadpd02');

// Capone
const vmcapdpd01 = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/RDS/Capone/vmcapdpd01');

//GlobeOne
const vmgosdpd011 = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/RDS/GlobeOne/vmgosdpd01-1');
const vmgosdpd012 = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/RDS/GlobeOne/vmgosdpd01-2');

// NFBus
const vmnfbdpd03_1 = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/RDS/NFBus/vmnfbdpd03-1');
const vmnfbdpd03_2 = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/RDS/NFBus/vmnfbdpd03-2');

// OC3
const vmcccdpd01 = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/RDS/OC3/vmcccdpd01');
const vmcccdpd02 = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/RDS/OC3/vmcccdpd02');
const vmcccdpd03 = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/RDS/OC3/vmcccdpd03');
const vmcccdpd04 = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/RDS/OC3/vmcccdpd04');
const vmcccdpd05 = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/RDS/OC3/vmcccdpd05');
const vmcccdpd06 = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/RDS/OC3/vmcccdpd06');

//Ripley
const vmbbadpd01_ripley = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/RDS/Ripley/vmdcpdpd01');

//Globe at home
const vmbbaddv01 = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/RDS/GlobeAtHome/vmbbaddv01');


const metricThreshold = require('../../centralizedlogger/lambda/cloudwatch-metrics/MetricThreshold');

let ids = [];
const metrics = [
    'BinLogDiskUsage',
    'BurstBalance',
    'CPUUtilization',
    'CPUCreditUsage',
    'CPUCreditBalance',
    'DatabaseConnections',
    'DiskQueueDepth',
    'FailedSQLServerAgentJobsCount',
    'FreeableMemory',
    'FreeStorageSpace',
    'MaximumUsedTransactionIDs',
    'NetworkReceiveThroughput',
    'NetworkTransmitThroughput',
    'OldestReplicationSlotLag',
    'ReadIOPS',
    'ReadLatency',
    'ReadThroughput',
    'ReplicaLag',
    'ReplicationSlotDiskUsage',
    'SwapUsage',
    'TransactionLogsDiskUsage',
    'TransactionLogsGeneration',
    'WriteIOPS',
    'WriteLatency',
    'WriteThroughput',
];

const metricUnits = {
    'BinLogDiskUsage': 'Bytes',
    'BurstBalance': 'Percent',
    'CPUUtilization': 'Percent',
    'CPUCreditUsage': 'Count',
    'CPUCreditBalance': 'Count',
    'DatabaseConnections': 'Count',
    'DiskQueueDepth': 'Count',
    'FailedSQLServerAgentJobsCount': 'Count',
    'FreeableMemory': 'Bytes',
    'FreeStorageSpace': 'Bytes',
    'MaximumUsedTransactionIDs': 'Count',
    'NetworkReceiveThroughput': 'Bytes/Second',
    'NetworkTransmitThroughput': 'Bytes/Second',
    'OldestReplicationSlotLag': 'Megabytes',
    'ReadIOPS': 'Count/Second',
    'ReadLatency': 'Seconds',
    'ReadThroughput': 'Bytes/Second',
    'ReplicaLag': 'Seconds',
    'ReplicationSlotDiskUsage': 'Megabytes',
    'SwapUsage': 'Bytes',
    'TransactionLogsDiskUsage': 'Megabytes',
    'TransactionLogsGeneration': 'Bytes/Second',
    'WriteIOPS': 'Count/Second',
    'WriteLatency': 'Seconds',
    'WriteThroughput': 'Bytes/Second',
}

function validate(a, app, id) {
    let average = 0;
    let maximum = 0;
    let sum = 0;
    let appMetricsAverage = [];
    let appMetricsMaximum = []

    for (let b = 0; b < a.length; b++) {
        let chunk = a[b].Label.split(';');

        if (metrics.indexOf(chunk[4]) != -1) {
            if (chunk[4] != a[b].MetricStat.Metric.MetricName) {
                console.log(`APP': '${app} - ${id}; ERROR': '${chunk[4]} did not match with MetricName value;`)
            } else {
                if (chunk[3] == 'Maximum') {
                    appMetricsMaximum.push(chunk[4]);
                } else {
                    appMetricsAverage.push(chunk[4]);
                }
            }
        } else {
            console.log(`APP': '${app} - ${id}; ERROR': '${chunk[4]} is not in metric list;`)
        }

        if (ids.indexOf(a[b].Id) == -1) {
            ids.push(a[b].Id);
        } else {
            console.log(`APP': '${app} - ${id}; ERROR': '${a[b].Id} already exist;`)
        }

        if (a[b].MetricStat.Metric.Dimensions[0].Value != id && a[b].MetricStat.Metric.Dimensions[0].Value == chunk[1]) {
            console.log(`APP': '${app} - ${id}; ERROR': '${a[b].MetricStat.Metric.Dimensions[0].Value} did not match with dimension;`)
        }

        if (chunk[3] == 'Maximum') {
            maximum++;
        } else if (chunk[3] == 'Average') {
            average++;
        } else {
            sum++;
        }

        if (a[b].MetricStat.Unit != metricUnits[a[b].MetricStat.Metric.MetricName]) {
            console.log(`APP': '${app} - ${id}; ERROR': '${a[b].MetricStat.Unit} - unit is invalid for the metric;`)
        }

        let resource_arn = chunk[2];
        let resource_type = resource_arn.split(':')[2];
        let metric_name = a[b].MetricStat.Metric.MetricName;
        console.log(resource_type);
        console.log(metric_name);
        console.log(metricThreshold[resource_type][metric_name])
        
        if(!metricThreshold[resource_type][metric_name]){
          fail;
        }
    }

    console.log(`STATUS': 'Success; APP': '${app} - ${id}; maximum': '${maximum}; average': '${average}; sum': '${sum}`);
    //console.log(`AVERAGE METRICS': '${compare(metrics, appMetricsAverage)};`)
    //console.log(`Maximum METRICS': '${compare(metrics, appMetricsMaximum)};`)




    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

}

function compare(a1, a2) {

    var a = [],
        diff = [];

    for (var i = 0; i < a1.length; i++) {
        a[a1[i]] = true;
    }

    for (var i = 0; i < a2.length; i++) {
        if (a[a2[i]]) {
            delete a[a2[i]];
        } else {
            a[a2[i]] = true;
        }
    }

    for (var k in a) {
        diff.push(k);
    }

    return diff.length ? diff : 'MATCH';
}

module.exports = async () => {

    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log("Passing is: Maximum = 25: Average = 25: Sum = 0")
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
    console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

    validate(vmbgldpd01, 'BAGEL', 'vmbgldpd01');
    validate(vmottdpd01, 'BAGEL', 'vmottdpd01');
    validate(vmottdpd02, 'BAGEL', 'vmottdpd02');
    validate(vmottdpd03, 'BAGEL', 'vmottdpd03');

    validate(vmbbadpd01, 'BBART', 'vmbbadpd01');
    validate(vmbbadpd02, 'BBART', 'vmbbadpd02');

    validate(vmcapdpd01, 'Capone', 'vmcapdpd01');

    validate(vmgosdpd011, 'GlobeOne', 'vmgosdpd01-1');
    validate(vmgosdpd012, 'GlobeOne', 'vmgosdpd01-2');

    validate(vmnfbdpd03_1, 'NF Bus', 'vmnfbdpd03-1');
    validate(vmnfbdpd03_2, 'NF Bus', 'vmnfbdpd03-2');

    validate(vmcccdpd01, 'OC3', 'vmcccdpd01');
    validate(vmcccdpd02, 'OC3', 'vmcccdpd02');
    validate(vmcccdpd03, 'OC3', 'vmcccdpd03');
    validate(vmcccdpd04, 'OC3', 'vmcccdpd04');
    validate(vmcccdpd05, 'OC3', 'vmcccdpd05');
    validate(vmcccdpd06, 'OC3', 'vmcccdpd06');

    validate(vmbbadpd01_ripley, 'RIPLEY', 'vmbbadpd01');

    validate(vmbbaddv01, 'Globe at home', 'vmbbaddv01');
}