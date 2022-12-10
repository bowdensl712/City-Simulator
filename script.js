//General Elements
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

//Strangers Framework Elements
const strangerLink1 = document.createElement("p");
link4.setAttribute("class", "link");
const strangerLink2 = document.createElement("p");
link4.setAttribute("class", "link");
const strangerLink3 = document.createElement("p");
link4.setAttribute("class", "link");
const strangerImage1 = document.createElement("img");
strangerImage1.setAttribute("class", "image");
const strangerImage2 = document.createElement("img");
strangerImage2.setAttribute("class", "image");
const strangerImage3 = document.createElement("img");
strangerImage3.setAttribute("class", "image");

//Special Variables
const bgm = new Audio();
bgm.type = "audio/mpeg";
bgm.autoplay = "true";
bgm.volume = ".3"
const sidebar = document.getElementById("sidebar");
const sidebarButton = document.getElementById("sidebarButton");

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

let sidebarToggle = false;
function toggleSidebar() {
    if (sidebarToggle === false) {
        sidebar.style.width = "250px";
        sidebarButton.style.left = "250px";
        sidebarToggle = true;
    } else  if (sidebarToggle === true) {
        sidebar.style.width = "0";
        sidebarButton.style.left = "0";
        sidebarToggle = false;

    }
}


function executeEvent(functionName, chance) {
    const rolledDice = randomInclusive(1, 100);
    if (chance >= rolledDice) {
        functionName();
    };
//Note: Place this function AFTER the container.append() function when executing!
};


//Sidebar
let inventoryButton = document.getElementById("inventoryButton");
let moneyDisplay = document.getElementById("moneyDisplay");
moneyDisplay.innerText = money + " dollars";

//Inventory
let inventoryState = false;
const inventoryPage = document.createElement("div");
inventoryPage.setAttribute("id", "inventoryPage");
const inventoryTitle = document.createElement("h1");
inventoryTitle.innerText = "Inventory";
inventoryTitle.setAttribute("id", "inventoryTitle");
const inventoryGrid = document.createElement("div");
inventoryGrid.setAttribute("id", "inventoryGrid");

let inventoryContents = [["Test"], ["Can you see this?"]];

//Item List [0-Code, 1-Name, 2-Description, 3-Type, 4-Value, 5-Trait, 6-Image]
const itemList = [
    //Foods
    [0, "Apple", "A delicious-looking red apple.", "food", 1, 5],
    [1, "Banana", "A nice, ripe banana, free of any bruises.", "food", 1, 5],
    [2, "Orange", "A fresh orange.", "food", 1, 5],
    [3, "Lemon", "A bright yellow lemon.", "food", 1, 5],
    [4, "Green apple", "A bit more sour than its red cousin.", "food", 1, 5],
    [5, "Grapefruit", "Quite sour, but very refreshing.", "food", 1, 5],
    [6, "Avocado", "If only I had some toast...", "food", 1, 5],
    [7, "Tomato", "A ripe and tasty looking tomato. Not much fun to eat as-is, though.", "food", 1, 5],
    [8, "French bread", "A whole loaf of freshly baked french bread.", "food", 2, 20],
    [9, "Donut", "", "food", 1, 10],
    [10, "Hotdog", "", "food", 1, 15],
    [11, "Hamburger", "", "food", 1, 15],
    [12, "Sandwich", "", "food", 1, 15],
    [13, "Pizza", "", "food", 1, 15],
    [14, "Chocolate", "", "food", 1, 10],
    [15, "Candy", "", "food", 1, 5],
    [16, "Egg-salad sandwich", "", "food", 1, 15],
    [17, "Cheese", "", "food", 1, 10],
    [18, "Milk", "", "food", 1, 10],
    [19, "Yogurt", "", "food", 1, 10],
    [20, "Cereal", "", "food", 1, 10],
    [21, "French fries", "", "food", 1, 10],
    [22, "Chicken nuggets", "", "food", 1, 15],
    [23, "Buffalo wings", "", "food", 1, 15],
    [24, "Meatloaf", "", "food", 1, 15],
    [25, "Steak", "", "food", 1, 25],
    [26, "Beef stew", "", "food", 1, 20],
    [27, "Spaghetti", "", "food", 1, 20],
    [28, "Alfredo fettucine", "", "food", 1, 20],
    [29, "Potato salad", "", "food", 1, 10],
    [30, "Potato chips", "", "food", 1, 10],
    [31, "Quesadilla", "", "food", 1, 15],
    [32, "Taco", "", "food", 1, 15],
    [33, "Burrito", "", "food", 1, 20],
    [34, "Nachos", "", "food", 1, 15],
    [35, "Plum", "", "food", 1, 5],
    [36, "Passionfruit", "", "food", 1, 5],
    [37, "Pineapple", "", "food", 1, 5],
    [38, "Kiwi", "", "food", 1, 5],
    [39, "Blueberries", "", "food", 1, 5],
    [40, "Blackberries", "", "food", 1, 5],
    [41, "Raspberries", "", "food", 1, 5],
    [42, "Macaron", "", "food", 1, 10],
    [43, "Eclair", "", "food", 1, 10],
    [44, "Cake", "", "food", 1, 10],
    [45, "Muffin", "", "food", 1, 10],
    [46, "Bagel", "", "food", 1, 10],
    [47, "Banana bread", "", "food", 1, 15],
    [48, "Sweet potato", "", "food", 1, 10],
    [49, "Baked potato", "", "food", 1, 10],
    [50, "BLT", "", "food", 1, 15],
    
    //Clothes
    //TODO: Add clothes
    
];

function toggleInventory() {
    if (inventoryState === false) {
        container.parentNode.insertBefore(inventoryPage, container);
        container.remove();
        inventoryPage.append(inventoryTitle, inventoryGrid);
        toggleSidebar();
        populateInventory();
        inventoryState = true;
    } else if (inventoryState === true) {
        while (inventoryGrid.firstChild) {
            inventoryGrid.firstChild.remove();
        }
        inventoryPage.parentNode.insertBefore(container, inventoryPage);
        inventoryPage.remove();
        inventoryState = false;
    } else {
        console.error("Your inventory state isn't boolean!")
    }
}

function populateInventory() {
    for (let i = 0; i < 64; i++) {
        if (inventoryContents[i] != undefined) {
            let inventoryItem = document.createElement("div");
            inventoryItem.setAttribute("class", "inventoryItem");
            inventoryItem.innerText = inventoryContents[i];
            inventoryGrid.append(inventoryItem);
        } else {
            let inventoryItem = document.createElement("div");
            inventoryItem.innerText = "Empty inventory slot";
            inventoryItem.setAttribute("class", "emptyInventoryItem");
            inventoryGrid.append(inventoryItem);
        }



    }
}


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
        bgm.play();
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
        bgm.play();

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
    link4.innerText = "Go to the commercial street";
    link4.setAttribute("onclick", "loadCommercialStreet()");

    container.append(title1, text1, image1, link1, link2, link4, link3);
    strangersFramework();
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
    strangersFramework();
};


//Commercial Street

function loadCommercialStreet() {
    clear(container);
    title1.innerText = "Commercial Street";
    text1.innerText = "You come to a street lined with shops.\nIt's very convenient, being this close to your apartment.\nYou see a supermarket, as well as some other shops.";
    image1.src = "images/backgrounds/commercialStreet.jpg"; //TODO: Add picture
    link1.innerText = "Go towards the supermarket.";
    link1.setAttribute("onclick", "loadSupermarketEntrance()");

    link2.innerText = "Go back towards your apartment.";
    link2.setAttribute("onclick", "loadStreetCorner()");

    container.append(title1, text1, image1, link1, link2);
};

function loadSupermarketEntrance() {
    clear(container);
    title1.innerText = "Supermarket Entrance";
    text1.innerText = "You come to the supermarket."
    image1.src = "images/backgrounds/supermarketEntrance.jpg"; //TODO: Add picture
    link1.innerText = "Enter the supermarket.";
    link1.setAttribute("onclick", "loadSupermarket()");
    link2.innerText = "Go back to the street.";
    link2.setAttribute("onclick", "loadCommercialStreet()");

    container.append(title1, text1, image1, link1, link2);
};

function loadSupermarket() {
    clear(container);
    title1.innerText = "Supermarket";
    text1.innerText = "The aisles of the supermarket stretch out before you.\nPeople pass by with carts and baskets, browsing the aisles."
    image1.src = "images/backgrounds/supermarket.jpg";
    link2.setAttribute("onclick", "loadSupermarketEntrance()");

    container.append(title1, text1, image1, link2);
}


//Downtown Street

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
    strangersFramework();

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


//Library

function loadLibraryOutside() {
    clear(container);
    title1.innerText = "Public Library";
    text1.innerText = "You come to the public library.\nYou watch as people pass by along the street.";
    image1.src = "images/backgrounds/libraryOutside.jpg";
    link1.innerText = "Enter the library.";
    link1.setAttribute("onclick", "loadLibraryEntrance()");
    link2.innerText = "Leave the library";
    link2.setAttribute("onclick", "loadDowntownStreet()");
    container.append(title1, text1, image1, link1, link2);
  };
  
  function loadLibraryEntrance() {
    clear(container);
    title1.innerText = "Library Entrance";
    text1.innerText = "You stand in the lobby of the large library.\nYou see many long aisles of bookshelves.";
    image1.src = "images/backgrounds/libraryEntrance.jpg";
    link1.innerText = "Roam the bookshelves.";
    link1.setAttribute("onclick", "exploreLibrary()");
    link3.innerText = "Go deeper into the library";
    link3.setAttribute("onclick", "loadLibraryDepths()");
    link2.innerText = "Go outside.";
    link2.setAttribute("onclick", "loadLibraryOutside()");
    container.append(title1, text1, image1, link1, link3, link2);
  };

  function loadLibraryDepths() {
    clear(container);
    title1.innerText = "Library Depths";
    text1.innerText = "After wandering the maze of bookshelves, you find yourself in a back corner of the library.\nThere's nobody else here, and it seems like there hasn't been in a while.";
    image1.src = "images/backgrounds/libraryDepths.jpg";
    link1.innerText = "Explore the depths of the library.";
    link1.setAttribute("onclick", "exploreLibraryDepths()");
    link2.innerText = "Return to the library entrance.";
    link2.setAttribute("onclick", "loadLibraryEntrance()");
    container.append(title1, text1, image1, link1, link2);
    
  }





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
    //TODO: Add a result that "unlocks" the library depths, instead of being available by default.
};

function exploreLibraryDepths() {
    //TODO: Create rare book searching event.
}


//Strangers framework
function strangersFramework(locationType) {
    let rolledDice = randomInclusive(51, 80); //TODO: Reset to 1-100 after testing
    if (rolledDice > 50 && rolledDice <= 80) {
        //TODO: Spawn one person
        let stranger1 = spawnStranger(locationType);
        strangerLink1.innerText = "You see " + stranger1[0] +". They're " + stranger1[1] +".";
        strangerImage1.src = stranger1[2];
        strangerLink1.setAttribute("onclick", "container.insertBefore(strangerImage1, strangerLink1.nextSibling)");
        container.insertBefore(strangerLink1, link1);
    } else if (rolledDice > 80 && rolledDice <= 95) {
        //TODO: Spawn two people
    } else if (rolledDice > 95) {
        //TODO: Spawn three people
    } else {console.error("strangersFramework is broken!")};
    console.log(rolledDice);





}

function spawnStranger(locationType) {
    let coinflip = randomInclusive(1,2);
    let strangerName;
    let strangerGender;
    let strangerPicture;
    if (coinflip === 1) {
        strangerGender = "Female";
        strangerName = whiteGirlNames[Math.floor(Math.random()*whiteGirlNames.length)];
        strangerPicture = "images/strangers/whiteGirls/whiteGirl" + randomInclusive(1, 1) + ".jpg";
    } else if (coinflip === 2) {
        strangerGender = "Male";
        strangerName = whiteGuyNames[Math.floor(Math.random()*whiteGuyNames.length)];
        strangerPicture = "images/strangers/whiteGuys/whiteGuy" + randomInclusive(1, 1) + ".jpg";
    };
    
    
    return [strangerName, strangerGender, strangerPicture];
};

let strangersList = [

];

let whiteGirlNames = ["Jessica", "Veronica", "Claire", "Ashley", "Olivia", "Emma", "Charlotte", "Amelia", "Ava", "Sophia", "Isabella", "Mia", "Luna", "Elizabeth", "Abigail", "Emily", "Penelope", "Madison", "Lily", "Grace", "Aurora", "Violet", "Zoey", "Willow", "Hannah", "Leah", "Lucy", "Ivy", "Audrey", "Autumn", "Bella", "Hailey", "Ariana", "Jade", "Eva", "Maria", "Julia", "Rose", "Margaret", "Mary", "Lucia", "Magnolia", "Alexandra", "Juliette", "Chloe", "Anastasia", "Brianna", "Molly", "Amy", "Belle", "Sara", "Morgan", "Vera", "Octavia", "Brooke", "Dakota", "Reagan", "Daphne", "Evie", "Paige", "Rebecca", "Lia", "Dahlia", "Brooklynn", "Ophelia", "Catherine", "Briella", "Adriana", "Nicole"];
let whiteGuyNames = ["Noah", "Oliver", "Elijah", "James", "William", "Benjamin", "Lucas", "Henry", "Ted", "Jack", "Alexander", "Danny", "Logan", "John", "David", "Luke", "Anthony", "Thomas", "Dylan", "Charles", "Caleb", "Christopher", "Isaiah", "Andrew", "Joshua", "Oliver", "Nathan", "Eli", "Ryan", "Jonathan", "Connor", "Sawyer", "Myles", "Walker", "George", "Lucas"];
