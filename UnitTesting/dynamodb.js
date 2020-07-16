// Payment gateway
const pgwprdauditlogs = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/PaymentGateway/pgwprd-auditlogs');
const pgwprdbanks = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/PaymentGateway/pgwprd-banks');
const pgwprdbatchfiles = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/PaymentGateway/pgwprd-batchfiles');
const pgwprdchannels = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/PaymentGateway/pgwprd-channels');
const pgwprdconfigurations = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/PaymentGateway/pgwprd-configurations');
const pgwprdeventlogs = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/PaymentGateway/pgwprd-eventlogs');
const pgwprdfailedtransactions = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/PaymentGateway/pgwprd-failedtransactions');
const pgwprdgateways = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/PaymentGateway/pgwprd-gateways');
const pgwprdgeneratedreports = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/PaymentGateway/pgwprd-generatedreports');
const pgwprdmids = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/PaymentGateway/pgwprd-mids');
const pgwprdpaymentdetails = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/PaymentGateway/pgwprd-paymentdetails');
const pgwprdpaymentgatewaysessions = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/PaymentGateway/pgwprd-paymentgatewaysessions');
const pgwprdpaymentsessions = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/PaymentGateway/pgwprd-paymentsessions');
const pgwprdroles = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/PaymentGateway/pgwprd-roles');
const pgwprdsnapshots = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/PaymentGateway/pgwprd-snapshots');
const pgwprdtransactionlogs = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/PaymentGateway/pgwprd-transactionlogs');
const pgwprdusers = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/PaymentGateway/pgwprd-users');

// Globe One
const globeoneappuserlogindev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-app-user-login-dev');
const globeoneappuserloginprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-app-user-login-prod');
const globeoneappuserloginstage = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-app-user-login-stage');
const globeoneesaccountcreationinfodev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-account-creation-info-dev');
const globeoneesaccountcreationinfoprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-account-creation-info-prod');
const globeoneesaccountcreationinfostg = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-account-creation-info-stg');
const globeoneesaemconfigdev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-aem-config-dev');
const globeoneesaemconfigprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-aem-config-prod');
const globeoneesaemconfigstage = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-aem-config-stage');
const globeoneesaemwebtoolaccountprofiledev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-aem-webtool-account-profile-dev');
const globeoneesaemwebtoolaccountprofileprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-aem-webtool-account-profile-prod');
const globeoneesaemwebtoolaccountprofilestage = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-aem-webtool-account-profile-stage');
const globeoneesaemwebtoolaudittraildev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-aem-webtool-audittrail-dev');
const globeoneesaemwebtoolaudittrailprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-aem-webtool-audittrail-prod');
const globeoneesaemwebtoolaudittrailstage = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-aem-webtool-audittrail-stage');
const globeoneesaemwebtooluserdev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-aem-webtool-user-dev');
const globeoneesaemwebtooluserprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-aem-webtool-user-prod');
const globeoneesaemwebtooluserroledev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-aem-webtool-user-role-dev');
const globeoneesaemwebtooluserroleprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-aem-webtool-user-role-prod');
const globeoneesaemwebtooluserrolestage = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-aem-webtool-user-role-stage');
const globeoneesaemwebtooluserstage = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-aem-webtool-user-stage');
const globeoneesapicachedev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-api-cache-dev');
const globeoneesapicacheprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-api-cache-prod');
const globeoneesapicachestage = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-api-cache-stage');
const globeoneesbroadbandplanslistdev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-broadband-plans-list-dev');
const globeoneesbroadbandplanslistprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-broadband-plans-list-prod');
const globeoneesbroadbandplansliststg = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-broadband-plans-list-stg');
const globeoneesbroadbandpromolistdev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-broadband-promo-list-dev');
const globeoneesbroadbandpromolistprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-broadband-promo-list-prod');
const globeoneesbroadbandpromoliststg = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-broadband-promo-list-stg');
const globeoneescatchallconfigurationdev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-catch-all-configuration-dev');
const globeoneescatchallconfigurationprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-catch-all-configuration-prod');
const globeoneescatchallconfigurationstg = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-catch-all-configuration-stg');
const globeoneescustomercasesdev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-customer-cases-dev');
const globeoneescustomercasesprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-customer-cases-prod');
const globeoneescustomercasesstage = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-customer-cases-stage');
const globeoneescustomerverificationdev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-customer-verification-dev');
const globeoneescustomerverificationprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-customer-verification-prod');
const globeoneescustomerverificationstg = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-customer-verification-stg');
const globeoneesendpointarndev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-endpoint-arn-dev');
const globeoneesendpointarnprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-endpoint-arn-prod');
const globeoneesendpointarnstg = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-endpoint-arn-stg');
const globeoneesinboxmsgdev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-inbox-msg-dev');
const globeoneesinboxmsgprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-inbox-msg-prod');
const globeoneesinboxmsgstg = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-inbox-msg-stg');
const globeoneesloaddev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-load-dev');
const globeoneesloadprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-load-prod');
const globeoneesloadstg = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-load-stg');
const globeoneesmsgdev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-msg-dev');
const globeoneesmsgprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-msg-prod');
const globeoneesmsgstage = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-msg-stage');
const globeoneesplanslistdev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-plans-list-dev');
const globeoneesplanslistprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-plans-list-prod');
const globeoneesplansliststg = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-plans-list-stg');
const globeoneespostpaidcustomeraccountprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-postpaid-customer-account-prod');
const globeoneespostpaidcustomeraccountstage = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-postpaid-customer-account-stage');
const globeoneespostpaidcustomeraccountv2dev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-postpaid-customer-account-v2-dev');
const globeoneespostpaidcustomerprofiledev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-postpaid-customer-profile-dev');
const globeoneespostpaidcustomerprofileprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-postpaid-customer-profile-prod');
const globeoneespostpaidcustomerprofilestg = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-postpaid-customer-profile-stg');
const globeoneespostpaidcustomerservicesprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-postpaid-customer-services-prod');
const globeoneespostpaidcustomerservicesstage = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-postpaid-customer-services-stage');
const globeoneespostpaiddatawalletcorrectionprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-postpaid-data-wallet-correction-prod');
const globeoneespostpaiddatawalletcorrectionstg = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-postpaid-data-wallet-correction-stg');
const globeoneespostpaidprepaidlastboughtpromosdev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-postpaid-prepaid-last-bought-promos-dev');
const globeoneespostpaidprepaidlastboughtpromosprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-postpaid-prepaid-last-bought-promos-prod');
const globeoneespostpaidprepaidlastboughtpromosstg = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-postpaid-prepaid-last-bought-promos-stg');
const globeoneespostpaidpromolistdev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-postpaid-promo-list-dev');
const globeoneespostpaidpromolistprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-postpaid-promo-list-prod');
const globeoneespostpaidpromoliststg = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-postpaid-promo-list-stg');
const globeoneespostpaidtransactionprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-postpaid-transaction-prod');
const globeoneespostpaidtransactionstage = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-postpaid-transaction-stage');
const globeoneesprepaidcampaignwhitelistnumberdev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-prepaid-campaign-whitelist-number-dev');
const globeoneesprepaidcampaignwhitelistnumberprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-prepaid-campaign-whitelist-number-prod');
const globeoneesprepaidcampaignwhitelistnumberstg = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-prepaid-campaign-whitelist-number-stg');
const globeoneesprepaidltptmpromolistdev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-prepaid-ltp-tm-promo-list-dev');
const globeoneesprepaidltptmpromolistprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-prepaid-ltp-tm-promo-list-prod');
const globeoneesprepaidltptmpromoliststg = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-prepaid-ltp-tm-promo-list-stg');
const globeoneesprepaidsimsamplernumbersdev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-prepaid-sim-sampler-numbers-dev');
const globeoneesprepaidsimsamplernumbersprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-prepaid-sim-sampler-numbers-prod');
const globeoneesprepaidsimsamplernumbersstg = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-prepaid-sim-sampler-numbers-stg');
const globeoneespushednotificationsstatusdev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-pushed-notifications-status-dev');
const globeoneespushednotificationsstatusprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-pushed-notifications-status-prod');
const globeoneespushednotificationsstatusstg = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-pushed-notifications-status-stg');
const globeoneesqrcodedev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-qr-code-dev');
const globeoneesqrcodeprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-qr-code-prod');
const globeoneesqrcodestg = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-qr-code-stg');
const globeoneesrecipientdev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-recipient-dev');
const globeoneesrecipientprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-recipient-prod');
const globeoneesrecipientstage = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-recipient-stage');
const globeoneesrecipientuserdev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-recipient-user-dev');
const globeoneesrecipientuserprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-recipient-user-prod');
const globeoneesrecipientuserstage = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-recipient-user-stage');
const globeoneesretailerdev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-retailer-dev');
const globeoneesretailerprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-retailer-prod');
const globeoneesretailerstg = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-retailer-stg');
const globeoneesselfservicetransactiondev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-self-service-transaction-dev');
const globeoneesselfservicetransactionprod = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-self-service-transaction-prod');
const globeoneesselfservicetransactionstg = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-self-service-transaction-stg');
const globeoneessessionmanagementdev = require('../../centralizedlogger/lambda/cloudwatch-metrics/queries/DynamoDB/GlobeOne/globeone-es-session-management-dev');


const metricThreshold = require('../../centralizedlogger/lambda/cloudwatch-metrics/MetricThreshold');

let ids = [];
const metrics = [
    'AccountMaxReads',
    'AccountMaxTableLevelReads',
    'AccountMaxTableLevelWrites',
    'AccountMaxWrites',
    'AccountProvisionedReadCapacityUtilization',
    'AccountProvisionedWriteCapacityUtilization',
    'ConditionalCheckFailedRequests',
    'ConsumedReadCapacityUnits',
    'ConsumedWriteCapacityUnits',
    'MaxProvisionedTableReadCapacityUtilization',
    'MaxProvisionedTableWriteCapacityUtilization',
    'OnlineIndexConsumedWriteCapacity',
    'OnlineIndexPercentageProgress',
    'OnlineIndexThrottleEvents',
    'PendingReplicationCount',
    'ProvisionedReadCapacityUnits',
    'ProvisionedWriteCapacityUnits',
    'ReadThrottleEvents',
    'ReplicationLatency',
    'ReturnedBytes',
    'ReturnedItemCount',
    'ReturnedRecordsCount',
    'SuccessfulRequestLatency',
    'SystemErrors',
    'TimeToLiveDeletedItemCount',
    'ThrottledRequests',
    'TransactionConflict',
    'UserErrors',
    'WriteThrottleEvents'
];

const metricUnits = {
  'AccountMaxReads': 'Count',
  'AccountMaxTableLevelReads': 'Count',
  'AccountMaxTableLevelWrites': 'Count',
  'AccountMaxWrites': 'Count',
  'AccountProvisionedReadCapacityUtilization': 'Percent',
  'AccountProvisionedWriteCapacityUtilization': 'Percent',
  'ConditionalCheckFailedRequests': 'Count',
  'ConsumedReadCapacityUnits': 'Count',
  'ConsumedWriteCapacityUnits': 'Count',
  'MaxProvisionedTableReadCapacityUtilization': 'Percent',
  'MaxProvisionedTableWriteCapacityUtilization': 'Percent',
  'OnlineIndexConsumedWriteCapacity': 'Count',
  'OnlineIndexPercentageProgress': 'Count',
  'OnlineIndexThrottleEvents': 'Count',
  'PendingReplicationCount': 'Count',
  'ProvisionedReadCapacityUnits': 'Count',
  'ProvisionedWriteCapacityUnits': 'Count',
  'ReadThrottleEvents': 'Count',
  'ReplicationLatency': 'Milliseconds',
  'ReturnedBytes': 'Bytes',
  'ReturnedItemCount': 'Count',
  'ReturnedRecordsCount': 'Count',
  'SuccessfulRequestLatency': 'Milliseconds',
  'SystemErrors': 'Count',
  'TimeToLiveDeletedItemCount': 'Count',
  'ThrottledRequests': 'Count',
  'TransactionConflict': 'Count',
  'UserErrors': 'Count',
  'WriteThrottleEvents': 'Count',
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
    console.log(metricThreshold[resource_type][metric_name])

    
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

module.exports = function() {
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
  console.log("Passing is: Maximum = 22: Average = 19: Sum = 7")
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")

  validate(pgwprdauditlogs, 'Payment Service - Payment Gateway', 'pgwprd-auditlogs');
  validate(pgwprdbanks, 'Payment Service - Payment Gateway', 'pgwprd-banks');
  validate(pgwprdbatchfiles, 'Payment Service - Payment Gateway', 'pgwprd-batchfiles');
  validate(pgwprdchannels, 'Payment Service - Payment Gateway', 'pgwprd-channels');
  validate(pgwprdconfigurations, 'Payment Service - Payment Gateway', 'pgwprd-configurations');
  validate(pgwprdeventlogs, 'Payment Service - Payment Gateway', 'pgwprd-eventlogs');
  validate(pgwprdfailedtransactions, 'Payment Service - Payment Gateway', 'pgwprd-failedtransactions');
  validate(pgwprdgateways, 'Payment Service - Payment Gateway', 'pgwprd-gateways');
  validate(pgwprdgeneratedreports, 'Payment Service - Payment Gateway', 'pgwprd-generatedreports');
  validate(pgwprdmids, 'Payment Service - Payment Gateway', 'pgwprd-mids');
  validate(pgwprdpaymentdetails, 'Payment Service - Payment Gateway', 'pgwprd-paymentdetails');
  validate(pgwprdpaymentgatewaysessions, 'Payment Service - Payment Gateway', 'pgwprd-paymentgatewaysessions');
  validate(pgwprdpaymentsessions, 'Payment Service - Payment Gateway', 'pgwprd-paymentsessions');
  validate(pgwprdroles, 'Payment Service - Payment Gateway', 'pgwprd-roles');
  validate(pgwprdsnapshots, 'Payment Service - Payment Gateway', 'pgwprd-snapshots');
  validate(pgwprdtransactionlogs, 'Payment Service - Payment Gateway', 'pgwprd-transactionlogs');
  validate(pgwprdusers, 'Payment Service - Payment Gateway', 'pgwprd-users');

  validate(globeoneappuserlogindev, 'Globe One', 'globeone-app-user-login-dev');
  validate(globeoneappuserloginprod, 'Globe One', 'globeone-app-user-login-prod');
  validate(globeoneappuserloginstage, 'Globe One', 'globeone-app-user-login-stage');
  validate(globeoneesaccountcreationinfodev, 'Globe One', 'globeone-es-account-creation-info-dev');
  validate(globeoneesaccountcreationinfoprod, 'Globe One', 'globeone-es-account-creation-info-prod');
  validate(globeoneesaccountcreationinfostg, 'Globe One', 'globeone-es-account-creation-info-stg');
  validate(globeoneesaemconfigdev, 'Globe One', 'globeone-es-aem-config-dev');
  validate(globeoneesaemconfigprod, 'Globe One', 'globeone-es-aem-config-prod');
  validate(globeoneesaemconfigstage, 'Globe One', 'globeone-es-aem-config-stage');
  validate(globeoneesaemwebtoolaccountprofiledev, 'Globe One', 'globeone-es-aem-webtool-account-profile-dev');
  validate(globeoneesaemwebtoolaccountprofileprod, 'Globe One', 'globeone-es-aem-webtool-account-profile-prod');
  validate(globeoneesaemwebtoolaccountprofilestage, 'Globe One', 'globeone-es-aem-webtool-account-profile-stage');
  validate(globeoneesaemwebtoolaudittraildev, 'Globe One', 'globeone-es-aem-webtool-audittrail-dev');
  validate(globeoneesaemwebtoolaudittrailprod, 'Globe One', 'globeone-es-aem-webtool-audittrail-prod');
  validate(globeoneesaemwebtoolaudittrailstage, 'Globe One', 'globeone-es-aem-webtool-audittrail-stage');
  validate(globeoneesaemwebtooluserdev, 'Globe One', 'globeone-es-aem-webtool-user-dev');
  validate(globeoneesaemwebtooluserprod, 'Globe One', 'globeone-es-aem-webtool-user-prod');
  validate(globeoneesaemwebtooluserroledev, 'Globe One', 'globeone-es-aem-webtool-user-role-dev');
  validate(globeoneesaemwebtooluserroleprod, 'Globe One', 'globeone-es-aem-webtool-user-role-prod');
  validate(globeoneesaemwebtooluserrolestage, 'Globe One', 'globeone-es-aem-webtool-user-role-stage');
  validate(globeoneesaemwebtooluserstage, 'Globe One', 'globeone-es-aem-webtool-user-stage');
  validate(globeoneesapicachedev, 'Globe One', 'globeone-es-api-cache-dev');
  validate(globeoneesapicacheprod, 'Globe One', 'globeone-es-api-cache-prod');
  validate(globeoneesapicachestage, 'Globe One', 'globeone-es-api-cache-stage');
  validate(globeoneesbroadbandplanslistdev, 'Globe One', 'globeone-es-broadband-plans-list-dev');
  validate(globeoneesbroadbandplanslistprod, 'Globe One', 'globeone-es-broadband-plans-list-prod');
  validate(globeoneesbroadbandplansliststg, 'Globe One', 'globeone-es-broadband-plans-list-stg');
  validate(globeoneesbroadbandpromolistdev, 'Globe One', 'globeone-es-broadband-promo-list-dev');
  validate(globeoneesbroadbandpromolistprod, 'Globe One', 'globeone-es-broadband-promo-list-prod');
  validate(globeoneesbroadbandpromoliststg, 'Globe One', 'globeone-es-broadband-promo-list-stg');
  validate(globeoneescatchallconfigurationdev, 'Globe One', 'globeone-es-catch-all-configuration-dev');
  validate(globeoneescatchallconfigurationprod, 'Globe One', 'globeone-es-catch-all-configuration-prod');
  validate(globeoneescatchallconfigurationstg, 'Globe One', 'globeone-es-catch-all-configuration-stg');
  validate(globeoneescustomercasesdev, 'Globe One', 'globeone-es-customer-cases-dev');
  validate(globeoneescustomercasesprod, 'Globe One', 'globeone-es-customer-cases-prod');
  validate(globeoneescustomercasesstage, 'Globe One', 'globeone-es-customer-cases-stage');
  validate(globeoneescustomerverificationdev, 'Globe One', 'globeone-es-customer-verification-dev');
  validate(globeoneescustomerverificationprod, 'Globe One', 'globeone-es-customer-verification-prod');
  validate(globeoneescustomerverificationstg, 'Globe One', 'globeone-es-customer-verification-stg');
  validate(globeoneesendpointarndev, 'Globe One', 'globeone-es-endpoint-arn-dev');
  validate(globeoneesendpointarnprod, 'Globe One', 'globeone-es-endpoint-arn-prod');
  validate(globeoneesendpointarnstg, 'Globe One', 'globeone-es-endpoint-arn-stg');
  validate(globeoneesinboxmsgdev, 'Globe One', 'globeone-es-inbox-msg-dev');
  validate(globeoneesinboxmsgprod, 'Globe One', 'globeone-es-inbox-msg-prod');
  validate(globeoneesinboxmsgstg, 'Globe One', 'globeone-es-inbox-msg-stg');
  validate(globeoneesloaddev, 'Globe One', 'globeone-es-load-dev');
  validate(globeoneesloadprod, 'Globe One', 'globeone-es-load-prod');
  validate(globeoneesloadstg, 'Globe One', 'globeone-es-load-stg');
  validate(globeoneesmsgdev, 'Globe One', 'globeone-es-msg-dev');
  validate(globeoneesmsgprod, 'Globe One', 'globeone-es-msg-prod');
  validate(globeoneesmsgstage, 'Globe One', 'globeone-es-msg-stage');
  validate(globeoneesplanslistdev, 'Globe One', 'globeone-es-plans-list-dev');
  validate(globeoneesplanslistprod, 'Globe One', 'globeone-es-plans-list-prod');
  validate(globeoneesplansliststg, 'Globe One', 'globeone-es-plans-list-stg');
  validate(globeoneespostpaidcustomeraccountprod, 'Globe One', 'globeone-es-postpaid-customer-account-prod');
  validate(globeoneespostpaidcustomeraccountstage, 'Globe One', 'globeone-es-postpaid-customer-account-stage');
  validate(globeoneespostpaidcustomeraccountv2dev, 'Globe One', 'globeone-es-postpaid-customer-account-v2-dev');
  validate(globeoneespostpaidcustomerprofiledev, 'Globe One', 'globeone-es-postpaid-customer-profile-dev');
  validate(globeoneespostpaidcustomerprofileprod, 'Globe One', 'globeone-es-postpaid-customer-profile-prod');
  validate(globeoneespostpaidcustomerprofilestg, 'Globe One', 'globeone-es-postpaid-customer-profile-stg');
  validate(globeoneespostpaidcustomerservicesprod, 'Globe One', 'globeone-es-postpaid-customer-services-prod');
  validate(globeoneespostpaidcustomerservicesstage, 'Globe One', 'globeone-es-postpaid-customer-services-stage');
  validate(globeoneespostpaiddatawalletcorrectionprod, 'Globe One', 'globeone-es-postpaid-data-wallet-correction-prod');
  validate(globeoneespostpaiddatawalletcorrectionstg, 'Globe One', 'globeone-es-postpaid-data-wallet-correction-stg');
  validate(globeoneespostpaidprepaidlastboughtpromosdev, 'Globe One', 'globeone-es-postpaid-prepaid-last-bought-promos-dev');
  validate(globeoneespostpaidprepaidlastboughtpromosprod, 'Globe One', 'globeone-es-postpaid-prepaid-last-bought-promos-prod');
  validate(globeoneespostpaidprepaidlastboughtpromosstg, 'Globe One', 'globeone-es-postpaid-prepaid-last-bought-promos-stg');
  validate(globeoneespostpaidpromolistdev, 'Globe One', 'globeone-es-postpaid-promo-list-dev');
  validate(globeoneespostpaidpromolistprod, 'Globe One', 'globeone-es-postpaid-promo-list-prod');
  validate(globeoneespostpaidpromoliststg, 'Globe One', 'globeone-es-postpaid-promo-list-stg');
  validate(globeoneespostpaidtransactionprod, 'Globe One', 'globeone-es-postpaid-transaction-prod');
  validate(globeoneespostpaidtransactionstage, 'Globe One', 'globeone-es-postpaid-transaction-stage');
  validate(globeoneesprepaidcampaignwhitelistnumberdev, 'Globe One', 'globeone-es-prepaid-campaign-whitelist-number-dev');
  validate(globeoneesprepaidcampaignwhitelistnumberprod, 'Globe One', 'globeone-es-prepaid-campaign-whitelist-number-prod');
  validate(globeoneesprepaidcampaignwhitelistnumberstg, 'Globe One', 'globeone-es-prepaid-campaign-whitelist-number-stg');
  validate(globeoneesprepaidltptmpromolistdev, 'Globe One', 'globeone-es-prepaid-ltp-tm-promo-list-dev');
  validate(globeoneesprepaidltptmpromolistprod, 'Globe One', 'globeone-es-prepaid-ltp-tm-promo-list-prod');
  validate(globeoneesprepaidltptmpromoliststg, 'Globe One', 'globeone-es-prepaid-ltp-tm-promo-list-stg');
  validate(globeoneesprepaidsimsamplernumbersdev, 'Globe One', 'globeone-es-prepaid-sim-sampler-numbers-dev');
  validate(globeoneesprepaidsimsamplernumbersprod, 'Globe One', 'globeone-es-prepaid-sim-sampler-numbers-prod');
  validate(globeoneesprepaidsimsamplernumbersstg, 'Globe One', 'globeone-es-prepaid-sim-sampler-numbers-stg');
  validate(globeoneespushednotificationsstatusdev, 'Globe One', 'globeone-es-pushed-notifications-status-dev');
  validate(globeoneespushednotificationsstatusprod, 'Globe One', 'globeone-es-pushed-notifications-status-prod');
  validate(globeoneespushednotificationsstatusstg, 'Globe One', 'globeone-es-pushed-notifications-status-stg');
  validate(globeoneesqrcodedev, 'Globe One', 'globeone-es-qr-code-dev');
  validate(globeoneesqrcodeprod, 'Globe One', 'globeone-es-qr-code-prod');
  validate(globeoneesqrcodestg, 'Globe One', 'globeone-es-qr-code-stg');
  validate(globeoneesrecipientdev, 'Globe One', 'globeone-es-recipient-dev');
  validate(globeoneesrecipientprod, 'Globe One', 'globeone-es-recipient-prod');
  validate(globeoneesrecipientstage, 'Globe One', 'globeone-es-recipient-stage');
  validate(globeoneesrecipientuserdev, 'Globe One', 'globeone-es-recipient-user-dev');
  validate(globeoneesrecipientuserprod, 'Globe One', 'globeone-es-recipient-user-prod');
  validate(globeoneesrecipientuserstage, 'Globe One', 'globeone-es-recipient-user-stage');
  validate(globeoneesretailerdev, 'Globe One', 'globeone-es-retailer-dev');
  validate(globeoneesretailerprod, 'Globe One', 'globeone-es-retailer-prod');
  validate(globeoneesretailerstg, 'Globe One', 'globeone-es-retailer-stg');
  validate(globeoneesselfservicetransactiondev, 'Globe One', 'globeone-es-self-service-transaction-dev');
  validate(globeoneesselfservicetransactionprod, 'Globe One', 'globeone-es-self-service-transaction-prod');
  validate(globeoneesselfservicetransactionstg, 'Globe One', 'globeone-es-self-service-transaction-stg');
  validate(globeoneessessionmanagementdev, 'Globe One', 'globeone-es-session-management-dev');
}