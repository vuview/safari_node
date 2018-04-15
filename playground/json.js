/*
var obj = {
    name: 'Andrew'
};
var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);


var personString = '{"name" : "Andrew","age" : 25 }';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);

var person = { name : "Andrew", 
               age : 25
            };
console.log(typeof person);
console.log(person);
*/

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
noteObj = JSON.parse(noteString);

console.log(noteObj);
console.log(`Getting ${noteObj.title} - read ${noteObj.body}`);







