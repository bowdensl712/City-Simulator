const container = document.getElementById("container");
const title1 = document.createElement("h1");
const text1 = document.createElement("p");
const text2 = document.createElement("p");
const text3 = document.createElement("p");
const text4 = document.createElement("p");


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
    container.append(title1);


};



