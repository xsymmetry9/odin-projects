import phoneImg from '../images/phone-call.png';
import mailImg from '../images/mail.png';

function createContact(){

    var contact = document.createElement('div');
    contact.classList.add('container-narrow');

    contact.appendChild(createTitle("Contact us"));
    contact.appendChild(createEmail("abc@gmail.com"));
    contact.appendChild(createPhone("786-123-1234"));
    contact.appendChild(createMap());

    return contact;

}

function createEmail(data){

    var email = document.createElement('div');
    email.classList.add('even-columns');
    
    var image = new Image();
    image.src = mailImg;
    var info = document.createElement('a');
    info.classList.add('contact-info');
    var span = document.createElement('span');

    image.setAttribute('alt', 'email');
    info.setAttribute('href',`mailto: ${data}`);
    span.innerText = data;
    info.appendChild(span);

    email.appendChild(image);
    email.appendChild(info);

    return email;

}
function createPhone(data){

    var phone = document.createElement('div');
    phone.classList.add('even-columns');
    

    var image = new Image();
    image.src = phoneImg;
    image.setAttribute('alt', 'phone');

    var info = document.createElement('a');
    info.classList.add('contact-info');
    var span = document.createElement('span');

    info.setAttribute('href',`tel: ${data}`);
    span.innerText = data;
    info.appendChild(span);

    phone.appendChild(image);
    phone.appendChild(info);

    return phone;

}


function createTitle(name){
    var title = document.createElement('h2');
    title.textContent = name;

    return title;
}

function createMap()
{
    var map = document.createElement('div');
    map.classList.add('map');
    var loadMap = document.createElement('iframe');
    loadMap.setAttribute('src',`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6041.023623191626!2d-80.32987447653048!3d25.803107667814597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stw!4v1682169523045!5m2!1sen!2stw" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`);
    map.appendChild(loadMap);

    return map;

}

function loadContact(){
    const getMain = document.querySelector('.main');
    const section = document.createElement('section');

    section.appendChild(createContact());
    getMain.appendChild(section);
    

    return getMain;
}

export default loadContact;