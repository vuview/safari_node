console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
// third party module
const _ = require('lodash');
const notes = require('./notes.js');

var user = os.userInfo();
console.log(user);
console.log(`Hello ${user.username}!`);

// using lodash
console.log(_.isString('Minh'));
console.log(_.isString(true));

// use nodemon (npm install nodemon -g)
var filteredArray = _.uniq(['Andrew', 'Minh','Soi', 1,2,3,1,2,3,'Andrew']);

console.log(filteredArray);
