var MembershipNames = require('./MembershipList.json');
var uniqueRndomArray = require('unique-random-array');

module.exports = {
    all: MembershipNames,
    random: uniqueRndomArray(MembershipNames)
}