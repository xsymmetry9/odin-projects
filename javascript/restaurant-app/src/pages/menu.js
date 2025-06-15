import  menuItem1 from '../images/potstickers.jpg';
import  menuItem2 from '../images/steamedDumplings.jpg';
import  menuItem3 from '../images/gyoza.jpg';
import  menuItem4 from '../images/ravioli.jpg';

function createMenu(){
    var menu = document.createElement('div');
    menu.classList.add("container-narrow");

    var title = document.createElement('h2');
    title.textContent = "Menu";
    //Plots the title
    menu.appendChild(title);

    //Loads all item to "loadItem"
    var loadItems = document.createElement('div');
    loadItems.classList.add('items');

    var unorderedList = document.createElement("ul");
    unorderedList.appendChild(items(
        "Taiwanese Potstickers", 
        menuItem1,
        "Minced pork, cabbage wrapped with a thin wrapper",
        "$1 each"
    ));
    unorderedList.appendChild(items(
        "Korean dumplings",
        menuItem2,
        "Minced pork and cabbage carefully wrapped with a thicker wrapper",
        "$1 each"
    ));
    unorderedList.appendChild(items(
        "Japanese dumplings",
        menuItem3,
        "Pan-fried dumplings with some ground pork meat and vegetable filling",
        "$1 each"
    ));
    unorderedList.appendChild(items(
        "Italian dumplings",
        menuItem4,
        "Classic homemade Italian dumplings with some lobster and parmesan cheese",
        "$1 each"
    ));
    
    //load the items to "loadItem" variable
    loadItems.appendChild(unorderedList);
    //plots all loadItems on to Menu
    menu.appendChild(loadItems);


    return menu;

}

function items(title, img, description, price){
    var menuItem = document.createElement("li");
    menuItem.classList.add("item");

    var nameOfItem = document.createElement("h3");
    nameOfItem.textContent = title;

    const imgOfItem = new Image(); //var imgOfItem = document.createElement("img");
    imgOfItem.src = img; //imgOfItem.setAttribute("src", img);

    var descriptionOfItem = document.createElement("p");
    descriptionOfItem.textContent = description;
    descriptionOfItem.classList.add('product-description');

    var priceOfItem = document.createElement("p");
    priceOfItem.textContent = price;
    priceOfItem.classList.add('price');

    menuItem.appendChild(nameOfItem);
    menuItem.appendChild(imgOfItem);
    menuItem.appendChild(descriptionOfItem);
    menuItem.appendChild(priceOfItem);

    return menuItem;
}

function loadMenu(){
    const getMain = document.querySelector('.main');
    var section = document.createElement('menu');

    section.appendChild(createMenu());
    getMain.appendChild(section);

    return getMain;

}
export default loadMenu;