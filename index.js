function writeCards(name, event){
    for (let a = 0; a < name.length; a++){
        console.log(`Thank you ${name[a]} for the ${event} gift!`)
    }
    return name,event
}

writeCards(["Tommy", "James", "Kenisha"], "birthday")