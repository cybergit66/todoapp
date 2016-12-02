var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:0am -> 0
// January 1st 1970 @ 12:01am -> 60

var now = moment();

console.log('current time stamp', now.unix());

var timestamp = now.unix();
var currentMoment = moment.unix(timestamp);

console.log('current moment', currentMoment.format('MMM DD, YYYY @ h:mm:ss A'));

// January 3rd, 2016 @ 12:13 AM
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));