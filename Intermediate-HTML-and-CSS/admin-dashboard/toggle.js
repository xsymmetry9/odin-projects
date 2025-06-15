const darkBtn = document.getElementById('changeToDark');
const lightBtn = document.getElementById('changeToLight');

const container = document.querySelector(".container");

const header = document.querySelector(".header");

const veryDarkBlue = "rgb(27, 36, 48)";
const purple = "rgb(129, 103, 151)";
const beige = "rgb(214, 213, 168)";

darkBtn.addEventListener(('click'), function(e){
    /* Header */ 
    header.style.backgroundColor = veryDarkBlue;
    
    
    container.style.backgroundColor = veryDarkBlue;
});

lightBtn.addEventListener(('click'), function(e){

    header.style.backgroundColor = "hsl(0, 0%, 98%)";


    container.style.backgroundColor = "#c7e0fd";
});