const fs = require('fs')
const chalk = require('chalk')


const addNote = (title, body) => {
    const notes = loadNotes()
    // //array filter to check if the title is already present(it checks the whole array from the start to end)
    // const duplicateNotes = notes.filter((note) => note.title === title)

    // if (duplicateNotes.length === 0) {
    //     notes.push({
    //         title: title,
    //         body: body
    //     })
    //     saveNotes(notes)
    //     console.log(notes)
    // } else {
    //     console.log('Note title taken!')
    // }

    //this function returns the 1st note that is repeted
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
             notes.push({
                 title: title,
                 body: body
             })
             saveNotes(notes)
             console.log(notes)
         } else {
             console.log('Note title taken!')
         }
    
}

const removeNote = (title) => {
    //reading existing notes
     const notes = loadNotes()
     //saving the notes in an array whose title is not the provided title to be deleted
     const toKeepNotes = notes.filter((note) => {
         return note.title !== title
     })
     
     //saving the non matched array back to the node.json file
     saveNotes(toKeepNotes)

     //showing message abt the note is deleted or not
    if (notes.length > toKeepNotes.length) {
        console.log(chalk.bgGreen('Note deleted successfully'))
    } else {
        console.log(chalk.bgRed('No note found!'))
    }
}

const listNotes = () => {
    const i = 0
    const notes = loadNotes()
    console.log(chalk.inverse('Your notes'))
     notes.forEach(function(note) {
         console.log(note.title)
     })
    
}

const readNotes = (title) => {
    const notes = loadNotes()
    const foundNote = notes.find((note) => note.title === title)
    if (foundNote) {
        console.log(chalk.bold.inverse(foundNote.title))
        console.log(foundNote.body)
    } else {
        console.log(chalk.bgRed('Note not found'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
    
}

//for exporting single argument
//module.exports = getNotes

//for exporting more than 1 arg, we use an object instead of a single function
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}


