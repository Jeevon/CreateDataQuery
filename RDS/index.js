const generate = require('./generate');

const bagelmobiledb = [
    'vmbgldpd01'
];
const bagelcontentdeliverdb = [
    'vmottdpd01',
    'vmottdpd02',
    'vmottdpd03'
]
const bbartselfserviceappbb = [
    'vmbbadpd01',
];
const bbart = [
    'vmbbadpd02'
]
const capone = [
    'vmcapdpd01'
]
const globeathome = [
    'vmbbaddv01'
]
const globeOne = [
    'vmgosdpd01-1',
    'vmgosdpd01-2',
]
const nfbus = [
    'vmnfbdpd03-1',
    'vmnfbdpd03-2'
]
const oc3 = [
    'vmcccdpd01',
    'vmcccdpd02',
    'vmcccdpd03',
    'vmcccdpd04',
    'vmcccdpd05',
    'vmcccdpd06',
]
const ripley = [
    'vmdcpdpd01'
]

module.exports = async () => {
    await generate('BAGELMobile', 'BAGEL', 'arn:aws:rds:ap-southeast-1:073504361408:db:', bagelmobiledb);
    await generate('BAGELContentDelivery', 'BAGEL', 'arn:aws:rds:ap-southeast-1:073504361408:db:', bagelcontentdeliverdb);
    await generate('BBARTSelfServiceAppBB', 'BBART', 'arn:aws:rds:ap-southeast-1:073504361408:db:', bbartselfserviceappbb);
    await generate('BBART', 'BBART', 'arn:aws:rds:ap-southeast-1:656703133871:db:', bbart);
    await generate('Capone', 'Capone', 'arn:aws:rds:ap-southeast-1:073504361408:db:', capone);
    await generate('GlobeAtHome', 'Globe at Home', 'arn:aws:rds:ap-southeast-1:073504361408:db:', globeathome);
    await generate('GlobeOne', 'Globe One', 'arn:aws:rds:ap-southeast-1:073504361408:db:', globeOne);
    await generate('NFBus', 'NF Bus', 'arn:aws:rds:ap-southeast-1:587852665253:db:', nfbus);
    await generate('OC3', 'OC3', 'arn:aws:rds:ap-southeast-1:073504361408:db:', oc3);
    await generate('Ripley', 'RIPLEY', 'arn:aws:rds:ap-southeast-1:073504361408:db:', ripley);
}