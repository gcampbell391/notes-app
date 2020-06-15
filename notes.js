const fs = require("fs")
const chalk = require('chalk');

//Function to add a note
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter(note => note.title === title)
    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

//Function to remove a note
const removeNote = (title) => {
    const notes = loadNotes()
    const updatedNotes = notes.filter(note => note.title !== title)
    if (updatedNotes.length === notes.length) {
        console.log(chalk.red.inverse("Title not found!"))
    }
    else {
        saveNotes(updatedNotes)
        console.log(chalk.green.inverse("Note was deleted!"))
    }
}

//Function to list all notes
const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.greenBright.bold("Your Notes"))
    notes.forEach(note => console.log(chalk.redBright(note.title)))
}

//Function to read a specific note
const readNote = (title) => {
    const notes = loadNotes()
    const selectedNote = notes.find(note => note.title === title)
    if (!selectedNote) {
        console.log(chalk.redBright("Title not found!"))
    }
    else {
        console.log(chalk.greenBright(selectedNote.title))
        console.log(chalk.yellowBright(selectedNote.body))
    }
}

//Helper to save notes
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}


//Helper to load notes
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}