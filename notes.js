const fs = require('fs');
const chalk = require('chalk');
const getNotes = () => {
    return "Your Notes"
}

const addNote  =(title, body)  => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note)=> note.title === title)
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green("New Note added of title:" +  title));
    }else{
        console.log(chalk.red('note title taken'));
    }
    
}

const readNotes = (title) =>{
    const notes = loadNotes()
    const noteFind = notes.find((note)=> note.title ===title)
    if(noteFind){
        console.log(chalk.magenta.italic(title)+ ' : ' + noteFind.body);
    }else{
        console.log(chalk.red(`No note found with title: ${title}`));
    }
}
    

const removeNote  = (title) =>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=> note.title  !== title)
    if(notes.length > notesToKeep.length){
        console.log(chalk.green("Removed note of title: " + title));
    }else{
        console.log(chalk.red("No note found of title: " + title));
    }
    saveNotes(notesToKeep)
    
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes =() =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

const listNotes = () =>{
    console.log(chalk.blue(' /~ Your notes ~/ '));
    const notes = loadNotes()
    notes.forEach((note)=>{
        console.log(note.title);
    })
}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}