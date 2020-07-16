// Payment gateway
const psapiprodaccesstoken = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/PaymentGateway/payment-service-api-prod-accesstoken');
const psapiprodapp = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/PaymentGateway/payment-service-api-prod-app');
const psapiprodconfirm = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/PaymentGateway/payment-service-api-prod-confirm');
const psapiprodeventstream = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/PaymentGateway/payment-service-api-prod-eventStream');
const psapiprodgatewaystatus = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/PaymentGateway/payment-service-api-prod-gatewayStatus');
const psapiprodgcashcallback = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/PaymentGateway/payment-service-api-prod-gcashCallback');
const psapiprodadyencallback = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/PaymentGateway/payment-service-api-prod-adyenCallback');
const psapiprodgcashpaymentquery = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/PaymentGateway/payment-service-api-prod-gcashPaymentQuery');
const psapiprodipay88callback = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/PaymentGateway/payment-service-api-prod-ipay88Callback');
const psapiprodipay88paymentquery = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/PaymentGateway/payment-service-api-prod-ipay88PaymentQuery');
const psapiprodlikecron = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/PaymentGateway/payment-service-api-prod-lukeCron');
const psapiprodoveralltransactions = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/PaymentGateway/payment-service-api-prod-overallTransactions');
const psapiprodrefreshtoken = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/PaymentGateway/payment-service-api-prod-refreshtoken');
const psapiprodregister = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/PaymentGateway/payment-service-api-prod-register');
const psapiproddeleteuser = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/PaymentGateway/payment-service-api-prod-deleteUser');
const psapiprodresendcode = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/PaymentGateway/payment-service-api-prod-resendCode');
const psapiprodtransactions = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/PaymentGateway/payment-service-api-prod-transactions');

const bbappfsv2prodbillstatement = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeFileService/bbapp-file-service-v2-prod-bill-statement');
const bbappfsv2prodauthorizer = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeFileService/bbapp-file-service-v2-prod-authorizer');
const bbappfsv2prodaccesstoken = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeFileService/bbapp-file-service-v2-prod-access-token');

const bbapinewv2prodaccesstoken = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeAPI/bb-api-new-v2-prod-access-token');
const bbapinewv2prodaccounts = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeAPI/bb-api-new-v2-prod-accounts');
const bbapinewv2prodanalytics = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeAPI/bb-api-new-v2-prod-analytics');
const bbapinewv2prodauthorizer = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeAPI/bb-api-new-v2-prod-authorizer');
const bbapinewv2prodcms = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeAPI/bb-api-new-v2-prod-cms');
const bbapinewv2prodcontentmanagement = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeAPI/bb-api-new-v2-prod-content-management');
const bbapinewv2proddevice = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeAPI/bb-api-new-v2-prod-device');
const bbapinewv2prodemailcomplaint = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeAPI/bb-api-new-v2-prod-email-complaint');
const bbapinewv2prodexternal = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeAPI/bb-api-new-v2-prod-external');
const bbapinewv2prodgames = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeAPI/bb-api-new-v2-prod-games');
const bbapinewv2prodglobelabs = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeAPI/bb-api-new-v2-prod-globelabs');
const bbapinewv2prodlogin = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeAPI/bb-api-new-v2-prod-login');
const bbapinewv2prodnotification = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeAPI/bb-api-new-v2-prod-notification');
const bbapinewv2prodpaymentmethods = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeAPI/bb-api-new-v2-prod-payment-methods');
const bbapinewv2prodpromotion = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeAPI/bb-api-new-v2-prod-promotion');
const bbapinewv2prodregister = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeAPI/bb-api-new-v2-prod-register');
const bbapinewv2prodshop = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeAPI/bb-api-new-v2-prod-shop');
const bbapinewv2prodtakeovers = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeAPI/bb-api-new-v2-prod-takeovers');
const bbapinewv2prodtransferlocation = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeAPI/bb-api-new-v2-prod-transfer-location');
const bbapinewv2prodvouchers = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeAPI/bb-api-new-v2-prod-vouchers');
const bbapinewv2prodworkorder = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/Lambda/GlobeAtHomeAPI/bb-api-new-v2-prod-work-order');


const metricThreshold = require('../../centralizedlogger/lambda/cloudwatch-metrics/MetricThreshold');
const { exit } = require('process');

let ids = [];
const metrics = [
  'ConcurrentExecutions',
  'Duration',
  'Errors',
  'Invocations',
  'Throttles',
  'UnreservedConcurrentExecutions',
];

const metricUnits = {
  'ConcurrentExecutions': 'Count',
  'Duration': 'Milliseconds',
  'Errors': 'Count',
  'Invocations': 'Count',
  'Throttles': 'Count',
  'UnreservedConcurrentExecutions': 'Count',
};

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
        console.log(`APP: ${app} - ${id}; ERROR: ${chunk[4]} did not match with MetricName value;`)
      } else {
        if (chunk[3] == 'Maximum') {
          appMetricsMaximum.push(chunk[4]);
        } else {
          appMetricsAverage.push(chunk[4]);
        }
      }
    } else {
      console.log(`APP: ${app} - ${id}; ERROR: ${chunk[4]} is not in metric list;`)
    }

    if (ids.indexOf(a[b].Id) == -1) {
      ids.push(a[b].Id);
    } else {
      console.log(`APP: ${app} - ${id}; ERROR: ${a[b].Id} already exist;`)
    }

    if (a[b].MetricStat.Metric.Dimensions[0].Value != id && a[b].MetricStat.Metric.Dimensions[0].Value == chunk[1]) {
      console.log(`APP: ${app} - ${id}; ERROR: ${a[b].MetricStat.Metric.Dimensions[0].Value} did not match with dimension;`)
    }

    if (chunk[3] == 'Maximum') {
      maximum++;
    } else if(chunk[3] == 'Average'){
      average++;
    } else {
      sum++;
    }

    let resource_arn = chunk[2];
    let resource_type = resource_arn.split(':')[2];
    let metric_name = a[b].MetricStat.Metric.MetricName;
    console.log(resource_type);
    console.log(metric_name);
    console.log(metricThreshold[resource_type][metric_name]);
    if(!metricThreshold[resource_type][metric_name]){
      fail;
    }

    if(a[b].MetricStat.Unit != metricUnits[a[b].MetricStat.Metric.MetricName]) {
      console.log(`APP: ${app} - ${id}; ERROR: ${a[b].MetricStat.Unit} - unit is invalid for the metric;`)
    }
  }

  console.log(`STATUS: Success; APP: ${app} - ${id}; maximum: ${maximum}; average: ${average}; sum: ${sum}`);
  //console.log(`AVERAGE METRICS: ${compare(metrics, appMetricsAverage)};`)
  //console.log(`Maximum METRICS: ${compare(metrics, appMetricsMaximum)};`)
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

  return diff.length ? diff: 'MATCH';
}

module.exports = async() => {
  
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
  console.log("Passing is: Maximum = 6: Average = 6: Sum = 0")
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

  validate(psapiprodaccesstoken, 'Payment Service/Payment Gateway', 'payment-service-api-prod-accesstoken');
  validate(psapiprodapp, 'Payment Service/Payment Gateway', 'payment-service-api-prod-app');
  validate(psapiprodconfirm, 'Payment Service/Payment Gateway', 'payment-service-api-prod-confirm');
  validate(psapiprodeventstream, 'Payment Service/Payment Gateway', 'payment-service-api-prod-eventStream');
  validate(psapiprodgatewaystatus, 'Payment Service/Payment Gateway', 'payment-service-api-prod-gatewayStatus');
  validate(psapiprodgcashcallback, 'Payment Service/Payment Gateway', 'payment-service-api-prod-gcashCallback');
  validate(psapiprodadyencallback, 'Payment Service/Payment Gateway', 'payment-service-api-prod-adyenCallback');
  validate(psapiprodgcashpaymentquery, 'Payment Service/Payment Gateway', 'payment-service-api-prod-gcashPaymentQuery');
  validate(psapiprodipay88callback, 'Payment Service/Payment Gateway', 'payment-service-api-prod-ipay88Callback');
  validate(psapiprodipay88paymentquery, 'Payment Service/Payment Gateway', 'payment-service-api-prod-ipay88PaymentQuery');
  validate(psapiprodlikecron, 'Payment Service/Payment Gateway', 'payment-service-api-prod-lukeCron');
  validate(psapiprodoveralltransactions, 'Payment Service/Payment Gateway', 'payment-service-api-prod-overallTransactions');
  validate(psapiprodrefreshtoken, 'Payment Service/Payment Gateway', 'payment-service-api-prod-refreshtoken');
  validate(psapiprodregister, 'Payment Service/Payment Gateway', 'payment-service-api-prod-register');
  validate(psapiproddeleteuser, 'Payment Service/Payment Gateway', 'payment-service-api-prod-deleteUser');
  validate(psapiprodresendcode, 'Payment Service/Payment Gateway', 'payment-service-api-prod-resendCode');
  validate(psapiprodtransactions, 'Payment Service/Payment Gateway', 'payment-service-api-prod-transactions');

  validate(bbappfsv2prodbillstatement, 'Globe At Home App - file service', 'bbapp-file-service-v2-prod-bill-statement');
  validate(bbappfsv2prodauthorizer, 'Globe At Home App - file service', 'bbapp-file-service-v2-prod-authorizer');
  validate(bbappfsv2prodaccesstoken, 'Globe At Home App - file service', 'bbapp-file-service-v2-prod-access-token');


  validate(bbapinewv2prodaccesstoken, 'Globe At Home App - api', 'bb-api-new-v2-prod-access-token');
  validate(bbapinewv2prodaccounts, 'Globe At Home App - api', 'bb-api-new-v2-prod-accounts');
  validate(bbapinewv2prodanalytics, 'Globe At Home App - api', 'bb-api-new-v2-prod-analytics');
  validate(bbapinewv2prodauthorizer, 'Globe At Home App - api', 'bb-api-new-v2-prod-authorizer');
  validate(bbapinewv2prodcms, 'Globe At Home App - api', 'bb-api-new-v2-prod-cms');
  validate(bbapinewv2prodcontentmanagement, 'Globe At Home App - api', 'bb-api-new-v2-prod-content-management');
  validate(bbapinewv2proddevice, 'Globe At Home App - api', 'bb-api-new-v2-prod-device');
  validate(bbapinewv2prodemailcomplaint, 'Globe At Home App - api', 'bb-api-new-v2-prod-email-complaint');
  validate(bbapinewv2prodexternal, 'Globe At Home App - api', 'bb-api-new-v2-prod-external');
  validate(bbapinewv2prodgames, 'Globe At Home App - api', 'bb-api-new-v2-prod-games');
  validate(bbapinewv2prodglobelabs, 'Globe At Home App - api', 'bb-api-new-v2-prod-globelabs');
  validate(bbapinewv2prodlogin, 'Globe At Home App - api', 'bb-api-new-v2-prod-login');
  validate(bbapinewv2prodnotification, 'Globe At Home App - api', 'bb-api-new-v2-prod-notification');
  validate(bbapinewv2prodpaymentmethods, 'Globe At Home App - api', 'bb-api-new-v2-prod-payment-methods');
  validate(bbapinewv2prodpromotion, 'Globe At Home App - api', 'bb-api-new-v2-prod-promotion');
  validate(bbapinewv2prodregister, 'Globe At Home App - api', 'bb-api-new-v2-prod-register');
  validate(bbapinewv2prodshop, 'Globe At Home App - api', 'bb-api-new-v2-prod-shop');
  validate(bbapinewv2prodtakeovers, 'Globe At Home App - api', 'bb-api-new-v2-prod-takeovers');
  validate(bbapinewv2prodtransferlocation, 'Globe At Home App - api', 'bb-api-new-v2-prod-transfer-location');
  validate(bbapinewv2prodvouchers, 'Globe At Home App - api', 'bb-api-new-v2-prod-vouchers');
  validate(bbapinewv2prodworkorder, 'Globe At Home App - api', 'bb-api-new-v2-prod-work-order');
}