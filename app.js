const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

/**********************************************
 * Write and Append.

const fs = require('fs') 

// over-write into a file OR creating a new file
fs.writeFileSync('notes.txt', 'My name is Pallavi')

//appending some text in an existing file
fs.appendFileSync('notes.txt', '. I am 20 years old')
*/


/****************************************************
 * Importing files
 
//importing a variable form utils.js file
const name = require('./utils.js')

//const name = 'Pallavi'
console.log(name)

//impoting a function from utils.js
const add = require('./utils.js')

const sum = add(4, -2)
console.log(sum)


const getNotes = require('./notes.js')

const string = getNotes( )
console.log(string)
*/

/****************************************
 * IMPORTING VALIDATOR
 
const validator = require('validator')

//it checks the validity of an email 
//checks if such email exists or not if exist then return ture else false
console.log(validator.isEmail('pallavi@gmail.com'))
//checks if URL is valid or not 
console.log(validator.isURL('https:/mead.io'))
*/



/*************************************
 * IMPORTING CHALK

const chalk = require('chalk')

const message = chalk.green.bgWhite.inverse.underline('Success!...')
console.log(message)

const error = chalk.bold.red;
const warning = chalk.keyword('orange');
 
console.log(error('Error!'));
console.log(warning('Warning!'));
*/

//console.log(process.argv)
//console.log(process.argv[2])

//const command = process.argv[2]

// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }

//const yargs = require('yargs')

//Customise yargs version
yargs.version('1.1.0')

//Create a command 
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        // console.log('Title : ' + argv.title)
        // console.log('Body: ' + argv.body)
        notes.addNote(argv.title, argv.body)
    }

})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.removeNote(argv.title)
    }

})

//Create list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function(argv) {
        notes.listNotes()
    }

})

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        notes.readNotes(argv.title)
    }

})

//console.log(yargs.argv)
yargs.parse()


