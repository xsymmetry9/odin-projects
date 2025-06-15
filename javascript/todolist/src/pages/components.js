// import { Project, deleteProject } from "./project.js";
// import trash from "../images/trash.png";
// import editImg from "../images/editing.png";
// import checkMark from "../images/check-mark.png";
// import {format} from "date-fns";

// const closeWindow = () => {
//     var closeWindow = document.querySelector('.add-project-window');
//     closeWindow.remove();
// }

// const closePage = () =>{
//     var closeWindow = document.getElementById("intro-page");
//     closeWindow.remove();
// }

// const closeProjectPage = () =>{
//     const closeWindow = document.querySelector(".stuff-goes-here");
//     closeWindow.remove();
// }
// const closeForm = (id) =>{
//     const cancelContainer = document.getElementById(`project-${id}-input`);
//     cancelContainer.remove();
// }

// const saveLocalStorage = (obj) =>{
//     const toStringify = JSON.stringify(obj);
//     localStorage.setItem(obj.title, toStringify);
// }

// const createNoteFormUI = () =>{
//     var createList = document.createElement("form");
//     createList.classList.add("note-item-input");
//     createList.setAttribute("id","project-notes-input");

//     const createInputName = document.createElement("textarea");
//     createInputName.classList.add("todo-note-input");
//     createInputName.setAttribute("name","description")
//     createInputName.setAttribute("required", "");

//     var createBtnContainer = document.createElement("div");
//     createBtnContainer.classList.add("todo-nav-container");

//     var createSubmitBtn = document.createElement("button");
//     createSubmitBtn.classList.add("todo-submit-btn");
//     createSubmitBtn.textContent = "Submit";
//     //Create and add note to obj and html
//     createSubmitBtn.addEventListener("click", (event)=>{
//         const title = document.querySelector(".project-title").innerHTML.toLowerCase();
//         const note = document.querySelector(".todo-note-input").value;
//         const getId = Math.floor(Math.random() * 100);

//         //Add this to the object
//         (Project({"title": title, "id": getId, "note": note}).addNote()); //adds notes

//         const getNotes = Project().getAllNotes();


//         let readObject;
//         getNotes.forEach(objNote =>{
//             if (objNote.id == getId){
//                 readObject =  objNote;
//             } 
//         });


//         var getContainer = document.getElementById("project-notes");
//         getContainer.appendChild(Plot().printNote(readObject));
//         // getContainer.appendChild(printNote({"title": title, "id": getId, "item": note}));
//         closeForm("notes");

//     });

//     var createCancelBtn = document.createElement("button");
//     createCancelBtn.classList.add("todo-cancel");

//     createCancelBtn.textContent= "Cancel";
//     createCancelBtn.onclick = () => {closeForm("notes")}

//     createBtnContainer.appendChild(createSubmitBtn);
//     createBtnContainer.appendChild(createCancelBtn);


//     createList.appendChild(createInputName);
//     createList.appendChild(createBtnContainer);

//     return createList;                
// }
// const createToDoFormUI = () =>{
//     const createForm = () =>{
    
//         const createList = document.createElement("form");
//         createList.classList.add("task-item-input");
//         createList.setAttribute("id", "project-tasks-input");

//         const createInputName = document.createElement("input");
//         createInputName.classList.add("todo-input");
//         createInputName.setAttribute("type", "text");
//         createInputName.setAttribute("name", "todo");
//         createInputName.setAttribute("required","");

//         const createDate = document.createElement("input");
//         createDate.classList.add("todo-input-date");
//         createDate.setAttribute("type", "date");
//         createDate.setAttribute("name", "date");
//         createDate.setAttribute("id", "myDate");
//         createDate.setAttribute("value", "05-13-2023");
//         createDate.setAttribute("required", "");

//         const createBtnContainer = document.createElement("div");
//         createBtnContainer.classList.add("todo-nav-container");
//         const createSubmitBtn = document.createElement("button");
//         createSubmitBtn.classList.add("todo-submit-btn");
//         createSubmitBtn.textContent = "Submit";
//         createSubmitBtn.onclick = ()=>{//read
//             //Adds object to localStorage
//             const _title = document.querySelector(".project-title").innerHTML.toLowerCase();
//             const _taskItem =  document.querySelector(".todo-input").value
//             const _taskDate = document.querySelector(".todo-input-date").value;
//             const getId =  Math.floor(Math.random() * 100);

//             Project({
//                 "title":_title,
//                 "id": getId,
//                 "todo": _taskItem, 
//                 "date": _taskDate}).
//                 addTask();
//                 closeForm("tasks");
//                 const getTaskContainer = document.getElementById("project-tasks");
//                 getTaskContainer.appendChild(Plot().printTask({
//                     "title":_title, 
//                     "id": getId,
//                     "todo": _taskItem, 
//                     "date": format(new Date(_taskDate), "MM/dd/yyyy")}));
//                 //print task

//         };

//         var createCancelBtn = document.createElement("button");
//         createCancelBtn.classList.add("todo-cancel");
//         createCancelBtn.textContent= "Cancel";
//         createCancelBtn.onclick = ()=>{closeForm("tasks")}

//         const arr = [createInputName, createDate, createBtnContainer, createSubmitBtn, createCancelBtn];
//         arr.forEach(item =>{
//             createList.appendChild(item);
//         });
//         return createList;
//     }
//    return createForm();    

// }

// const addProjectWindow = () =>{
//     var body = document.querySelector(".body");

//     var createAddProjectContainer = document.createElement("div");
//     createAddProjectContainer.classList.add("add-project-window");

//     createAddProjectContainer.innerHTML = 
//     `
//     <form class="add-project">
//         <button class="close-btn">x</button>
//         <h2>Add a project</h2>
//         <div class="form-item">
//             <label class="form-items" for="pname" required>Project Name</label>
//             <input type="text" id="pname" name="pname" placeholder ="property Investment">
//         </div>
//         <div class="form-item">
//             <label class="form-items" for="pdesc">Description</label>
//             <textarea name="pdesc" id="pdesc" maxlength="200" placeholder="Fund some money to buy a new house"></textarea>
//         </div>
//         <button class="add-project-submit-btn">Submit</button>

//     </form>`;

//     body.appendChild(createAddProjectContainer);
//     ProjectButtons().close();
//     ProjectButtons().submit();
// }
// const ProjectButtons = () => {
//     const close = () =>{
//         const closeProjectFormButton = document.querySelector(".close-btn");
//         closeProjectFormButton.addEventListener(("click"), closeWindow);
//     }
//     const submit = () =>{
//         const submitProjectFormButton = document.querySelector(".add-project-submit-btn");
//         submitProjectFormButton.addEventListener("click", ()=>{
//             const title = document.getElementById("pname").value.toLowerCase();
//             const description = document.getElementById("pdesc").value;
//             //1. adds item to localStorage
//             if(title !== "") //checks if it's empty
//             {
//                 Project({title, description}).addProject();
//                 closeWindow(); //Closes add-project-form window

//                      //2. get items from localStorage and plots them
//                 const getProjectNode = document.getElementById("projects");
//                 getProjectNode.appendChild(plotNewAddedProject(title));

//                 //creates a function that adds new project
//                 const getContainer = document.querySelector(".body");
//                 const getChildren = Array.from(getContainer.children);
                            
//                     if (getChildren.length >= 1)
//                         {
//                             getChildren.forEach(item => item.getAttribute("id") == "intro-page" ? closePage() : closeProjectPage());
//                             getContainer.appendChild(Plot().printProjectDisplay(Project({title}).getObject()));
//                         }
//                     else{
//                         getContainer.appendChild(Plot().printProjectDisplay(Project({title}).getObject()));
//                         }
//             }
//             else{
//                 closeWindow();
//                 alert("Missing title");
//             }
//         });
//     }
//     return {close, submit}
// }
// const Plot = () =>{

//     const printIntro = () =>{

//         // const __createButton = () =>{
//         //     const createProjectButton = document.createElement("button");
//         //     createProjectButton.classList.add("project-btn-primary");
//         //     createProjectButton.setAttribute("id","add-project-btn");
//         //     createProjectButton.textContent = `Create a project`;
//         //     createProjectButton.addEventListener(("click"), () =>{
//         //         addProjectWindow();
//         //     });
//         //     return createProjectButton;
//         // }
//         const introContainer = document.createElement("div");
//         introContainer.setAttribute("id", "intro-page");
//         introContainer.innerHTML = `
//         <div class="intro-container">
//             <h1 class="title">Welcome to "Do it"</h1>
//             <p>A solution to help you effortlessly manage your tasks and stay organized like never before.</p>
//         </div>
//         <button class="project-btn-primary" id="add-project-btn">Create a project</button>`
        
//         // introContainer.appendChild(__createButton());

//         return introContainer;
//     }
//     const printProjectDisplay = (object) => {
//         const __body = document.createElement("div");
//         __body.classList.add("stuff-goes-here"); //This is should be deleted 

//         //Prints header
//         const createContentHeader = (projectObj) =>{
//             var __container = document.createElement("div");
//             __container.classList.add("project-header");
    
//             var __title = document.createElement("h2");
//             __title.classList.add("project-title");
//             __title.textContent = projectObj.title; //Prints title
//             var __description = document.createElement("p"); //Project.description goes here
//             __description.textContent = projectObj.description //Prints description
//             __description.classList.add("project-description");

//             __container.appendChild(__title);
//             __container.appendChild(__description);
//             return __container;
//         }

//         // Note Section 
//         const createNoteSection = () =>{
//             const __noteBody = document.createElement("div");
//             __noteBody.classList.add("project-task");
//             __noteBody.setAttribute("id", "notes");

//             const createHeader =() =>{
//                 const container = document.createElement("div");
//                 container.classList.add("note-container");

//                 const title = document.createElement("h3");
//                 title.textContent = "Notes";
//                 title.classList.add("note-title");

//                 const button = document.createElement("button");
//                 button.classList.add("task-toggle-btn");
//                 button.textContent = "+";
//                 button.addEventListener('click', () =>{
//                     //notes
//                     var container = document.getElementById("notes");
                    
//                     const getChildren = Array.from(container.children);
//                     let isThereAForm = false;
//                     getChildren.forEach(item =>{
//                         if(item.id === "project-notes-input")
//                         {
//                             isThereAForm = true;
//                         }
//                     });

//                     !isThereAForm ? container.appendChild(createNoteFormUI()) : closeForm("notes");

//                 });
//                 container.appendChild(title);
//                 container.appendChild(button);
//                 return container;
//             }
          
//             const createBody = () => {

//                 const container = document.createElement("ul");
//                 container.classList.add("note-list");
//                 container.setAttribute("id", "project-notes");

//                 object.notes.length ? object.notes.forEach(
//                     item =>{container.appendChild(printNote(item))}) : 
//                     console.log("You can add a note");

//                 return container;
//             }
//             __noteBody.appendChild(createHeader(object));
//             __noteBody.appendChild(createBody());

//             return __noteBody;
//         }
   
// //Task Section ----------------------------------------------------------------
//         const createTaskSection = () =>{

//             const __taskBody = document.createElement("div");
//             __taskBody.classList.add("project-task");
//             __taskBody.setAttribute("id", "tasks");

//             const createHeader = () => {
//                 const container = document.createElement("div");
//                 container.classList.add("task-container");

//                 const title = document.createElement("h3");
//                 title.textContent = "My todo list";
//                 title.classList.add("task-title");

//                 const button = document.createElement("button");
//                 button.classList.add("task-toggle-btn");
//                 button.setAttribute("id", "task-btn");
//                 button.textContent = "+";

//                 button.addEventListener("click", () =>{
//                     const container = document.getElementById("tasks");
                    
//                     const getChildren = Array.from(container.children);

//                     let isThereForm = false;
//                     getChildren.forEach(item =>{
//                         if(item.id == "project-tasks-input")
//                         {
//                             isThereForm = true;
//                         }
//                     });
//                     !isThereForm ? container.appendChild(createToDoFormUI()) : closeForm("tasks");
//                 });

//                 container.appendChild(title);
//                 container.appendChild(button);
//                 return container;
//             }
//             const createBody = () =>{
//                 const container = document.createElement("ul");
//                 container.classList.add("task-list");
//                 container.setAttribute("id", "project-tasks");

//                 object.tasks.length ? object.tasks.forEach(
//                     item => { container.appendChild(printTask(item))}) : 
//                     console.log("createBody() has an error");

//                 return container;
//             }
//             __taskBody.appendChild(createHeader());
//             __taskBody.appendChild(createBody());
//             return __taskBody;
//         }

//         __body.appendChild(createContentHeader(object));
//         __body.appendChild(createNoteSection());
//         __body.appendChild(createTaskSection());
//         return __body;
//     }
//     const printNote = (object)=>
//     {
//         const obj = object;
//         const createContainer = document.createElement("li");
//         createContainer.setAttribute("id", `note-${obj.id}`)
//         createContainer.classList.add("note-item");
//         const createText = document.createElement("p");
//         createText.textContent = obj.item;

//         const createDeleteBtn = document.createElement("button");
//         createDeleteBtn.classList.add("task-item-btn");
//         createDeleteBtn.setAttribute("id",`trash-${obj.id}`);
//         createDeleteBtn.addEventListener(("click"), event =>{
//             let getTrashId = event.currentTarget.id;
//             const _id = getTrashId.split("-")[1];

//             let notes = Project().getAllNotes()
//             notes.forEach(_object =>{
//                 if (_object.id == _id)
//                 {
//                     // console.log(`I found you.  Your id is ${_object.id}`);

//                     const removeFromWebsite = () =>{
//                         const getContainer = document.getElementById(`note-${_object.id}`);
//                         getContainer.remove();
//                     }
//                     const removeFromStorage = () =>{
//                         const _title = document.querySelector(".project-title").innerHTML;
//                         const _getObject = (Project({"title": _title}).getObject());
//                         const arr = _getObject.notes;

//                         _getObject.notes = arr.filter((node) => {return node.id != _id});

//                         saveLocalStorage(_getObject); //saves all notes to storage
//                     }

//                     removeFromWebsite();
//                     removeFromStorage();
//                 }
//             })
//         })

//         const deleteImg = new Image();
//         deleteImg.src = trash;
//         createDeleteBtn.appendChild(deleteImg);
        
//         createContainer.appendChild(createText);
//         createContainer.appendChild(createDeleteBtn);

//         return createContainer;
//     }
//     const printTask = (item) =>{
//         const object = item; //this is an object
//         const createContainer = document.createElement("li");
//         createContainer.classList.add("task-item");
//         createContainer.setAttribute("id", `${object.title}-${object.id}`); //Creates an id according to obj id

//         const formattedDate = (date) =>{
//             return format(new Date(date), 'MM/dd/yyyy');
//         }

//         const createLeft =() =>{
//             var createLeftContainer = document.createElement("div");
//             createLeftContainer.classList.add("task-item-container");
//             //Creates a check button if finished
//             var checkBoxBtn = document.createElement("button");
//             checkBoxBtn.classList.add("checkbox");
//             checkBoxBtn.setAttribute("id", `checkbox-${object.id}`);

//             //Plots check for each item that is completed ------------------------------------
//             const obj = Project({"title": object.title}).getObject();
//             const arr = obj.tasks;
//             arr.forEach(item =>{
//                 if (item.id == object.id)
//                 {
//                     if(item.isFalse == true){
//                         const checkImg = new Image();
//                         checkImg.src = checkMark;
//                         checkBoxBtn.appendChild(checkImg);
//                     }
//                 }
//             });
//             //---------------------------------------------------------------------------------------
//             checkBoxBtn.addEventListener("click", (event)=> {

//                 const getId = event.currentTarget.id.split("-")[1];
              
//                 const getTitle = document.querySelector(".project-title").innerHTML;
//                 const obj = Project({"title": getTitle}).getObject();

//                 console.log(event.currentTarget);
//                 // --------------------This will change the object from true to false and false to true -------
//                 const arr = obj.tasks;
//                 arr.forEach(item =>{
//                     if (item.id == getId)
//                     {
//                         if(!item.isFalse){
//                             item.isFalse = true;
//                             ///Draws a check if the item is checked
//                             const container = event.currentTarget;
//                             const checkImg = new Image();
//                             checkImg.src = checkMark;
//                             container.appendChild(checkImg);
//                         }
//                         else{
//                             item.isFalse = false;

//                             //Removes the check if the item is clicked and checked
//                             const container = event.currentTarget;
//                             const getChild = container.querySelector("img");
//                             getChild.remove();
//                         }
//                     }
//                 });
//                obj.tasks = arr; //saves the new array tasks to object.tasks
//                saveLocalStorage(obj);

//                // ------------------------------------------------------------------------------------------------

//             });
//             var createText = document.createElement("span");
//             createText.classList.add("task-item-title");
//             createText.textContent = object.todo;

//             createLeftContainer.appendChild(checkBoxBtn);
//             createLeftContainer.appendChild(createText);

//             return createLeftContainer;
//         }
// //Prints date, edits, and delete
//         const createRight = () =>{
//             const createRightContainer = document.createElement("div");
//             createRightContainer.classList.add("task-item-container", "task-item-toggle");
//             const plotDate = document.createElement("p");
//             plotDate.textContent = formattedDate(object.date);

//             // ----------------------------------- Edit Section --------------------------------------
//             const createEditBtn = document.createElement("button");
//             createEditBtn.classList.add("task-item-btn");
//             createEditBtn.setAttribute("id",`edit-${object.id}`);
//             createEditBtn.addEventListener(("click"), (event) =>{

//                 const obj = Project({"title": object.title}).getObject();
//                 const arr = obj.tasks;
//                 arr.forEach(item =>{
//                     if(item.id == object.id){
//                         const getAllItems = document.querySelector(`#${object.title}-${object.id}`);
//                         const toArray = Array.from(getAllItems.children);
//                         toArray.forEach(item => item.style.display = "none");

//                         const createForm = () =>{

//                             const container = document.createElement("form");
//                             container.classList.add("task-item-input");
//                             container.setAttribute("id", "project-tasks-input");

//                             const createInput = document.createElement("input");
//                             createInput.classList.add("todo-input");
//                             createInput.setAttribute("type", "text");
//                             createInput.setAttribute("name", "todo");
//                             createInput.setAttribute("required", "");
//                             createInput.value = object.todo; //Already filled in case of edit

//                             container.appendChild(createInput);

//                             const createDate = document.createElement("input");
//                             createDate.classList.add("tod-input-date");
//                             createDate.setAttribute("type", "date");
//                             createDate.setAttribute("name", "date");
//                             createDate.setAttribute("id", "myDate");
//                             createDate.setAttribute("required", "");
                            
//                             const date = format(new Date(object.date), "yyyy-MM-dd");
//                             createDate.value = date;

//                             container.appendChild(createDate);

//                             const createBtnContainer = document.createElement("div");
//                             createBtnContainer.classList.add("todo-nav-container");

//                             const createSubmitBtn = document.createElement("button");
//                             createSubmitBtn.classList.add("todo-submit-btn");
//                             createSubmitBtn.textContent = "Submit";
//                             createSubmitBtn.addEventListener(("click"), event =>{
//                                 closeForm("tasks");

//                                 const getContainer = document.querySelector(`#${object.title}-${object.id}`);
//                                 const toArray = Array.from(getContainer.children);
//                                 toArray.forEach(item => item.style.display = "flex");

//                                 const obj = Project({"title": object.title}).getObject();
//                                 const getTasks = obj.tasks;
//                                 getTasks.forEach(item =>{
//                                     //Find the item
//                                     if(item.id === object.id)
//                                     {
//                                         if(item.todo !== createInput.value){
//                                             item.todo = createInput.value;
//                                             var getContainer = document.getElementById(`${object.title}-${object.id}`);
//                                             var getAChild = getContainer.querySelector(".task-item-title");
//                                             getAChild.innerHTML = createInput.value;
//                                             saveLocalStorage(obj);
                        
//                                         }
//                                         const getFormattedDate = formattedDate(createDate.value);
//                                         if(item.date !== getFormattedDate){
//                                             item.date = createDate.value;

//                                             var getContainer = document.getElementById(`${object.title}-${object.id}`);
//                                             var getAChild = getContainer.querySelector("p");
//                                             getAChild.innerHTML = formattedDate(createDate.value);
//                                             saveLocalStorage(obj);

//                                         }
    
//                                     }
//                                 });
                       
//                             });

//                             createBtnContainer.appendChild(createSubmitBtn);
//                             container.appendChild(createBtnContainer);

//                             var createCancelBtn = document.createElement("button");
//                             createCancelBtn.classList.add("todo-cancel");
//                             createCancelBtn.textContent= "Cancel";
//                             createCancelBtn.onclick = ()=>{
//                                 closeForm("tasks");

//                                 const getContainer = document.querySelector(`#${object.title}-${object.id}`);
//                                 const toArray = Array.from(getContainer.children);
//                                 toArray.forEach(item => item.style.display = "flex");

//                             }


//                             container.appendChild(createCancelBtn);
                            
//                             return container;
//                         }
//                         getAllItems.appendChild(createForm());



//                     }
//                 })
//             });
//             const editImgBtn = new Image();
//             editImgBtn.src = editImg;
//             createEditBtn.appendChild(editImgBtn);


//             //Creates a delete Button
//             const createDeleteBtn = document.createElement("button");
//             createDeleteBtn.classList.add("task-item-btn");
//             createDeleteBtn.setAttribute("id", `trash-${object.id}`); //change to id of object
//             createDeleteBtn.addEventListener("click", (event)=>{
//                 const getId = (event.currentTarget.id.split("-")[1]); //returns number id
//                 const getTitle = document.querySelector(".project-title").innerHTML;
//                 // console.log(getContainer);

//                 // ----------------------------To Delete a task from the page ------------------------------
//                 const getContainer = document.getElementById(`${getTitle}-${getId}`);
//                 getContainer.remove();

//                 const obj = Project({"title": getTitle}).getObject();

//                 //----------------------------- To Delete a task from LocalStorage ----------------------------
//                 const arr = obj.tasks;
//                 console.log(getId);
//                 let newArr = [];
//                 arr.forEach(item =>{
//                     if(item.id != getId){
//                         newArr.push(item);
//                     }
//                 });
//                 obj.tasks = newArr;
//                 saveLocalStorage(obj);
    
//                 //--------------------- End of delete a task -----------------------------------

//             });
//             const deleteBtnImg = new Image();
//             deleteBtnImg.src = trash;
//             createDeleteBtn.appendChild(deleteBtnImg);

//             createRightContainer.appendChild(plotDate);
//             createRightContainer.appendChild(createEditBtn);
//             createRightContainer.appendChild(createDeleteBtn);
//             return createRightContainer;
//         }

//         createContainer.appendChild(createLeft(object.todo));
//         createContainer.appendChild(createRight(object.date));

//         return createContainer;
//     }

//     return {
//     printIntro,
//     printNote, 
//     printTask,
//     printProjectDisplay
//     }
// }

// const plotNewAddedProject = (name) =>{
//     const item = document.createElement("li");
//     item.classList.add("project-list-item");
//     item.setAttribute("id", `${name.toLowerCase()}`);

//     const pTitle = () => {
//         const button = document.createElement("button");
//         button.classList.add("project-btn");
//         button.setAttribute("id", name.toLowerCase());
//         button.addEventListener("click", (event)=>{
//             closeProjectPage();
//             // -------------------------Display main body --------------------------------
//             const title = event.currentTarget.id; //gets title
//             const obj = (Project({title}).getObject());

//             const getBody = document.querySelector(".body");

//             getBody.appendChild(Plot().printProjectDisplay(obj));
            
//         });
//         const __ptitle = document.createElement("span");
//         __ptitle.textContent = name;
//         button.appendChild(__ptitle);
//         return button;
//     }
//     const pTrash = () => {
//         const button = document.createElement("button");
//         button.classList.add("project-trash-btn");

//         const __ptrash = new Image();
//         __ptrash.src = trash;
//         __ptrash.classList.add("project-trash");

//         button.appendChild(__ptrash);
//         button.onclick = function(){
       
//             var getContainer = document.getElementById(`${name.toLowerCase()}`);
//             getContainer.remove();
//             deleteProject(name);
//             let num = localStorage.length;
//             if (num === 0)
//             {
//                 closeProjectPage();
//                 const body = document.querySelector(".body");
//                 body.appendChild(Plot().printIntro());
//             }
//             else{
//                 closeProjectPage();

//                 let index = Project().getAllProjects().length - 1; //get all projects from localstorage
//                 var __body = document.querySelector(".body");
//                 let item = Project().getAllProjects()[index]; //first item
//                 __body.appendChild(Plot().printProjectDisplay(item));
//             }
//         }
//         return button;
//     }

//     item.appendChild(pTitle());
//     item.appendChild(pTrash());
//     return item;

// }

// const onLoad = (name) => {
//     const __body = document.createElement("div");
//     __body.classList.add("stuff-goes-here"); //This is should be deleted 

//     const obj = Project().filterTask(name);

//     const createContentHeader = (sectionName) =>{
//         var __container = document.createElement("div");
//         __container.classList.add("project-header");

//         var title = document.createElement("h2");
//         title.classList.add("project-title");
//         title.textContent = sectionName; //Project.title goes here

//         __container.appendChild(title);
//         return __container;
//     }

//     const createTable = () =>
//     {
//         var __container = document.createElement("div");
//         __container.classList.add("table-tasks");

//         const createRows =(obj) =>{
//             const task = obj;
//             const row = document.createElement("div");
//             row.classList.add("todo-even-columns")
    
//             const textContainer = () =>{
//                 const container = document.createElement("div");
//                 container.classList.add("todo-rows");

//                 const todoTitle = document.createElement("p");
//                 todoTitle.textContent = task.todo;
//                 todoTitle.classList.add("todo-title-text");

//                 const projectTitle = document.createElement("p");
//                 projectTitle.textContent = task.title;
//                 projectTitle.classList.add("project-title-text");

//                 [todoTitle, projectTitle].forEach(item =>{container.appendChild(item)});
//                 return container;
//             }

//             const checkBox = (isFalse) =>{
//                 var checkBoxBtn = document.createElement("button");
//                 checkBoxBtn.classList.add("checkbox");
//                 checkBoxBtn.addEventListener("click", (event)=> {
//                     alert("you have called me");
//                 });

//                 return checkBoxBtn;
//             }

//             [checkBox(task.isFalse), textContainer()].forEach(item =>{row.appendChild(item)});

//             return row;
            
//         }

//          obj.forEach(item =>{
//             __container.appendChild(createRows(item))
//          });
//          return __container;
//     }

//         __body.appendChild(createContentHeader(name));
//         __body.appendChild(createTable());
//         return __body;
//     }

    

// export {
//     Plot,
//     addProjectWindow,
//     plotNewAddedProject,
//     onLoad
// }