const generate = require('./generate');

// DECOM
//const bagelmobiledb = [
//    'vmbgldpd01'
//];
const bagelcontentdeliverdb = [
    'vmottdpd01',
    'vmottdpd02',
    'vmottdpd03'
]
//const bbartselfserviceappbb = [
//    'vmbbadpd01',
//];
//const bbart = [
//    'vmbbadpd02'
//]
const capone = [
    'vmcapdpd01'
]
const globeathome = [
    'vmbbaddv01',
    'vmbbadpd01',
    'vmbbadpd02'
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
const aesop = [
    'vmpnsdpd01'
]

module.exports = async () => {
    //await generate('BAGELMobile', 'BAGEL', 'arn:aws:rds:ap-southeast-1:073504361408:db:', 'Tier 2B', bagelmobiledb);
    await generate('BAGELContentDelivery', 'BAGEL', 'arn:aws:rds:ap-southeast-1:073504361408:db:', 'Tier 2B', bagelcontentdeliverdb);
    //await generate('BBARTSelfServiceAppBB', 'BBART', 'arn:aws:rds:ap-southeast-1:073504361408:db:', 'Tier 2A', bbartselfserviceappbb);
    //await generate('BBART', 'BBART', 'arn:aws:rds:ap-southeast-1:656703133871:db:', 'Tier 2A', bbart);
    await generate('Capone', 'Capone', 'arn:aws:rds:ap-southeast-1:073504361408:db:', 'Tier 2B', capone);
    await generate('GlobeAtHome', 'Globe at Home', 'arn:aws:rds:ap-southeast-1:073504361408:db:', 'Tier 2A', globeathome);
    await generate('GlobeOne', 'Globe One', 'arn:aws:rds:ap-southeast-1:073504361408:db:', 'Tier 2A', globeOne);
    await generate('NFBus', 'NF Bus', 'arn:aws:rds:ap-southeast-1:587852665253:db:', 'Tier 2', nfbus);
    await generate('OC3', 'OC3', 'arn:aws:rds:ap-southeast-1:073504361408:db:', '', oc3);
    await generate('Ripley', 'RIPLEY', 'arn:aws:rds:ap-southeast-1:073504361408:db:', 'Tier 2', ripley);
    await generate('AESOP', 'AESOP', 'arn:aws:rds:ap-southeast-1:073504361408:db:', 'Tier 2', aesop);
}