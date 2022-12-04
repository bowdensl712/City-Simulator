const container = document.getElementById("container");
const title1 = document.createElement("h1");
const text1 = document.createElement("p");
const text2 = document.createElement("p");
const text3 = document.createElement("p");
const text4 = document.createElement("p");
const text5 = document.createElement("p");
const text6 = document.createElement("p");
const link1 = document.createElement("p");
link1.setAttribute("class", "link");
const link2 = document.createElement("p");
link2.setAttribute("class", "link");
const link3 = document.createElement("p");
link3.setAttribute("class", "link");
const link4 = document.createElement("p");
link4.setAttribute("class", "link");
const link5 = document.createElement("p");
link5.setAttribute("class", "link");
const image1 = document.createElement("img");
image1.setAttribute("class", "image");
const image2 = document.createElement("img");
image2.setAttribute("class", "image");
const image3 = document.createElement("img");
image3.setAttribute("class", "image");
const image4 = document.createElement("img");
image4.setAttribute("class", "image");


//Functions
function clear(parent) {
    while (parent.firstChild) { parent.removeChild(parent.firstChild) };
};



//Main Page
let mainPage = document.createElement("div");
container.appendChild(mainPage);
mainPage.style.width = "100%";
mainPage.style.height = "100%";
mainPage.style.backgroundColor = "black";

let mainTitle = document.createElement("h1");
mainTitle.innerText = "City Simulator";
mainTitle.setAttribute("class", "mainTitle");

let startButton = document.createElement("p");
startButton.innerText = "Enter the city.";
startButton.setAttribute("class", "startButton");
startButton.setAttribute("onclick", "startGame()");


mainPage.append(mainTitle, startButton);

function startGame() {
//TODO: add function
clear(container);
loadStreetCorner();
};





function loadStreetCorner() {
    clear(container);
    title1.innerText = "Street Corner";
    text1.innerText = "You are standing on a street corner. \n You've just moved to the city, and you're not quite sure where to go from here. "
    image1.src = "images/backgrounds/streetCorner.jpg";
    link1.innerText = "Go up the street";
    link1.setAttribute("onclick", "loadResidentialStreet()");

    container.append(title1, text1, image1, link1);
   
};


function loadResidentialStreet() {
    clear(container);
    

    title1.innerText = "Residential Street";
    text1.innerText = "You've come to a quiet street, lined with houses. \nYou wonder what life is like for all the people here.";
    image1.src = "images/backgrounds/residentialStreet.png";
    container.append(title1, text1, image1);
}


