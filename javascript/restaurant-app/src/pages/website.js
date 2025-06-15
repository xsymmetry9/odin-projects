import loadMenu from "./menu"; 
import loadAbout from "./about";
import loadContact from "./contact";


var content = document.getElementById("content");
//create header
function createHeader(){
    const header = document.createElement("header");
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "MyDumplings";
    header.appendChild(title);
    header.appendChild(createNavigation());
    return header;
}

function createNavigation(){
    const nav = document.createElement("nav");
    const unorderedList = document.createElement('ul');
    unorderedList.classList.add("nav-group");
    const navGroups = [{
        name: "home",
        value: "home",
        id: "home-btn"
    },
    {
        name: "menu",
        value: "menu",
        id: "menu-btn"
    },
    {
        name: "contact",
        value: "contact",
        id: "contact-btn"
    }];

    navGroups.forEach(item =>{
        var orderedList = document.createElement('li');
        orderedList.classList.add("nav-list")
        var anchorTag = document.createElement('a')
        anchorTag.innerHTML = item.name;
        anchorTag.setAttribute('value', item.value); //Sets attribute to the section
        anchorTag.setAttribute('id', item.id); 
        //Add a function that removes the current page and replaces with the selected page
        orderedList.appendChild(anchorTag);
        unorderedList.appendChild(orderedList);
    });

    nav.appendChild(unorderedList);

    return nav;
}

//create main
function createSections(){
    var div = document.createElement('div');
    div.classList.add('main');
   
    return div;

}

//create footer

function createFooter(){
    var footer = document.createElement('footer');
    var container = document.createElement('div');
    container.classList.add('columns');

    var attributes = document.createElement('a');
    var copyright = document.createElement('p');
    attributes.classList.add('attribute');
    attributes.setAttribute('href','https://www.flaticon.com/')
    attributes.setAttribute('title', 'flaticon icons');
    attributes.textContent = "Icons created by Freepik - Flaticon";

    const year = new Date();

    copyright.textContent = "copyright @ "+ year.getFullYear();

    container.appendChild(attributes);
    container.appendChild(copyright);

    footer.appendChild(container);



    return footer;

}
//Clear function
function clearMain(){
    var selectMainChildren = document.querySelector('.main').children;
    for(let i = 0; i < selectMainChildren.length; i++ )
    {
        selectMainChildren[i].remove();
    }
    return selectMainChildren;
}



function initializeWebsite(){
    content.appendChild(createHeader());
    content.appendChild(createSections());
    loadAbout();

    
    //Adds all buttons a function
    var btns = document.querySelectorAll('.nav-list a')
    btns.forEach(item =>{
        item.addEventListener('click', (event) => {
            if (event.currentTarget.id == "menu-btn")
            {
                clearMain();
                loadMenu();
            }
            else if(event.currentTarget.id == "contact-btn"){
                clearMain();
                loadContact();
            }
            else{
                clearMain();
                loadAbout();
            }
        });
    })
    // loadMenu();
    // loadContact();

    content.appendChild(createFooter());
}

export default initializeWebsite;
