export default class Project {
    constructor(name, description){
        this.name = name;
        this.description = description;
        this.tasks = [];
        this.notes =[];
    }
    getName(){
        return this.name;
    }
    getDescription(){
        return this.description;
    }
    setTasks(tasks){
        return this.tasks = tasks;
    }
    setNotes(notes){
        return this.notes = notes;
    }
    getNotes()
    {
        return this.notes;
    }
    getTasks()
    {
        return this.tasks;
    }
}