//General Variables
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

//Special Variables
const bgm = new Audio();
bgm.type = "audio/mpeg";
bgm.autoplay = "true";
bgm.volume = ".3"
const sidebar = document.getElementsByClassName("sidebar");
const sidebarButton = document.getElementsByClassName("sidebarButton");

//Event Variables
let homelessGiveToken = 0;
let homelessIgnoreToken = 0;
let radioState = false;


//In-Game Variables
let money = 1000;



//Functions
function clear(parent) {
    while (parent.firstChild) { parent.removeChild(parent.firstChild) };
};

function randomInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};
  
function toggleSidebar() {
    if (sidebarToggle = false) {
        sidebar.style.width = "300px";
        sidebarButton.style.left = "300px";
        sidebarToggle = true;
    } else {
        sidebar.style.width = "0";
        sidebarButton.style.left = "0";
        sidebarToggle = false;
    }
}
let sidebarToggle = false;

function executeEvent(functionName, chance) {
    const rolledDice = randomInclusive(1, 100);
    if (chance >= rolledDice) {
        functionName();
    };
//Note: Place this function AFTER the container.append() function!
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
clear(container);
loadStreetCorner();
};



//Apartment

function loadApartment() {
    clear(container);
    title1.innerText = "Your Apartment";
    text1.innerText = "Your new apartment. It still doesn't quite feel like home.";
    image1.src = "images/backgrounds/apartment.jpg";
    link2.setAttribute("onclick", "toggleRadio()");
    if (radioState === true) {
        bgm.src = "/audio/music/radio/radio" + randomInclusive(1, 5) + ".mp3";
        container.append(bgm);
        link2.innerText = "Turn off the radio";
    } else {
        link2.innerText = "Turn on the radio";
    };
    link3.innerText = "Go outside.";
    link3.setAttribute("onclick", "loadStreetCorner()");
    container.append(title1, text1, image1, link2, link3);

}

function toggleRadio() {
    if (radioState === false) {
        link2.innerText = "Turn off the radio";
        bgm.src = "/audio/music/radio/radio" + randomInclusive(1, 5) + ".mp3";
        container.append(bgm);

        radioState = true;
    } else {
        link2.innerText = "Turn on the radio";
        bgm.remove();
        radioState = false;

    }
    
}

function loadStreetCorner() {
    clear(container);
    title1.innerText = "Street Corner";
    text1.innerText = "You are standing on a street corner. \n You've just moved to the city, and you're not quite sure where to go from here. ";
    image1.src = "images/backgrounds/streetCorner.jpg";
    link1.innerText = "Go up the street";
    link1.setAttribute("onclick", "loadDowntownStreet()");
    link2.innerText = "Go down the street";
    link2.setAttribute("onclick", "loadResidentialStreet()");
    link3.innerText = "Enter your apartment.";
    link3.setAttribute("onclick", "loadApartment()");

    container.append(title1, text1, image1, link1, link2, link3);
   
};

function loadResidentialStreet() {
    clear(container);
    title1.innerText = "Residential Street";
    text1.innerText = "You've come to a quiet street, lined with houses. \nYou wonder what life is like for all the people here.";
    image1.src = "images/backgrounds/residentialStreet.png";
    link1.innerText = "Visit the nearby park.";
    link1.setAttribute("onclick", "loadPark()");
    link2.innerText = "Go back towards town.";
    link2.setAttribute("onclick", "loadStreetCorner()");
    container.append(title1, text1, image1, link1, link2);
};


function loadDowntownStreet() {
    clear(container);
    title1.innerText = "Downtown Street";
    text1.innerText = "You arrive at the downtown area. \nThe streets are lined by large office buildings and shops.";
    text2.innerText = "You see the entrance for a nightclub, and an alleyway.\nFurther down the street, you see the city library.";
    image1.src = "images/backgrounds/downtownStreet.jpg";
    link1.innerText = "Enter the nightclub.";
    link1.setAttribute("onclick", "loadNightClubEntrance()");
    link2.innerText = "Go back towards the residential area.";
    link2.setAttribute("onclick", "loadStreetCorner()");
    link3.innerText = "Enter the alleyway.";
    link3.setAttribute("onclick", "loadAlleyway()");
    link4.innerText = "Go towards the library"
    link4.setAttribute("onclick", "loadLibraryOutside()");
    container.append(title1, text1, text2, image1, link1, link3, link4, link2);

};

function loadNightClubEntrance() {
    clear(container);
    bgm.src = "/audio/music/nightclub/nightclub" + randomInclusive(1, 7) + ".mp3";
    title1.innerText = "Nightclub";
    text1.innerText = "You enter the nightclub. \nThere's not too many people right now, but the music is playing.\nYou feel like you've heard this song before.";
    image1.src = "images/backgrounds/nightclubEntrance.jpg";
    link2.innerText = "Go outside.";
    link2.setAttribute("onclick", "loadDowntownStreet()");
    

    container.append(title1, text1, image1, link2, bgm);
    bgm.play();
    
};

function loadAlleyway() {
    clear(container);
    title1.innerText = "Alleyway";
    text1.innerText = "It's a dirty alleyway. \nYou see a stairwell, leading down into the basement of one of the buildings. \nIt looks very sketchy.";
    image1.src = "images/backgrounds/alleyway.jpg";
    link1.innerText = "Go down the stairwell."
    link1.setAttribute("onclick", "loadUndergroundShop()");
    link2.innerText = "Return to the street.";
    link2.setAttribute("onclick", "loadDowntownStreet()");
    

    container.append(title1, text1, image1, link1, link2);
    executeEvent(homelessEvent, 15);
};

function loadUndergroundShop() {
    clear(container);
    title1.innerText = "Streetwear Shop";
    text1.innerText = "You stand in a small shop, run out of an apartment block's basement.\nClothes racks are tightly packed with fashionable clothes, many of them used.";
    image1.src = "images/backgrounds/undergroundShop.jpg";
    link2.innerText = "Return to the alleyway.";
    link2.setAttribute("onclick", "loadAlleyway()");
    

    container.append(title1, text1, image1, link2);
};



function loadPark () {
    clear(container);
    title1.innerText = "Public Park";
    text1.innerText = "You come to the neighborhood park. \nThere are kids playing, and families relaxing together.";
    image1.src = "images/backgrounds/park.jpg";
    link2.innerText = "Go to the street.";
    link2.setAttribute("onclick", "loadResidentialStreet()");
    
    container.append(title1, text1, image1, link2);
};

function loadLibraryOutside() {
    clear(container);
    title1.innerText = "Public Library";
    text1.innerText = "You come to the public library.\nYou watch as people pass by along the street.";
    image1.src = "images/background/libraryEntrance.jpg";
    link1.innerText = "Enter the library.";
    link1.setAttribute("onclick", "loadLibraryEntrance()");
    link2.innerText = "Leave the library";
    link2.setAttribute("onclick", "loadDowntownStreet()");
    container.append(title1, text1, image1, link1, link2);
  };
  
  function loadLibraryEntrace() {
    clear(container);
    title1.innerText = "Library Entrance";
    text1.innerText = "You stand in the lobby of the large library.\nYou see many long aisles of bookshelves.";
    link1.innerText = "Roam the bookshelves.";
    link2.setAttribute("onclick", "exploreLibrary()");
    link2.innerText = "Go outside.";
    link2.setAttribute("onclick", "loadLibraryOutside()");
    container.append(title1, text1, image1, link1, link2);
  };





//Event functions
function homelessEvent() {
    text2.innerText = "You see a homeless man sitting in the alleyway, resting with his back to the wall.\nThe years have clearly been rough on him. You wonder what to do.";
    image2.src = "images/events/homelessMan.jpg";
    link3.innerText = "Give the poor old man some change.";
    link3.setAttribute("onclick", "homelessGive()");
    link4.innerText = "Ignore him and keep walking.";
    link4.setAttribute("onclick", "homelessIgnore()");
    image1.after(text2, image2, link3, link4);
    
};

function homelessGive() {
    if (homelessIgnoreToken > 0) {
        homelessIgnoreToken --;
    } else {
        homelessGiveToken ++;
    };
    const moneyGiven = randomInclusive(1, 10);
    money -= moneyGiven;
    text2.innerText = "You give the man " + moneyGiven + "dollars. \n He thanks you briefly, before zoning out again.";
    link3.remove();
    link4.remove();
    console.log(money); //TODO: Remove after testing
};

function homelessIgnore() {
    homelessIgnoreToken ++;
    if (homelessGiveToken < 0) {homelessGiveToken --};
    text2.innerText = "You ignore the dirty old man and continue walking.";
    image2.remove();
    link3.remove();
    link4.remove();

};


function exploreLibrary() {
    //TODO: Create book searching event.
}