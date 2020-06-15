// const validator = require('validator');
const yargs = require('yargs')
const chalk = require('chalk');
const getNotes = require("./notes.js")

//Customize Yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: "add",
    describe: "add a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Title: ', argv.title)
        console.log('Body: ', argv.body)
    }
})
//Create remove command
yargs.command({
    command: "remove",
    describe: "remove a note",
    handler: function () {
        console.log("Removing the note!")
    }
})
//Create the list command
yargs.command({
    command: "list",
    describe: "list your notes",
    handler: function () {
        console.log("listing out all notes!")
    }
})
//Create the read command
yargs.command({
    command: "read",
    describe: "read a note",
    handler: function () {
        console.log("reading a note!")
    }
})
//add, remove, read, list notes

yargs.parse()


