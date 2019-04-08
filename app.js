const chalk = require('chalk');
const notes  = require('./notes.js');
const yargs = require('yargs');

//add remove read list notes

/* ADD*/
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption : true,
            type :'string'
        },
        body: {
            describe: 'Note Body',
            demandOption : true,
            type :'string'
        }
    },
    handler (argv){
        notes.addNote(argv.title, argv.body) 
    }
})

/*REMOVE*/
yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.removeNote(argv.title)
    }
})

/* LIST*/
yargs.command({
    command: 'list',
    describe: 'remove a new note',
    builder: {
        title:{
            describe: 'List notes'
        }
    },
    handler (argv){
        notes.listNotes()
    }
})


/* READ*/
yargs.command({
    command: 'read',
    describe: 'remove a new note',
    builder: {
        title:{
            describe: 'Read notes',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv){
        notes.readNotes(argv.title)
    }
})


yargs.parse()