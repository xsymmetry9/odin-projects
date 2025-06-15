// import imgOpen from "../images/icon-hamburger.svg";
// import imgClose from "../images/close.png";
// import inboxImg from "../images/inbox.png";
// import starImg from "../images/star.png";
// import calendarImg from "../images/calendar.png";
// import { Plot, addProjectWindow, onLoad, plotNewAddedProject} from "./components.js";
// import {Project, getProjectName} from "./project.js";

// import Projecto from "./components/Project.js";
// import Storage from "./components/Storage";

// var content = document.getElementById('content');
// content.classList.add('grid');

// // Adds Project Function
// const addProjectFunction = () =>{
//     const addBtnProject = document.getElementById("add-project-btn");
//     addBtnProject.addEventListener(("click"), addProjectWindow);
// }

// const removeElement = (item) =>{
//     const removeThis = document.querySelector(`${item}`);
//     removeThis.remove();
// }
// const plotOnLoad = (e)=>{
//     removeElement(".stuff-goes-here");
//     const getContainer = document.querySelector(".body");
//     getContainer.appendChild(onLoad(e.currentTarget.id));
// }
// const navBtnFunctions = () =>{
//     const getAll = document.querySelectorAll(".nav-item");
//     getAll.forEach((nav) =>{
//         nav.addEventListener(("click"), plotOnLoad);
//     });
// }

// //Plots all projects in the navigation bar
// const createItems = () =>{
//     var unOrderList = document.getElementById("projects");
//     getProjectName().forEach((project) => {
//         unOrderList.appendChild(plotNewAddedProject(project)); //Plots Default Projects
//     });
// }

// const createHeader = () =>{
//     const header = document.createElement("header");
//     //Creates a menu
//     header.innerHTML = `
//         <button class="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false">
//             <img src = ${imgOpen} alt="menu" aria-hidden="true">
//             <img src = ${imgClose} alt="close aria-hidden="false">
//         </button>`
//     return header;
// }

// const createSideBar = () =>{
//     // Navigation ----------------------------------------------------

//     //Plots inbox, today, upcoming, anytime, and someday with an image

//     const createPrimaryNav = document.createElement("div");
//     createPrimaryNav.classList.add("side-bar", "primary-navigation");

//     createPrimaryNav.innerHTML = `
//         <h1 class= "title">Do it</h1>
//         <nav>
//             <ul class="nav-list" aria-label="primary" role="list">
//                 <li><a class="nav-item" id="inbox">
//                         <img src = ${inboxImg} class="nav-item-icon" alt= "Download icons created by Kiranshastry">
//                         <span>Inbox</span>
//                     </a>
//                 </li>
//                 <li><a class="nav-item" id="today">
//                         <img src = ${starImg} class="nav-item-icon" alt= "Download icons created by Kiranshastry">
//                         <span>Today</span>
//                     </a>
//                 </li>        
//                 <li><a class="nav-item" id="upcoming">
//                         <img src = ${calendarImg} class="nav-item-icon" alt= "Download icons created by Kiranshastry">
//                         <span>Upcoming</span>
//                     </a>
//                 </li>
//             </ul>
//         </nav>`;
    

//     //Function that creates project section
//     const createProjects = () =>{
//         const container = document.createElement("div");
//         container.setAttribute("id", "projects");
//         container.innerHTML = `
//         <div class="project-container">
//             <a class="project-nav-title">Projects</a>
//             <button class="add-project-btn" id="add-project-btn">+</button>
//         </div>
//         <ul class="project-nav-list" id="projects">
//         </ul>`;
            
//         //Creates the existed items from local Storage and plots them on the sidebar
   
//         return container;
//     }
    
//     createPrimaryNav.appendChild(createProjects());

//     return createPrimaryNav;
// }

// const displayPanel = () => {
//     const getBody = document.getElementById("content");
   
//     var __body = document.createElement("div");
//     __body.classList.add("body");

//     const loadProjectPage = () =>{
//         if (localStorage.length > 0){
//             let item = Project().getAllProjects()[0]; //first item
//             // console.log(item.tasks);
//             __body.appendChild(Plot().printProjectDisplay(item));
//         }
//         else{
//             //Plots Welcome to do it if there aren't any added projects
//             const container = document.createElement("div");
//             container.setAttribute("id", "intro-page");
//             container.innerHTML = `
//             <div class="intro-container">
//                 <h1 class="title">Welcome to "Do it"</h1>
//                 <p>A solution to help you effortlessly manage your tasks and stay organized like never before.</p>
//             </div>
//             <button class="project-btn-primary" id="add-project-btn">Create a project</button>`;
//             __body.appendChild(container);
//         }
//     }
//     loadProjectPage();
//     getBody.appendChild(__body);
    

// }
// const createFooter = () => {
//     const container = document.createElement("footer");
//     const year = new Date(); 
//     container.innerHTML = `
//         <div class="bottom-footer">
//             <a class= "attributes" href="https://www.flaticon.com/" title="flaticon icons">
//                 <span>Icons created by Freepik - Flaticon</span>
//             </a>
//             <p class="attributes">copyright &copy ${year.getFullYear()}</p>
//         </div>`
//     return container;

// }


// const initializeWebsite = () =>{
//     content.appendChild(createHeader());
//     content.appendChild(createSideBar());
//     displayPanel();
//     content.appendChild(createFooter());

//     addProjectFunction();
//     navBtnFunctions();
//     createItems();

//     // const projecto1 = new Projecto ("Family"); //add projects
//     // Storage.saveTodoList(projecto1);


// }

// export default initializeWebsite;