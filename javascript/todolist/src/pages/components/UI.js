import Icons from "./Icons";
import Storage from "./Storage";
import {format} from "date-fns"

export default class UI {
    static loadPage = () =>{
        this.loadHeader();
        this.loadSideBar();
        this.loadMainContent();
        this.loadFooter();
        this.sideBarButtons();

    }
    static loadIcons = () =>{
        this.getContentContainer.appendChild(Icons.getImage("calendar"));
    }
    static loadHeader = () =>{
        const container = document.getElementById("content");

        const plot = document.createElement("header");

        plot.innerHTML = `
        <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
            <img src =${Icons.getImage("menu")} id="burger-menu" alt="menu" aria-hidden="true">
            <img src =${Icons.getImage("close")} id="close-menu" alt="close" aria-hidden="false">
        </button>
        `;
        container.appendChild(plot);

    }
    static navBar = () =>{
        const container = document.getElementById("content");

        const plot = document.createElement("div");
        plot.classList.add("side-bar", "primary-navigation");
        plot.innerHTML = `
        <h1 class= "title">Do it</h1>
        <nav class="nav-bar-menu" id = "navigation-bar">
            <ul class="nav-list" aria-label="primary" role="list">
                <li id="inbox"><a class="nav-item">
                        <img src = ${Icons.getImage("inbox")} class="nav-item-icon" alt= "Download icons created by Kiranshastry">
                        <span>Inbox</span>
                    </a>
                </li>
                <li id="today"><a class="nav-item">
                        <img src = "${Icons.getImage("today")}" class="nav-item-icon" alt= "Download icons created by Kiranshastry">
                        <span>Today</span>
                    </a>
                </li>        
                <li id="upcoming"><a class="nav-item">
                        <img src = ${Icons.getImage("upcoming")} class="nav-item-icon" alt= "Download icons created by Kiranshastry">
                        <span>Upcoming</span>
                    </a>
                </li>
            </ul>
        </nav>`;
        container.appendChild(plot);
    }
    static navProjectBar = () =>{
        const container = document.getElementById("navigation-bar");
        
        const plotProjectNav = document.createElement("div");
        plotProjectNav.classList.add("project-container");
        plotProjectNav.innerHTML =
        `<div class="project-nav-container">
            <a class="project-nav-title">Projects</a>
            <button class="add-project-btn" id ="add-project-btn">+</button>
        </div>
        <ul class="project-nav-list" id="projects">
        </ul>
        `;
        container.appendChild(plotProjectNav);
    }
    static toggleMobileNavBar = () =>{
        const navBar = document.querySelector(".side-bar");
        const open = document.querySelector("#burger-menu");
        const close = document.querySelector("#close-menu");
        if(navBar.getAttribute("data-visible") === null)
        {
            navBar.toggleAttribute("data-visible");
            close.setAttribute("aria-hidden", "true");
            open.setAttribute("aria-hidden", "false");
        }
        else if(navBar.getAttribute("data-visible") !== null)
        {
            navBar.toggleAttribute("data-visible");
            close.setAttribute("aria-hidden", "false");
            open.setAttribute("aria-hidden", "true");
        }
    }
    static sideBarButtons = () =>{
        const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
        mobileNavToggle.addEventListener(("click"), this.toggleMobileNavBar);

        const navItems = Array.from(document.querySelector(".nav-list").children);
        navItems.forEach((item) =>{
            item.addEventListener("click", (event) =>{
                const getBody = document.querySelector(".body");
                this.removePage();
            
                const page = document.createElement("div");
                page.innerHTML = `
                    <h2 class="page-title">${event.currentTarget.id.charAt(0).toUpperCase() + event.currentTarget.id.slice(1)}</h2>

                    <div class="table">
                        <div class= "col" id="task-name">
                            <div class="row">
                                <h3 class="row-title">Task</h3>
                            </div> 
                        </div>
                        <div class= "col" id="project-name">
                            <div class="row">
                                <h3 class="row-title">Project</h3>
                            </div>
                        </div>
                        <div class= "col" id="date">
                            <div class="row">
                                <h3 class="row-title">Date</h3>
                            </div>                             
                        </div>
                    </div>
                        `

                getBody.appendChild(page);

                const plotTaskName = (task) =>{
                    const taskContainer = document.getElementById("task-name");
                    taskContainer.innerHTML += `
                    <div class="row task-item-container">
                        <button class="checkbox" id="task-check">
                        ${this.isChecked(task)}
                        </button>
                        <p class="task-item-title">${task.getName()}</p>
                    </div>
                    `
                }
                const plotProjectName = (projectName) =>{
                    const projectContainer =  document.getElementById("project-name");
                    projectContainer.innerHTML += `
                    <div class="row">
                    <p>${projectName.getName()}</p>
                </div>`
                }
                const plotDate = (task)=>{
                    const dateContainer = document.getElementById("date");
                    dateContainer.innerHTML +=`
                    <div class="row">
                    <p>${task.getDate()}</p>
                </div>
                    `
                }
                const plotUI = (__task, __project) =>{
                    plotTaskName(__task);
                    plotProjectName(__project);
                    plotDate(__task);
                    const buttons = document.querySelectorAll(".checkbox");
                    buttons.forEach((button) =>{
                        button.addEventListener(("click"), (e)=>{
                            const parent = (e.currentTarget.parentNode);
                            const text = parent.querySelector(".task-item-title").textContent;
                            let projectName;
                             Storage.getTodoList().getProjects().forEach((project) =>{
                                project.getTasks().forEach((task) =>{
                                    if(task.getName() == text)
                                    {
                                        projectName = (project.getName());
                                    }
                                });
                            });
                            this.toggleCompleteTask(text, projectName, button);

                        })
                    })
                }
                Storage.getTodoList().getProjects().forEach((project) =>{
                    project.getTasks().forEach((task) =>{
                        
                        if(event.currentTarget.id === "inbox")
                        {
                            //plot all
                            plotUI(task, project);
                        }
                        else if(event.currentTarget.id ==="today")
                        {
                            if (task.isToday()){
                                plotUI(task, project);
                            }
                        }
                        else if(event.currentTarget.id ="upcoming")
                        {
                            if (task.isAfter()){
                                plotUI(task, project);
                            }
                        }
                             
                    });
                });
                this.toggleMobileNavBar();
            });
        });
        this.createProjectBtn();

    }
    static removePage = () =>{
        const parent = document.querySelector(".body");
        while(parent.firstChild){
            parent.removeChild(parent.lastChild);
        }
    }
    //------------------------------------- Project ------------------------------------------
    static createProjectBtn = () =>{
        const buttons = document.querySelectorAll("#add-project-btn");
        buttons.forEach((projectFormButton) =>{
            projectFormButton.addEventListener(("click"), this.loadProjectForm)
        });
    }
    static loadProjectNames = () =>{
        const loadProjectSection = document.getElementById("projects");
        const projects = Storage.getTodoList().getProjects();

        if((projects != null) && (projects.length > 0))
        {
            Storage.getTodoList().getProjects().forEach((project =>{
                loadProjectSection.appendChild(this.loadProjectName(project));
                this.projectNameBtn(project.getName()); //load button
                this.projectTrashBtn(project.getName()); //load trash
            }));
        }
        else{
            console.log("no project added");
        }
    }
    static loadProjectName = (obj) =>{
        const listItem = document.createElement("li");
        listItem.classList.add("project-list-item");
        listItem.setAttribute("id",`${obj.name.toLowerCase()}`);
        listItem.innerHTML = 
        `<a class="project-btn" id="btn-${obj.name.toLowerCase()}">
            <span>${obj.name}</span></a>
        <button class ="project-trash-btn" id="project-trash-btn-${obj.name.toLowerCase()}">
            <img src="${Icons.getImage("trash")}" class="project-trash">
        </button>`
        return listItem;
    }
    static projectTrashBtn = (name) =>{
        const listItem = document.getElementById(`project-trash-btn-${name.toLowerCase()}`);
        listItem.addEventListener(("click"), this.deleteProject);
    }

    static projectNameBtn = (name) =>{
        const button = document.getElementById(`btn-${name.toLowerCase()}`);
        button.addEventListener(("click"), this.loadNewProject);
    }
    static deleteProject = (e) =>{
        const title = e.currentTarget.id.split("-")[3]; //returns item
        Storage.remove(`${title}`); //removes from storage
    }

    static loadNewProject = (e) =>{
        const project = Storage.readProject(e.currentTarget.id.split("-")[1]); //returns project
        this.removePage();

        const getBody = document.querySelector(".body");
        getBody.appendChild(this.sectionProject(project));
        //Loads necessary projectbuttons
        this.createProjectBtn()
        this.projectPageBtns();

        project.getNotes().forEach(note =>{ 
            this.sectionNote(note); 
        });
        project.getTasks().forEach(task =>{
            this.sectionTask(task);
        });
        this.loadNoteBtns();
        this.initTaskBtns();
        this.toggleMobileNavBar();

    }
    static loadNoteBtns = () =>{
        const noteBtns = document.querySelectorAll(".note-trash-btn");
        noteBtns.forEach((button) => {
            button.addEventListener(("click"), this.deleteNote)
        });
    }
    static deleteNote = (e) =>{
        const text = e.currentTarget.parentNode.querySelector("p").textContent;
        const title = document.querySelector(".project-title").textContent;
        Storage.deleteNote(text, title);
        location.reload();
    } 
    static taskBtn = (e) =>{
        
    }

    static deleteTask = (e)=>{
        //Finds an ancestral node
        const ancestralNode = e.currentTarget.parentElement.parentElement.parentElement;  
        const ancestralNodeChild = ancestralNode.querySelector(".task-item-title");
        const title = document.querySelector(".project-title").textContent;
        const text = ancestralNodeChild.textContent;
        Storage.deleteTask(text, title);
        ancestralNode.remove();
    }
    static editTask = (e) =>{
        const ancestralNode = e.currentTarget.parentElement.parentElement.parentElement;
        // ancestralNode.classList.add("hidden");
        const taskNodes = document.querySelectorAll(".task-item");
        const text = ancestralNode.querySelector(".task-item-title").textContent;
        const date = ancestralNode.querySelector(".task-item-date").textContent;

        const parent = document.getElementById("project-tasks");
        let whereTheNodeIs;

        Array.from(parent.children).forEach((element, index) =>{
        let tempText = element.querySelector(".task-item-title").textContent;
        if(tempText === text){
            whereTheNodeIs = index;
        }
       });
   
        taskNodes[whereTheNodeIs].classList.add("hidden");
        parent.insertBefore(this.editTaskForm(text, date), taskNodes[whereTheNodeIs]);
        
        const buttons = document.getElementById("project-tasks-edit").querySelectorAll("button");
        buttons.forEach((button) =>{
           button.addEventListener(("click"), e =>{
                if(e.currentTarget.id === "edit-submit")
                {
                    let newTitle = document.querySelector(".project-title").textContent;
                    let newText = parent.querySelector("#task-name").value;
                    let newDate = format(new Date(parent.querySelector("#task-date").value), "yyyy-MM-dd");

                    Storage.editTask(text, newText, newDate, newTitle.toLowerCase());

                    ancestralNode.querySelector(".task-item-title").textContent = newText;
                    ancestralNode.querySelector(".task-item-date").textContent = format(new Date(newDate), "MMM dd, yyyy");

                    //Store the new data to DOM
                    taskNodes[whereTheNodeIs].classList.remove("hidden");
                    //removes form
                    parent.querySelector("#project-tasks-edit").remove();

                    // location.reload();

                }
                else if(e.currentTarget.id ==="edit-cancel"){
                    taskNodes[whereTheNodeIs].classList.remove("hidden");
                    document.getElementById("project-tasks-edit").remove();
                }
           }); 
        });
    }

    static initTaskBtns = () =>{
        const taskItem = document.querySelectorAll(".task-item");
        taskItem.forEach((item, index) => {
            const buttons = item.querySelectorAll("button");
            buttons.forEach((button) =>{
                button.addEventListener(("click"), e =>{
                    const taskNodes = document.querySelectorAll(".task-item");
                    const text = taskNodes[index].querySelector(".task-item-title").textContent;
                    const title = document.querySelector(".project-title").textContent;

                    if(e.currentTarget.id === "task-delete")
                    {
                        this.deleteTask(e);
                    }
                    else if(e.currentTarget.id ==="task-edit")
                    {
                        this.editTask(e);
                    }
                    else if(e.currentTarget.id ==="task-check")
                    {
                        this.toggleCompleteTask(text, title, button);
                    }
                });
            });
            
        });
        
    }
    static toggleCompleteTask = (__text, __title, __button) =>{
        Storage.toggleStatus(__text, __title);
        Storage.getTodoList().getProject(__title).getTasks().forEach((task) =>{
            if(task.getName() === __text)
            {
                if(task.getStatus()){
                    const image = new Image();
                    image.src = Icons.getImage("checkMark");
                    __button.appendChild(image);
                }
                else{
                    __button.querySelector("img").remove();
                }
            }
        });
    }

        //This is a UI section for notes.  It adds the content of the note and a choice to delete it
    static sectionNote = (note) =>{
            const noteContainer = document.getElementById("project-notes");
    
            const plotNote = document.createElement("li");
            plotNote.classList.add("note-item");
            // plotNote.setAttribute("id",`${objectName}`)
            plotNote.innerHTML = `
                <p>${note.getNote()}</p>
                <button class="note-trash-btn" id="trash-title">
                    <img src = ${Icons.getImage("trash")}
                </button>`
            noteContainer.appendChild(plotNote);
        }

    static loadSideBar = () =>{
        this.navBar();
        this.navProjectBar();
        this.loadProjectNames();
    }
    // -------------------------------Task ------------------------------------------------------

    static isChecked = (task) =>{
        if(task.getStatus() === true)
        {
            return `<img src= "${Icons.getImage("checkMark")}">`;
        }
        else
        {
            return ``
        }
    }
    static sectionTask = (task) =>{
        const container = document.getElementById("project-tasks");
        container.innerHTML += `
        <li class="task-item">
        <div class="task-item-container">
            <button class="checkbox" id="task-check">
                ${this.isChecked(task)}
            </button>
            <span class="task-item-title">${task.getName()}</span>

        </div>
        <div class="task-item-mov-toggle">
            <div class="task-item-container task-item-mov-toggle">
                <p class="task-item-date">${task.getDate()}</p>
                <button class="task-item-btn" id ="task-edit">
                    <img src = "${Icons.getImage("edit")}" alt="editing">
                </button>
                <button class="task-item-btn" id="task-delete">
                    <img src= ${Icons.getImage("trash")} alt="trash">
                </button>
            </div>
            
        </div>
    </li>`
    }
    // --------------------------- Project Form --------------------------------------------------
    static loadProjectForm = (e) =>{
        const getBody = document.querySelector(".body");
        getBody.appendChild(this.projectForm());
        this.initProjectButtons();
    }
    static projectForm = () =>{
        const plotForm = document.createElement("div");
        plotForm.classList.add("add-project-window");
        plotForm.innerHTML = 
        `
        <div class="add-project">
            <button class="close-btn">x</button>
            <h2>Add a project</h2>
            <div class="form-item">
                <label class="form-items" for="pname" required>Project Name</label>
                <input type="text" id="pname" name="pname" placeholder ="property Investment">
            </div>
            <div class="form-item">
                <label class="form-items" for="pdesc">Description</label>
                <textarea name ="pdesc" id="pdesc" maxlength="200" placeholder="Fund some money to buy a new house"></textarea>
            </div>
            <button class="add-project-submit-btn">Submit</button>
        </div>`;

        return plotForm;
    }
    static initProjectButtons = ()=>
    {
        const submit = document.querySelector(".add-project-submit-btn");
        submit.addEventListener(("click"), ()=>{
            const name = document.getElementById("pname").value;
            const description = document.getElementById("pdesc").value;
            Storage.addProject(name, description);
            
            this.closeWindow();
            location.reload();
            //Add plotProject here
            //*** */
        });

        document.querySelector(".close-btn").addEventListener(("click"), this.closeWindow);
    }
    static closeWindow = () =>{
        const close = document.querySelector(".add-project-window");
        close.remove();
    }

    static loadMainContent = () =>{
        const content = document.getElementById("content");
        const numOfProjects = Storage.getTodoList().getProjects().length;
        console.log(numOfProjects);

        if(numOfProjects === 0)
        {
            const plotContent = document.createElement("div");
            plotContent.classList.add("body");

            const introPage = document.createElement("div");
            introPage.setAttribute("id", "intro-page");
            introPage.innerHTML = `
                <div class="intro-container">
                <h1 class="title">Welcome to "Do it"</h1>
                <p>A solution to help you effortlessly manage your tasks and stay organized like never before.</p>
                </div>
                <button class="project-btn-primary" id="add-project-btn">Create a project</button>`;

            plotContent.appendChild(introPage);

            content.appendChild(plotContent);
        }
        
        else{

            const plot = document.createElement("div");
            plot.classList.add("body");

            plot.appendChild(this.sectionProject(Storage.getTodoList().getProjects()[0])); //Plots first project
            content.appendChild(plot);
            //load notes if any
           Storage.getTodoList().getProjects()[0].getNotes().forEach((note) =>{
            this.sectionNote(note);
           });
            // load todo list if any
            Storage.getTodoList().getProjects()[0].getTasks().forEach((task) =>{
                this.sectionTask(task);
                console.log(task.getStatus());
            });
            this.projectPageBtns(); //load project buttons
            this.loadNoteBtns(); //load note buttons
            this.initTaskBtns();

        }
        this.createProjectBtn();

    }
    static projectPageBtns = () =>{
        const addTodoListbtns = document.querySelectorAll(".task-toggle-btn");
        addTodoListbtns.forEach((button) =>{
            button.addEventListener(("click"), e =>{
                if(e.currentTarget.id == "note-btn"){
                    this.toggleForms("project-notes-input");
                }
                else if(e.currentTarget.id == "task-btn"){
                    this.toggleForms("project-tasks-input");
                }
            });
        });

        const noteToggleButton = document.querySelector(".note-cancel-btn");
        noteToggleButton.addEventListener(("click"), ()=>{
            this.toggleForms("project-notes-input");
        });
        const taskToggleButton = document.querySelector(".todo-cancel-btn");
        taskToggleButton.addEventListener(("click"), ()=>{
            this.toggleForms("project-tasks-input");
        });

        const submitNote = document.querySelector(".note-submit-btn");
        submitNote.addEventListener(("click"), ()=>{
            const getName = document.querySelector(".note-input");
            const getTitle = document.querySelector(".project-title").textContent;
            if(getName.value != "")
            {
                Storage.addNote(getName.value, getTitle);
                
                var note = Storage.readNote(getTitle, getName.value);
                this.sectionNote(note);
                //Need to add trash note
                const listOfNotes = document.querySelectorAll(".note-item");
                listOfNotes[listOfNotes.length - 1].querySelector("button")
                .addEventListener(("click"), this.deleteNote);
                getName.value = "";
                this.toggleForms("project-notes-input");

            }
            else{
                alert("Please input a note");
            }
        })

        const submitTask = document.querySelector(".todo-submit-btn");
        submitTask.addEventListener(("click"), ()=>{
            const title = document.querySelector(".project-title").textContent;
            const name = document.getElementById("task-name").value;
            const date = document.getElementById("task-date").value;

            if(name != ""){
                Storage.addTask(name, date, title);
                var task = (Storage.readTask(title, name));
                this.sectionTask(task);
                document.getElementById("project-tasks-input").remove(); //removes form
            //missing buttons ***

            }
            else{
                ("Please fill in the date and task.")
            }
        })
    }
    static toggleForms = (name) =>{
        const getContainer = document.getElementById(name);
        getContainer.classList.toggle("hidden");
    }
    static loadProjects = () =>{
        const plot = document.createElement("div");
        plot.classList.add("body");
        const numOfProjects = Storage.getTodoList().getProjects().length;
        
        if(numOfProjects === 0)
        {
            plot.appendChild(this.mainPage());
        }
        else{
            plot.appendChild(this.sectionProject(Storage.getTodoList().getProjects()[0])); //Plots first project
            // const title = document.querySelector(".project-title");
        }

        return plot;
    }

    static mainPage = () =>{
        const intro = document.createElement("div");
        intro.setAttribute("id", "intro-page");
        intro.innerHTML = `
            <div class="intro-container">
            <h1 class="title">Welcome to "Do it"</h1>
            <p>A solution to help you effortlessly manage your tasks and stay organized like never before.</p>
            </div>
            <button class="project-btn-primary" id="add-project-btn">Create a project</button>`;
        
        return intro;
    }

    static sectionProject = (objectName) =>{
        const container = document.createElement("div");
        const title = objectName.getName().toLowerCase();
        container.classList.add("project-page");
        container.setAttribute("id", `project-${title}`);
        container.innerHTML =
        `
        <div class="project-header">
            <h2 class="project-title">${objectName.name}</h2>
            <p class="project-description">${objectName.description}</p>
        </div>
        <div class= "project-task" id="notes">
            <div class= "note-container">
                <h3 class="note-title">Notes</h3>
                <button class="task-toggle-btn" id="note-btn">+</button>
            </div>   
            <ul class="note-list" id="project-notes">
            </ul>
            <div class= "item-input hidden" id="project-notes-input">
                <div class="input-container">
                    <input class="note-input" type="text" name="description" required></textarea>
                </div>
                <div class="todo-nav-container">
                    <button class="submit-button note-submit-btn">Add</button>
                    <button class="cancel-button note-cancel-btn">Cancel</button>
                </div>
            </div>
            
        </div>

        <div class="project-task" id="tasks">
            <div class="task-container">
                <h3 class="task-title">My todo list</h3>
                <button class="task-toggle-btn" id="task-btn">+</button>
            </div>
            <ul class="task-list" id="project-tasks">
            </ul>
            <div class="item-input hidden" id="project-tasks-input">
                <div class="input-container">
                    <input class="todo-input" id="task-name" type="text" name ="todo" required>
                    <input class="todo-input" id="task-date" type="date" name="date"s required>
                </div>

                <div class="todo-nav-container">
                    <button class="submit-button todo-submit-btn">Add</button>
                    <button class="cancel-button todo-cancel-btn">Cancel</button>
                </div>
            </div>
        
        </div>

        `;
        return container;
    }

    static editTaskForm = (text, date) =>{
        // let newDate = format(new Date(date), 'YYYY-MM-DD');
        const form = document.createElement("div");
        form.classList.add("item-input");
        form.setAttribute("id","project-tasks-edit");
        form.innerHTML = `
            <div class="input-container">
                <input class="todo-input" id="task-name" type="text" name ="todo" value="${text}" required>
                <input class="todo-input" id="task-date" type="date" name= "date" value ="${format(new Date(date),"yyyy-MM-dd")}" required>
            </div>
            <div class="todo-nav-container">
                <button class="submit-button todo-submit-btn" id="edit-submit">Add</button>
                <button class="cancel-button todo-cancel-btn" id="edit-cancel">Cancel</button>
            </div>
            `
        return form;
    }

    //Footer
    static loadFooter = () =>{
        const container = document.querySelector(".side-bar");

        const year = new Date();

        const plotFooter = document.createElement("footer");
        plotFooter.innerHTML =
        `
        <div class="footer-container">
            <p class="attributes">This is an Odin Project</p>
            <p class="attributes">Icons created by<a href="https://www.flaticon.com/" title="flaticon icons">
            Freepik - Flaticon</a></p>
            <p class="attributes">Copyright &copy ${year.getFullYear()}</p>
        </div>
        `
       
      ;
        container.appendChild(plotFooter);
    }
}