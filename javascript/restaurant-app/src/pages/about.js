import  myImage from '../images/chef-portrait.jpg';

function createAbout(){
    var createContainer = document.createElement('div');
    createContainer.classList.add('container-narrow');

    var createAboutContent = document.createElement('p');
    createAboutContent.classList.add('about-content');
    createAboutContent.textContent = "We are a dumpling enthusiast.  We make dumplings every day.  Come try all 8 different dumplings.";

    createContainer.appendChild(createAboutContent);
    createContainer.appendChild(loadImage());
    createContainer.appendChild(createAttribute());
    createContainer.appendChild(createBreakLine());
    createContainer.appendChild(createButton("Order now!"))

    return createContainer;
}

function loadImage(){

    var loadImg = document.createElement('div');
    loadImg.classList.add('circle-container');

    const image = new Image();
    image.src = myImage;
    image.classList.add('info-portrait');
    image.setAttribute('alt', 'Rc Cf');

    loadImg.appendChild(image);

    return loadImg;
}
function createAttribute(){
    var attribute = document.createElement('a');
    attribute.setAttribute('href', 'https://unsplash.com/@rccf?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText');
    attribute.textContent = "unSplash";

    return attribute;
}
function createBreakLine(){
    var breakLine = document.createElement('br');
    breakLine.textContent = " ";

    return breakLine;
}

function createButton(name)
{
    var button = document.createElement('button');
    button.classList.add('btns');
    button.textContent = name;

    return button;
}
function loadAbout(){
    const getMain = document.querySelector('.main');
    const section = document.createElement('section');
    section.setAttribute('id','home');

    section.appendChild(createAbout());
    getMain.appendChild(section);

    return getMain;
}

export default loadAbout;