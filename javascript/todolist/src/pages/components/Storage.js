import Project from "./Project"
import Todolist from "./Todolist"
import Note from "./Note"
import Task from "./Task"

export default class Storage {
    static saveTodoList(data) {
        localStorage.setItem("TodoList", JSON.stringify(data));
    }

    static getTodoList(){
        const todolist = Object.assign(
            new Todolist(),
            JSON.parse(localStorage.getItem("TodoList"))
            );
            todolist.setProjects(
                todolist.getProjects().
                map((project) => Object.assign(new Project(), project)));
            
            todolist.getProjects()
            .forEach((project) =>{
                project.setNotes(
                    project.getNotes()
                    .map((note) => Object.assign(new Note(), note)));
            });

            todolist.getProjects()
            .forEach((project) =>{
                project.setTasks(
                    project.getTasks()
                    .map((task) => Object.assign(new Task(), task)))
            }); 
        
        return todolist;

    }
    static remove(name){
        const todolist =  this.getTodoList();
        todolist.remove(name);
        this.saveTodoList(todolist);
        location.reload();
    }
    static addProject(_name, _descr){
        const getList = this.getTodoList();
        getList.add(_name, _descr);
        this.saveTodoList(getList);
    }
    static readProject(name){
        const getList = this.getTodoList();
        let a = getList.getProject(name);
        // a.getNotes().push("hello");
        return a;
        // console.log(a);
    }

    static addNote(name, title){
        const getList = this.getTodoList();
            getList.getProject(title)
            .getNotes()
            .push(new Note(name));
        this.saveTodoList(getList);
    }

    static readNote(title, name){
        var obj;
        this.getTodoList().getProject(title.toLowerCase()).
        getNotes()
        .forEach((note) =>{
            if (note.getNote() === name)
            {
                obj = note;
            }
        });
        return obj;
    }

    static deleteNote(name, title){
        let i;
        this.getTodoList().getProject(title).
        getNotes()
        .forEach((item, index) =>{
            if(item.name == name){
                i = index;
            }
        });
        const newList = this.getTodoList();
        newList.getProject(title).getNotes().splice(i,1);
        this.saveTodoList(newList);
    }

    static addTask(name, date, title)
    {
        let newList = this.getTodoList();
            newList.getProject(title)
            .getTasks()
            .push(new Task(name, date));
        
        this.saveTodoList(newList);
    }

    static readTask(title, name){
        var getTask = {}
        this.getTodoList().getProject(title.toLowerCase())
        .getTasks()
        .forEach((task) =>{
            if(task.getName() === name)
            {
                getTask = task;
            }
        })
        return getTask;
    }
    static deleteTask(name, title){
        let i;
        this.getTodoList().getProject(title).
        getTasks()
        .forEach((task, index) =>{
            if(task.getName() === name){
                i = index;
            }
        });

        const newList = this.getTodoList();
        newList.getProject(title).getTasks().splice(i,1);

        this.saveTodoList(newList);     
    }
    static editTask(name, newName, date, title){
        let newList = this.getTodoList();
        newList.getProject(title)
        .getTasks()
        .forEach((task) =>{
            if(task.getName() === name)
            {
                task.setName(newName);
                task.setDate(date);
                task.setStatus(false);
            }
        });
        this.saveTodoList(newList);
    }

    static toggleStatus(name, title){
        let newList = this.getTodoList();
        newList.getProject(title).
        getTasks()
        .forEach((task) =>{
            if(task.getName() === name){
                if(!task.getStatus()){
                    task.setStatus(true);
                }
                else{
                    task.setStatus(false);
                }
            }
        });
        this.saveTodoList(newList);
    }

}