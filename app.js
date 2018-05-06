// Starting
console.log('Starting app.js');

const fs = require('fs');
// third party module
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

// access command line attributes
const argv = yargs.argv;
var command = process.argv[2];
console.log('Yargs', argv);
console.log(process.argv);

if(command === 'add'){
    console.log('Adding new notes');
    notes.addNote(argv.title, argv.body);
} else if(command === 'list'){
    //console.log('Listing all notes');        
    notes.getAll();        
} else if(command === 'remove'){
    //console.log('Remove note');    
    notes.removeNote(argv.title);    
} else if(command === 'read'){
    //console.log('Reading note');
    notes.getNote(argv.title);
} else {
    console.log('Not recognize');
}

