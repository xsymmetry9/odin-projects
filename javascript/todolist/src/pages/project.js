// import { isToday, isAfter, format} from 'date-fns';
// import Projecto from "./components/Project.js"

// const List = (title, description) => {

//     var tasks = [];
//     var notes = [];

//     return {title, description, tasks, notes}
// }

// var deleteProject = (pName) => {
//     localStorage.removeItem(pName);
// }

// var addAll = () =>{

//     for(let i = 0; i < localStorage.length; i++)
//     {
//         var obj = localStorage.key(i);
//         let parsedItem = localStorage.getItem(obj);

//         var project = (JSON.parse(parsedItem));
//         console.log(project.description);
//     }

// }

// var Project = (item) =>{
//     var object = item;

//     var write = () =>{
//         return object;
//     }
//     var addProject = () =>{
//         localStorage.setItem(object.title.toLowerCase(), JSON.stringify(
//             List(object.title, object.description)));
//     }

//     var getAllProjects = () =>{
//         var projects = [];

//         for (let i = 0; i < localStorage.length; i ++)
//         {

//             var key = localStorage.key(i);
//             var project = window.localStorage.getItem(key);
//             projects.push(JSON.parse(project));
//         }
//         return projects;
//     }
//     var getObject = () =>{

//         var projects = getAllProjects();
//         var obj = {};
//         projects.forEach(project =>
//             {
//                 if (project.title.toLowerCase() ==  object.title){
//                     obj =  project;
//                 }
//                 else{
//                     return "There is an error";
//                 }
//             });
//         return obj
//     };
//     var addNote = () =>{
//         var Note = (id, item) =>{
//             return {id, item}
//         }
//         var obj =  getObject();

//         const note = Note(object.id, object.note);

//         obj.notes.push(note);
//         var toStringify = JSON.stringify(obj);
//         localStorage.setItem(obj.title, toStringify);
//     }

//     var addTask = () =>{
//         var Task = (title, id, todo, date) => 
//         {
//             const isFalse = false;

//             return{title, id, todo, date, isFalse}
//         }
//         var obj = getObject();
//         obj.tasks.push(Task(object.title, object.id, object.todo, format(new Date(object.date), "MM/dd/yyyy")));
//         var toStringify = JSON.stringify(obj);
//         localStorage.setItem(obj.title, toStringify);
//     }
//     const getAllNotes = () =>{
//         const projects = getAllProjects();
//         let arr = [];
//         if(projects.length >=1 )
//         {
//             projects.forEach(project=>{
//                 let tasks =project.notes;
//                 tasks.forEach(item =>{
//                     arr.push(item);
//                 });
//             });
//             return arr;
//         }
//         else{
//             return false;
//         }
//     }

//     //Creates a function that gets all tasks
//     const getAllTasks = () => {
//         const projects = getAllProjects();
//         let arr = [];
//         if (projects.length >= 1)
//         {
//             projects.forEach(project =>{
//                 let tasks = project.tasks;
//                 tasks.forEach(item =>{
//                     arr.push(item);
//                 })
//             });
//             return arr;
//         }
//         else
//         {
//             return false;
//         }

//     }

//     const filterTask = (name) =>{
//         const tasks = getAllTasks();

//         if(name =="inbox")
//         {
//             return tasks;
//         }
//         else if(name == "today")
//         {
//            return tasks.filter(item => isToday(new Date(item.date)));
//         }
//         else if(name == "upcoming")
//         {
//             return tasks.filter(item => isAfter(new Date(item.date), new Date()));
//         }

//     }

//     return {addProject,
//             getAllProjects, 
//             getObject, 
//             write,
//             addNote,
//             addTask,
//             getAllTasks,
//             getAllNotes,
//             filterTask};
// }

// var getProjectName = () =>
// {
//     var projects = [];
//         for(let i = 0; i < localStorage.length; i++)
//     {
//         projects.push(localStorage.key(i));
//     }
//     return projects;
// }

// var printProjects = () =>{
//     var projects = [];

//     for (let i = 0; i < localStorage.length; i ++)
//     {
//         var key = localStorage.key(i);
//         var project = window.localStorage.getItem(key);
//         projects.push(JSON.parse(project));
//     }
//     return projects;
// }

// export {
//     addAll,
//     deleteProject, 
//     getProjectName,
//     printProjects,
//     Project}         
