const generate = require('./generate');

const PaymentGatewayFunctions = [
    'payment-service-api-prod-accesstoken',
    'payment-service-api-prod-app',
    'payment-service-api-prod-confirm',
    'payment-service-api-prod-eventStream',
    'payment-service-api-prod-gatewayStatus',
    'payment-service-api-prod-gcashCallback',
    'payment-service-api-prod-adyenCallback',
    'payment-service-api-prod-gcashPaymentQuery',
    'payment-service-api-prod-ipay88Callback',
    'payment-service-api-prod-ipay88PaymentQuery',
    'payment-service-api-prod-lukeCron',
    'payment-service-api-prod-overallTransactions',
    'payment-service-api-prod-refreshtoken',
    'payment-service-api-prod-register',
    'payment-service-api-prod-deleteUser',
    'payment-service-api-prod-resendCode',
    'payment-service-api-prod-transactions',
];

const GlobeAtHomeFileServiceFunctions = [
    'bbapp-file-service-v2-prod-bill-statement',
    'bbapp-file-service-v2-prod-authorizer',
    'bbapp-file-service-v2-prod-access-token',
];

const GlobeAtHomeAPIFunctions = [
    'bb-api-new-v2-prod-access-token',
    'bb-api-new-v2-prod-accounts',
    'bb-api-new-v2-prod-analytics',
    'bb-api-new-v2-prod-authorizer',
    'bb-api-new-v2-prod-cms',
    'bb-api-new-v2-prod-content-management',
    'bb-api-new-v2-prod-device',
    'bb-api-new-v2-prod-email-complaint',
    'bb-api-new-v2-prod-external',
    'bb-api-new-v2-prod-games',
    'bb-api-new-v2-prod-globelabs',
    'bb-api-new-v2-prod-login',
    'bb-api-new-v2-prod-notification',
    'bb-api-new-v2-prod-payment-methods',
    'bb-api-new-v2-prod-promotion',
    'bb-api-new-v2-prod-register',
    'bb-api-new-v2-prod-shop',
    'bb-api-new-v2-prod-takeovers',
    'bb-api-new-v2-prod-transfer-location',
    'bb-api-new-v2-prod-vouchers',
    'bb-api-new-v2-prod-work-order',
];

module.exports = async () => {
    await generate('PaymentGateway', 'Payment Gateway', 'arn:aws:lambda:ap-southeast-1:073504361408:function:', PaymentGatewayFunctions);
    await generate('GlobeAtHomeFileService', 'Globe at Home', 'arn:aws:lambda:ap-southeast-1:073504361408:function:', GlobeAtHomeFileServiceFunctions);
    await generate('GlobeAtHomeAPI', 'Globe at Home', 'arn:aws:lambda:ap-southeast-1:073504361408:function:', GlobeAtHomeAPIFunctions);
}