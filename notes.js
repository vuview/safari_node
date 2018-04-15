console.log('Starting notes');
const _ = require('lodash');

/*
var removeNote = function(title){
    console.log(`Remove ${title} from list`);
}
*/
const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {
        title,
        body       
    };

    // fetch the data from existing notes-data.json file
    try{
        var noteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(noteString);      
    }
    catch (e){

    }
    /*
    var duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });
    */

    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
    else{
        console.log(`Trying to add duplicate note. Title: ${title} `);
    }
};

var getAll = () => {
    console.log('Getting all notes');
    var noteString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(noteString);  
    _.forEach(notes, (note) => {
        console.log(`${note.title} :: ${note.body}`);
    });
}

var removeNote = (title) => {
    console.log(`Remove ${title} from list`);        
}

var getNote = (title) => {
    console.log(`Reading ${title}`);
    try{
        var noteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(noteString);      
    }
    catch (e){

    }

    var foundNote = notes.filter( note => note.title===title);
    
    if(foundNote.length>0){
        console.log(`body: ${foundNote[0].body}`);
    }
    else{
        console.log('Not found');
    }
}


module.exports = {
    addNote,
    getAll,
    removeNote,
    getNote
};