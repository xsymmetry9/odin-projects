const buttons = document.querySelectorAll('button')
const gameScreen = document.querySelector('.game-container')
const getGrid = document.querySelector('.customGrid');
// -----------Constant Variables --------------------------------------

var color = "default";
// 16x16 grid
const gridLayout = 16;
const colRow = gridLayout;

//---------------------------Create Grid-------------------------------

//Draws a standard 16 x 16 Grid
function drawSquare(num) {
  const sketchGrid = document.querySelectorAll('.sketchGrid');

  var colRow = Math.floor(400 / num);


  const grid = document.createElement('div');
  grid.classList.add('sketchGrid');
  grid.setAttribute('id', 'myId');
  grid.setAttribute('style', `height: ${colRow}px; width: ${colRow}px; outline: thin solid; outline-color: #0E185F`);
  gameScreen.appendChild(grid);
}

function drawGrid(num) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num; j++) {
      drawSquare(num);
    }
  }
}
drawGrid(colRow);

// ---------------slider-------------------------------------
const slider = document.querySelector('.slider');
const gridInfo = document.querySelector('.info');
slider.addEventListener('click', function(e)
{
  clearGrid();
  var getValue = e.target.value; //gets value of grid
  drawGrid((e.target.value));
  document.querySelector('.info').innerHTML = `${getValue} X ${getValue}`;
  const selectedGrid = document.querySelectorAll('.sketchGrid');
  selectedGrid.forEach((element) => {
    element.addEventListener('mouseover', changeColor);
  });

})
//--------Change Colors----------------------//
//Calls all buttons
buttons.forEach((button) => {
  button.addEventListener('mousedown', () => {
    if (button.id == "black") {
      color = "black";
      console.log(color);
    } else if (button.id == "erase") {
      color = "erase";
      console.log(color);
    } else if (button.id == "random") {
      color = "random";
      console.log(color);
    } else if (button.id == "lighter") {
      color = "lighter";
    } else if (button.id == "darker"){
      color = "darker";
    }
    // Deletes the attribute of Grid
    else if (button.id == "clear") {
      clearGrid();
      drawGrid(colRow);
      const selectedGrid = document.querySelectorAll('.sketchGrid');
      selectedGrid.forEach((element) => {
        element.addEventListener('mouseover', changeColor);
      });
    }
  });
});

//Choose color randomly
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return (`rgba(${r},${g},${b})`);
}

// ---------------------- RGBA Functions -----------------------
// Finds the value of R, G, B, A
function getRGB(string) {
  var start = (string.indexOf('(') + 1);
  var end = (string.indexOf(')'));
  var getRgba = (string.slice(start, end)).split(',');

  return (getRgba);

}
// Change the opacity to 10% lighter
function lighter(myArray){
    var r = myArray[0];
    var g = myArray[1];
    var b = myArray[2];
    if (myArray.length == 3)
    {
        myArray.push(.9);
        var a  = myArray[3];
        return `rgba(${r}, ${g}, ${b},${a})`;
    }
    else{
      if(myArray[3] > .1){
        myArray[3] = myArray[3] - .1;
        return `rgba(${r}, ${g}, ${b},${myArray[3]})`;
      }
    }
}

// Change the opacity to 10% Darker

function darker(myArray){
    var r = myArray[0];
    var g = myArray[1];
    var b = myArray[2];
    var a = myArray[3];
    if(a <= .9 || a >= .1){
        a = (a * 10 + 1) / 10;
        return `rgba(${r}, ${g}, ${b},${a})`;
      }
    }

//------Create a ChangeColor Function----------
function changeColor(e) {
  var getColor = this.style.backgroundColor;
  //Checks if there is a backgroundColor attribute
  if (getColor == '') {
    if (color == "black") {
      this.style.backgroundColor = `rgba(0,0,0)`;
    }
    if (color == "random") {
      let getRandom = randomColor();

      this.style.backgroundColor = getRandom;
      console.log(this.style.backgroundColor)
    }
  } else {
    // Erases background attributes
    if (color == "erase") {
      this.style.backgroundColor = '';
    }
    // Makes color lighter but not white
    if (color == "lighter") {
      var myArray = getRGB(getColor);
      var getLighter = lighter(myArray);
      this.style.backgroundColor = getLighter;
      console.log(getLighter);
    }
    // Makes color darker
    if (color == "darker") {
      var myArray = getRGB(getColor);
      var getDarker = darker(myArray);
      this.style.backgroundColor = getDarker;
      console.log(getDarker);
    }
  }
}
// Clear grid
function clearGrid() {
  gameScreen.innerHTML = '';
}

//Change background of grid when it's clicked
const selectedGrid = document.querySelectorAll('.sketchGrid');
selectedGrid.forEach((element) => {
  element.addEventListener('mouseover', changeColor);
});
