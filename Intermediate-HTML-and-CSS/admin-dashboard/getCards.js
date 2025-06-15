//Creates a list of cards

const nameProject = ["RockPaperScissors", "Sketch", "Landing Page","Data Base","Fakbook","Form"];

nameProject.forEach((item, index) =>{
    const container = document.querySelector('.projects');
    const content = document.createElement('div');
    content.classList.add('card');
    content.setAttribute('id', `card-${index}`)
    container.appendChild(content);

    const cardContainer = document.getElementById(`card-${index}`);
    const description = document.createElement('div');
    description.classList.add('description');
    cardContainer.appendChild(description);

    const descriptionContainer = document.querySelector(`#card-${index} .description`);
    const title = document.createElement('p');
    title.classList.add('title');
    title.textContent = item; //can be an array
    console.log(item);
    const desc = document.createElement('p');
    desc.textContent = "This is a loop created by code.js file";
    descriptionContainer.appendChild(title);
    descriptionContainer.appendChild(desc);

    const iconContainer= document.createElement('div');
    iconContainer.classList.add('icons');
    cardContainer.appendChild(iconContainer);

    const getContainer = document.querySelector(`#card-${index} .icons`);
    const anchorTag = document.createElement('a');  
    anchorTag.href = "#";
    getContainer.appendChild(anchorTag);

    anchorTagContainer = document.querySelector(`#card-${index} a`);
    var imgGit = document.createElement("img");
    imgGit.src = "icons/github.png";
    imgGit.classList.add('icon-card');
    anchorTag.appendChild(imgGit);

    var imgStar = document.createElement("img");
    imgStar.src = "icons/favorite.png";
    imgStar.classList.add('icon-card');
    anchorTag.appendChild(imgStar);

    var imgComment = document.createElement("img");
    imgComment.src = "icons/comment.png";
    imgComment.classList.add('icon-card');
    anchorTag.appendChild(imgComment);
});
