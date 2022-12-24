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
const link6 = document.createElement("p");
link6.setAttribute("class", "link");
const link7 = document.createElement("p");
link7.setAttribute("class", "link");
const image1 = document.createElement("img");
image1.setAttribute("class", "image");
const image2 = document.createElement("img");
image2.setAttribute("class", "image");
const image3 = document.createElement("img");
image3.setAttribute("class", "image");
const image4 = document.createElement("img");
image4.setAttribute("class", "image");
const video1 = document.createElement("video");
video1.setAttribute("class", "video");
const video2 = document.createElement("video");
video1.setAttribute("class", "video");
const video3 = document.createElement("video");
video1.setAttribute("class", "video");
const video4 = document.createElement("video");
video1.setAttribute("class", "video");

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
let hasCamera = false;
let hasLaptop = false;


//In-Game Variables
let money = 1000;
let date = new Date("2023-04-01T07:00:00");


//Functions
function clear(parent) {
    while (parent.firstChild) { parent.removeChild(parent.firstChild) }; 
};

function randomInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function randomArrayItem(array) {
    return array[Math.floor(Math.random()*array.length)];
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

    };
};

function changeMoney(amount) {
    money += amount;
    moneyDisplay.innerText = money + " dollars";
};


function executeEvent(functionName, chance) { //TODO: Replace by including chance in each function.
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
let dateDisplay = document.getElementById("dateDisplay");
dateDisplay.innerText = date.toLocaleString("en-US", {weekday: "short", month: "short", day: "numeric", hour: '2-digit', minute:'2-digit'});


//Inventory
let inventoryState = false;
const inventoryPage = document.createElement("div");
inventoryPage.setAttribute("id", "inventoryPage");
const inventoryTitle = document.createElement("h1");
inventoryTitle.innerText = "Inventory";
inventoryTitle.setAttribute("id", "inventoryTitle");
const inventoryGrid = document.createElement("div");
inventoryGrid.setAttribute("class", "inventoryGrid");
const inventoryClose = document.createElement("p");
inventoryClose.innerText = "Close Inventory.";
inventoryClose.setAttribute("class", "link");
inventoryClose.setAttribute("onclick", "toggleInventory()");

let inventoryContents = [];


//Item List [0-Code, 1-Name, 2-Description, 3-Type, 4-Value, 5-Trait, 6-Image]
const foodItemList = [//Foods
    [0, "Apple", "A delicious-looking red apple.", "food", 1, 5, "images/items/food/0.jpg"],
    [1, "Banana", "A nice, ripe banana, free of any bruises.", "food", 1, 5, "images/items/food/1.jpg"],
    [2, "Orange", "A fresh orange.", "food", 1, 5, "images/items/food/2.jpg"],
    [3, "Lemon", "A bright yellow lemon.", "food", 1, 5, "images/items/food/3.jpg"],
    [4, "Green apple", "A bit more sour than its red cousin.", "food", 1, 5, "images/items/food/4.jpg"],
    [5, "Grapefruit", "Quite sour, but very refreshing.", "food", 1, 5, "images/items/food/5.jpg"],
    [6, "Avocado", "If only I had some toast...", "food", 1, 5, "images/items/food/6.jpg"],
    [7, "Tomato", "A ripe and tasty looking tomato. Not much fun to eat as-is, though.", "food", 1, 5, "images/items/food/7.jpg"],
    [8, "French bread", "A whole loaf of freshly baked french bread.", "food", 2, 20, "images/items/food/8.jpg"],
    [9, "Donut", "", "food", 1, 10, "images/items/food/9.jpg"],
    [10, "Hotdog", "", "food", 1, 15, "images/items/food/10.jpg"],
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
];

let chineseSupermarketList = [
    [0, "Latiao", "Spicy tofu strips, dripping with chili oil.", "food", 1, 10, "images/items/chineseSupermarketItems/0.jpg"],
    [1, "Xiaoyu", "Small dried fish, soaked in spicy oil.", "food", 1, 10, "images/items/chineseSupermarketItems/1.jpg"],
    [2, "Exotic Chips", "Spicy Crayfish Flavor", "food", 1, 10, "images/items/chineseSupermarketItems/2.jpg"],
    [3, "Exotic Chips", "Fried Crab Flavor", "food", 1, 10, "images/items/chineseSupermarketItems/3.jpg"],
    [4, "Exotic Chips", "Lime Flavor", "food", 1, 10, "images/items/chineseSupermarketItems/4.jpg"],
    [5, "Exotic Chips", "Cucumber Flavor", "food", 1, 10, "images/items/chineseSupermarketItems/5.jpg"],
    [6, "Hawthorn Flakes", "Snack made from dried hawthorn fruit, pressed into disks. Tastes like cranberry.", "food", 1, 5, "images/items/chineseSupermarketItems/6.jpg"],
    [7, "Mango Cakes", "Snack cakes, with a mango filling.", "food", 2, 10, "images/items/chineseSupermarketItems/7.jpg"],
    [8, "Pineapple Cakes", "Snack cakes, with a pineapple filling.", "food", 2, 10, "images/items/chineseSupermarketItems/8.jpg"],
    [9, "Harbin Beer", "A beer from northern China.", "food", 2, 10, "images/items/chineseSupermarketItems/9.jpg"],
    [10, "Tsingtao Beer", "The essential Chinese beer.", "food", 2, 10, "images/items/chineseSupermarketItems/10.jpg"],
    [11, "Odd Beer", "An exotic beer, in a strangely shaped bottle...", "food", 2, 10, "images/items/chineseSupermarketItems/11.jpg"]
];

let electronicsStoreList = [
    [0, "Camera", "A modern digital camera. Not the most expensive, but good enough for your purposes.", "tool", 250, null, "images/items/electronicsStoreItems/0.jpg"],
    [1, "Laptop", "A mid-range laptop, more than enough for browsing the internet and some light gaming.", "tool", 250, null, "images/items/electronicsStoreItems/1.jpg"]
];

    //Clothes
    //TODO: Add clothes

function toggleInventory() {
    if (inventoryState === false) {
        container.parentNode.insertBefore(inventoryPage, container);
        container.remove();
        inventoryPage.append(inventoryTitle, inventoryGrid, inventoryClose);
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
        console.error("Your inventory state isn't boolean!");
    }
}

function populateInventory() {
    inventoryContents.forEach((element) => {
            let inventoryItem = document.createElement("div");
            inventoryItem.setAttribute("onclick", "inventoryPopup(this, " + JSON.stringify(element) + ");");
            let inventoryPicture = document.createElement("img");
            inventoryPicture.setAttribute("class", "inventoryPicture");
            inventoryPicture.src = element[6];
            inventoryItem.setAttribute("class", "inventoryItem");
            inventoryItem.innerText = element[1];
            inventoryItem.append(inventoryPicture);
            inventoryGrid.append(inventoryItem);
    })};

    let popup = document.createElement("div");
function inventoryPopup(element, array) {
    popup.remove();
    popup.innerText = array[1];
    popup.setAttribute("class", "inventoryPopup");
    let popupPicture = document.createElement("img");
    popupPicture.setAttribute("class", "inventoryItem");
    popupPicture.src = array[6];
    let popupDescription = document.createElement("p");
    popupDescription.innerText = array[2];
    let popupType = document.createElement("p");
    popupType.innerText = array[3];
    let popupValue = document.createElement("p");
    popupValue.innerText = "Value: " + array[4] + " dollars";
    popup.addEventListener("click", function(e) {
        e.stopPropagation();
        popup.remove();
    });

    element.append(popup);
    popup.append(popupPicture, popupDescription, popupType, popupValue);

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

function loadEvents(array) { //Loads the array of events for a specific location.
    array.forEach((func) => {func()}); 
} ;











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
        link2.innerText = "Turn off the radio.";
        bgm.play();
    } else {
        link2.innerText = "Turn on the radio.";
    };

    link4.innerText = "Go to the bookshelf.";
    link4.setAttribute("onclick", "loadBookshelf()");

    link3.innerText = "Go outside.";
    link3.setAttribute("onclick", "checkTime(loadStreetCorner, nightStreetCorner)");
    container.append(title1, text1, image1, link2, link4, link3);

    if (hasLaptop === true) {
        link5.innerText = "Use your laptop.";
        link5.setAttribute("onclick", "loadLaptop()");
        container.insertBefore(link5, link4);
    };
    loadEvents(apartmentEvents);
};
let apartmentEvents = [];


function toggleRadio() { //TODO: Rework so that radio element is outside of "container", and is only turned off when leaving apartment, etc.
    if (radioState === false) {
        link2.innerText = "Turn off the radio.";
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


//Bookshelf
let bookshelfContents = [['test book', 'images/backgrounds/libraryEntrance.jpg', 'images/backgrounds/residentialStreet.png', 'images/backgrounds/alleyway.jpg']];
function loadBookshelf() {
    title1.remove();
    text1.remove();
    image1.remove();
    link1.remove();
    link2.remove();
    link3.remove();
    link4.remove();

    image1.src = "images/backgrounds/bookshelf.jpg";
    text1.innerText = "You stand in front of your bookshelf.";
    link1.innerText = "Photo Album";
    link1.setAttribute("onclick", "loadPhotoAlbum()");
    link2.innerText = "Step away from the bookshelf.";
    link2.setAttribute("onclick", "leaveBookshelf()");
    container.append(image1, text1, link1, link2);
    loadBookshelfContents();
};

function loadBookshelfContents() {
    bookshelfContents.forEach((element) => {
        let bookLink = document.createElement('p');
        bookLink.setAttribute('class', 'link');
        bookLink.setAttribute('id', 'bookLink');
        bookLink.innerText = element[0];
        let bookIndex = bookshelfContents.indexOf(element);
        bookLink.setAttribute('onclick', 'loadBook(bookshelfContents[' + bookIndex + '])');
        container.insertBefore(bookLink, link1);
    });
};

function leaveBookshelf() {
    image1.remove();
    text1.remove();
    link1.remove();
    link2.remove();
    removeBooksList();
    title1.innerText = "Your Apartment";
    text1.innerText = "Your new apartment. It still doesn't quite feel like home.";
    image1.src = "images/backgrounds/apartment.jpg";
    if (radioState === true) {
        link2.innerText = "Turn off the radio";
    } else { 
        link2.innerText = "Turn on the radio"};
    link2.setAttribute("onclick", "toggleRadio()");
    link4.innerText = "Go to the bookshelf";
    link4.setAttribute("onclick", "loadBookshelf()");

    link3.innerText = "Go outside.";
    link3.setAttribute("onclick", "checkTime(loadStreetCorner, nightStreetCorner)");
    container.append(title1, text1, image1, link2, link4, link3);
    if (hasLaptop === true) {
        link5.innerText = "Use your laptop.";
        link5.setAttribute("onclick", "loadLaptop()");
        container.insertBefore(link5, link4);
    };

};


function removeBooksList() {
    while (document.getElementById('bookLink') != null) {
        let booklink = document.getElementById('booklink');
        bookLink.remove();
    };
};

//Photo Album
let photoAlbum = document.createElement("div");
photoAlbum.setAttribute("id", "photoAlbum");
//Album Contents [[0-Name, 1-Description, 2-File]]
let photoAlbumContents = [

];

function loadPhotoAlbum() {
    image1.remove();
    text1.remove();
    link1.remove();
    link2.remove();
    removeBooksList();
    title1.innerText = "Photo album";
    container.append(title1, photoAlbum);
    photoAlbumContents.forEach((element) => {
        let photoAlbumEntry = document.createElement("div");
        photoAlbumEntry.setAttribute("class", "photoAlbumEntry");
        photoAlbum.append(photoAlbumEntry);
        let photoAlbumName = document.createElement("p");
        photoAlbumName.setAttribute("class", "photoAlbumText");
        photoAlbumName.innerText = element[0];
        let photoAlbumDesc = document.createElement("p");
        photoAlbumDesc.setAttribute("class", "photoAlbumText");
        photoAlbumDesc.innerText = element[1];
        let photoAlbumPicture = document.createElement("img");
        photoAlbumPicture.setAttribute("class", "photoAlbumPicture");
        photoAlbumPicture.src = element[2];
        photoAlbumEntry.append(photoAlbumPicture, photoAlbumName, photoAlbumDesc);
    });
    link2.innerText = "Put back the album";
    link2.setAttribute("onclick", "returnPhotoAlbum()");
    container.append(link2);
    
};

function returnPhotoAlbum() {
    title1.remove();
    while (photoAlbum.firstChild) {
        photoAlbum.firstChild.remove();
    };
    photoAlbum.remove();
    link2.remove();
    image1.src = "images/backgrounds/bookshelf.jpg";
    text1.innerText = "You stand in front of your bookshelf.";
    link1.innerText = "Photo Album";
    link1.setAttribute("onclick", "loadPhotoAlbum()");
    link2.innerText = "Step away from the bookshelf.";
    link2.setAttribute("onclick", "leaveBookshelf()");

    container.append(image1, text1, link1, link2);
    loadBookshelfContents();
};


//Load Book
let pageNumber;
let currentBook;
function loadBook(book) { //TODO: Test to make sure it works
    image1.remove();
    text1.remove();
    link1.remove();
    link2.remove();
    removeBooksList();
    pageNumber = 0;
    currentBook = book;
    
    let bookPage = document.createElement('div');
    bookPage.setAttribute('id', 'bookPage');
    bookPage.setAttribute('onclick', 'loadNewPage()');
    let bookTitle = document.createElement('h1');
    bookTitle.innerText = book[0];
    bookTitle.setAttribute('id', 'bookTitle');
    let bookImage = document.createElement("img");
    bookImage.src = "images/backgrounds/bookshelf.jpg";
    bookImage.setAttribute('id', 'bookImage');
    bookImage.style.display = "none";
    let returnBookLink = document.createElement('p');
    returnBookLink.setAttribute('class','link');
    returnBookLink.setAttribute('id','returnBookLink');
    returnBookLink.setAttribute('onclick', 'returnBook()');
    returnBookLink.innerText = "Put the book back.";
    container.append(bookPage, returnBookLink);
    bookPage.append(bookTitle, bookImage);
};

function loadNewPage() {
    if (document.getElementById("bookTitle") != null) {bookTitle.remove()};
    bookImage.style.display = "block";
    pageNumber++;
    if (currentBook[pageNumber] != undefined) {
        bookImage.src = currentBook[pageNumber];
    };

}

function returnBook() {
    let bookPage = document.getElementById('bookPage');
    let returnBookLink = document.getElementById('returnBookLink');
    bookPage.remove();
    returnBookLink.remove();
    loadBookshelf();
};










//Locations

function loadStreetCorner() {
    clear(container);
    title1.innerText = "Street Corner";
    text1.innerText = "You are standing on a street corner. \n You've just moved to the city, and you're not quite sure where to go from here. ";
    image1.src = "images/backgrounds/streetCorner.jpg";
    link1.innerText = "Head towards downtown.";
    link1.setAttribute("onclick", "checkTime(loadDowntownStreet, nightDowntownStreet)");
    link2.innerText = "Go towards the residential area.";
    link2.setAttribute("onclick", "checkTime(loadResidentialStreet, nightResidentialStreet)");
    link3.innerText = "Enter your apartment.";
    link3.setAttribute("onclick", "loadApartment()");
    link4.innerText = "Go to the commercial street.";
    link4.setAttribute("onclick", "checkTime(loadCommercialStreet, nightCommercialStreet)");

    container.append(title1, text1, image1, link1, link2, link4, link3);
    loadEvents(streetCornerEvents);
};
let streetCornerEvents = [strangersFramework, findItem];





////////
//////////////// Residential Area
////////
function loadResidentialStreet() {
    clear(container);
    title1.innerText = "Residential Street";
    text1.innerText = "You've come to a quiet street, lined with houses. \nYou wonder what life is like for all the people here.";
    image1.src = "images/backgrounds/residentialStreet.png";
    link1.innerText = "Visit the nearby park.";
    link1.setAttribute("onclick", "checkTime(loadPark, nightPark)");
    link2.innerText = "Go back towards town.";
    link2.setAttribute("onclick", "checkTime(loadStreetCorner, nightStreetCorner)");
    container.append(title1, text1, image1, link1, link2);
    loadEvents(residentialStreetEvents);
};
let residentialStreetEvents = [strangersFramework, findItem];

function loadPark () {
    clear(container);
    title1.innerText = "Public Park";
    text1.innerText = "You come to the neighborhood park. \nThere are kids playing, and families relaxing together.";
    image1.src = "images/backgrounds/park.jpg";
    link2.innerText = "Go to the street.";
    link2.setAttribute("onclick", "checkTime(loadResidentialStreet, nightResidentialStreet)");
    
    container.append(title1, text1, image1, link2);
    loadEvents(parkEvents);
};
let parkEvents = [strangersFramework, findItem, loadTrash];










////////
//////////////// Commercial Street
////////
function loadCommercialStreet() {
    clear(container);
    title1.innerText = "Commercial Street";
    text1.innerText = "You come to a street lined with shops.\nIt's very convenient, being this close to your apartment.\nYou see a supermarket, an antique shop, and some other shops.";
    image1.src = "images/backgrounds/commercialStreet.jpg"; //TODO: Add picture
    link1.innerText = "Go towards the supermarket.";
    link1.setAttribute("onclick", "loadSupermarketEntrance()");
    link3.innerText = "Enter the antique shop.";
    link3.setAttribute("onclick", "loadAntiqueShop()");
    link4.innerText = "Enter the electronics store.";
    link4.setAttribute("onclick", "loadElectronicsStore()");
    link5.innerText = "Enter the alleyway.";
    link5.setAttribute("onclick", "checkTime(loadCommercialAlley, nightCommercialAlley)");
    link2.innerText = "Go back towards your apartment.";
    link2.setAttribute("onclick", "checkTime(loadStreetCorner, nightStreetCorner)");

    container.append(title1, text1, image1, link1, link3, link4, link5, link2);
    loadEvents(commercialStreetEvents);
};
let commercialStreetEvents = [strangersFramework, findItem];

function loadSupermarketEntrance() {
    clear(container);
    title1.innerText = "Supermarket Entrance";
    text1.innerText = "You come to the supermarket."
    image1.src = "images/backgrounds/supermarketEntrance.jpg"; //TODO: Add picture
    link1.innerText = "Enter the supermarket.";
    link1.setAttribute("onclick", "loadSupermarket()");
    link2.innerText = "Go back to the street.";
    link2.setAttribute("onclick", "checkTime(loadCommercialStreet, nightCommercialStreet)");

    container.append(title1, text1, image1, link1, link2);
    loadEvents(supermarketEntranceEvents);
};
let supermarketEntranceEvents = [strangersFramework, findItem];

function loadSupermarket() {
    clear(container);
    title1.innerText = "Supermarket";
    text1.innerText = "The aisles of the supermarket stretch out before you.\nPeople pass by with carts and baskets, browsing the aisles."
    image1.src = "images/backgrounds/supermarket.jpg";
    link1.innerText = "Browse the food.";
    link1.setAttribute("onclick", "loadSupermarketFood()");
    link2.innerText = "Go back outside.";
    link2.setAttribute("onclick", "loadSupermarketEntrance()");

    container.append(title1, text1, image1, link1, link2);
    loadEvents(supermarketEvents);
};
let supermarketEvents = [strangersFramework, findItem];

function loadAntiqueShop() {
    clear(container);
    title1.innerText = "Antique Shop";
    text1.innerText = "You stand in an old antique shop.\n The walls are lined with old clocks, vases, and other knick knacks.\nThere's a faint smell of dust permeating the air.";
    image1.src = "images/backgrounds/antiqueShop.png";
    link2.innerText = "Go back outside.";
    link2.setAttribute("onclick", "checkTime(loadCommercialStreet, nightCommercialStreet)");
    
    container.append(title1, text1, image1, link2);
    loadEvents(antiqueShopEvents);
};
let antiqueShopEvents = [strangersFramework];

function loadElectronicsStore() {
    clear(container);
    title1.innerText = "Electronics Store";
    text1.innerText = "You enter the electronics store.\nComputers, phones, televisions, and other devices line the shelves.";
    image1.src = "images/backgrounds/electronicsStore.jpg";
    link1.innerText = "Browse the aisles.";
    link1.setAttribute("onclick", "loadElectronicsItems()");
    link2.innerText = "Go back outside.";
    link2.setAttribute("onclick", "checkTime(loadCommercialStreet, nightCommercialStreet)");
    container.append(title1, text1, image1, link1, link2);
    loadEvents(electronicsShopEvents);
}
let electronicsShopEvents = [strangersFramework];

function loadCommercialAlley() {
    clear(container);
    title1.innerText = "Commercial Street - Alleyway";
    text1.innerText = "You enter the alleyway behind the shops. You see service doors behind each building, and some large garbage cans.";
    image1.src = "images/backgrounds/commercialAlley.jpg";
    link2.innerText = "Go back to the street.";
    link2.setAttribute("onclick", "checkTime(loadCommercialStreet, nightCommercialStreet)");


    container.append(title1, text1, image1, link2);
    loadTrash();


};
let commercialAlleysEvent = [findItem];






////////
////////////////Downtown Street
////////
function loadDowntownStreet() {
    clear(container);
    title1.innerText = "Downtown Street";
    text1.innerText = "You arrive at the downtown area. \nThe streets are lined by large office buildings and shops.";
    text2.innerText = "You see the entrance for a nightclub, a conveniece store, and an alleyway.\nFurther down the street, you see the bus depot, and the city library.";
    image1.src = "images/backgrounds/downtownStreet.jpg";
    link1.innerText = "Enter the nightclub.";
    link1.setAttribute("onclick", "checkTime(loadNightclubEntrance, nightNightclubEntrance)");
    link2.innerText = "Go back towards the residential area.";
    link2.setAttribute("onclick", "checkTime(loadStreetCorner, nightStreetCorner)");
    link3.innerText = "Enter the alleyway.";
    link3.setAttribute("onclick", "checkTime(loadAlleyway, nightAlleyway)");
    link4.innerText = "Go towards the library."
    link4.setAttribute("onclick", "loadLibraryOutside()");
    link5.innerText = "Enter the convenience store.";
    link5.setAttribute("onclick", "loadConvenienceStoreEntrance()");
    link6.innerText = "Enter the bus depot.";
    link6.setAttribute("onclick", "loadBusDepot()");
    container.append(title1, text1, text2, image1, link1, link5, link3, link6, link4, link2);

    loadEvents(downtownStreetEvents);
};
let downtownStreetEvents = [strangersFramework, findItem];


// Nightclub
function loadNightClubEntrance() {
    clear(container);
    bgm.src = "/audio/music/nightclub/nightclub" + randomInclusive(1, 7) + ".mp3";
    title1.innerText = "Nightclub";
    text1.innerText = "You enter the nightclub. \nThere's not too many people right now, but the music is playing.\nYou feel like you've heard this song before.";
    image1.src = "images/backgrounds/nightclubEntrance.jpg";
    link2.innerText = "Go outside.";
    link2.setAttribute("onclick", "checkTime(loadDowntownStreet, nightDowntownStreet)");
    

    container.append(title1, text1, image1, link2, bgm);
    bgm.play();
    loadEvents(nightclubEntranceEvents);
    
};
let nightclubEntranceEvents = [strangersFramework, findItem];


// Convenience Store
function loadConvenienceStoreEntrance() {
    clear(container);
    title1.innerText = "Convenience Store Entrance";
    text1.innerText = "You stand in the entrance of the convenience store.\nThe shelves are stocked with snacks, toiletries, and other everyday necessities.";
    image1.src = "images/backgrounds/convenienceStoreEntrance.jpg";
    link1.innerText = "Browse the aisles.";
    link1.setAttribute("onclick", "loadConvenienceStore()");
    link2.innerText = "Leave the store.";
    link2.setAttribute('onclick', 'checkTime(loadDowntownStreet, nightDowntownStreet)');

    container.append(title1, text1, image1, link1, link2);

    loadEvents(convenienceStoreEvents);
};
let convenienceStoreEvents = [strangersFramework, findItem];

function loadConvenienceStore() {
    clear(container);
    title1.innerText = "Convenience Store Aisles";
    text1.innerText = "You walk through the aisles of the convenience store.";
    image1.src = "images/backgrounds/convenienceStore.jpg";
    link1.innerText = "Go to the register.";
    link1.setAttribute("onclick", "loadConvenienceStoreRegister()");
    link2.innerText = "Return to the entrance.";
    link2.setAttribute('onclick', 'loadConvenienceStoreEntrance()');
    container.append(title1, text1, image1, link1, link2);
    loadEvents(convenienceStoreEvents);
};

function loadConvenienceStoreRegister() {
    clear(container);
    title1.innerText = "Convenience Store Register";
    text1.innerText = "You stand in front of the register, ready to make a purchase.";
    image1.src = "images/backgrounds/convenienceStoreRegister.jpg";
    link2.innerText = "Go back to the aisles.";
    link2.setAttribute('onclick', 'loadConvenienceStoreEntrance()');
    container.append(title1, text1, image1, link2);
    loadEvents(convenienceStoreEvents);
};


// Bus Depot
function loadBusDepot() {
    clear(container);
    title1.innerText = "Bus Depot";
    text1.innerText = "You stand in the bus depot.\nOn the walls are maps of the various routes throughout the city, and the nearby region.\nYou look at the prices for the various routes...";
    image1.src = "images/backgrounds/busDepot.jpg";
    link1.innerText = "Theme Park - $15, Round-trip";
    link1.setAttribute("onclick", "travelThemePark()");
    link2.innerText = "Go outside.";
    link2.setAttribute("onclick", "checkTime(loadDowntownStreet, nightDowntownStreet)");
    container.append(title1, text1, image1, link1, link2);
    loadEvents(busDepotEvents);
};
let busDepotEvents = [strangersFramework, findItem];


// Alleyway
function loadAlleyway() {
    clear(container);
    title1.innerText = "Alleyway";
    text1.innerText = "It's a dirty alleyway. \nYou see a stairwell, leading down into the basement of one of the buildings. \nIt looks very sketchy.";
    image1.src = "images/backgrounds/alleyway.jpg";
    link1.innerText = "Go down the stairwell."
    link1.setAttribute("onclick", "loadUndergroundShop()");
    link2.innerText = "Return to the street.";
    link2.setAttribute("onclick", "checkTime(loadDowntownStreet, nightDowntownStreet)");
    link3.innerText = "Enter Chinatown.";
    link3.setAttribute("onclick", "checkTime(loadChinatown, nightChinatown)");

    container.append(title1, text1, image1, link1, link3, link2);
    executeEvent(homelessEvent, 15); //TODO: Rework to fit with new event system
    loadEvents(alleywayEvents);
};
let alleywayEvents = [strangersFramework, findItem, loadTrash];


//Underground Shop
function loadUndergroundShop() {
    clear(container);
    title1.innerText = "Streetwear Shop";
    text1.innerText = "You stand in a small shop, run out of an apartment block's basement.\nClothes racks are tightly packed with fashionable clothes, many of them used.";
    image1.src = "images/backgrounds/undergroundShop.jpg";
    link2.innerText = "Return to the alleyway.";
    link2.setAttribute("onclick", "checkTime(loadAlleyway, nightAlleyway)");
    

    container.append(title1, text1, image1, link2);
    loadEvents(undergroundShopEvents);
};
let undergroundShopEvents = [strangersFramework, findItem];




////////
//////////////// Chinatown
////////
function loadChinatown() {
    clear(container);
    title1.innerText = "Chinatown";
    text1.innerText = "You arrive in Chinatown.\nIt's a small neighborhood, comprised of only a few blocks.\nThe shop signs are written in Chinese, and you hear people speaking Mandarin as you walk along the street.";
    image1.src = "images/backgrounds/chinatown.jpg";
    link1.innerText = "Enter the Chinese supermarket.";
    link1.setAttribute("onclick", "loadChineseSupermarket()");
    link2.innerText = "Go back through the alley.";
    link2.setAttribute("onclick", "checkTime(loadAlleyway, nightAlleyway)");
    container.append(title1, text1, image1, link1, link2);
};
let chinatownEvents = [];

function loadChineseSupermarket() {
    clear(container);
    title1.innerText = "Chinese Supermarket";
    text1.innerText = "You enter the store, and are greeted by shelves of exotic groceries.\nThe air is chilly from the refrigeration, and you smell a strange mix of incense, vegetables, and fish.";
    image1.src = "images/backgrounds/chineseSupermarket.jpg";
    link1.innerText = "Browse the shelves.";
    link1.setAttribute("onclick", "loadChineseSupermarketFood()");
    link2.innerText = "Go back outside.";
    link2.setAttribute("onclick", "checkTime(loadChinatown, nightChinatown)");
    container.append(title1, text1, image1, link1, link2);
};
let chineseSupermarketEvents = [];







////////
//////////////// Library
////////
function loadLibraryOutside() {
    clear(container);
    title1.innerText = "Public Library";
    text1.innerText = "You come to the public library.\nYou watch as people pass by along the street.";
    image1.src = "images/backgrounds/libraryOutside.jpg";
    link1.innerText = "Enter the library.";
    link1.setAttribute("onclick", "loadLibraryEntrance()");
    link2.innerText = "Leave the library";
    link2.setAttribute("onclick", "checkTime(loadDowntownStreet, nightDowntownStreet)");
    container.append(title1, text1, image1, link1, link2);
    loadEvents(libraryOutsideEvents);
  };
  let libraryOutsideEvents = [strangersFramework, findItem];
  
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
    loadEvents(libraryEntranceEvents);

  };
  let libraryEntranceEvents = [strangersFramework, findItem];

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
    
    
  };




////////
//////////////// Event functions
////////
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
    text2.innerText = "You give the man " + moneyGiven + " dollars. \n He thanks you briefly, before zoning out again.";
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






////////
//////////////// Strangers framework
////////
function strangersFramework(locationType) { 
    let rolledDice = randomInclusive(1, 100);
    if (rolledDice > 50 && rolledDice <= 80) {
        let stranger1 = spawnStranger(locationType);
        strangerLink1.innerText = "You see " + stranger1[0] +". They're " + stranger1[1] +".";
        strangerImage1.src = stranger1[2];
        strangerLink1.setAttribute("onclick", "container.insertBefore(strangerImage1, strangerLink1.nextSibling)");
        strangerLink1.setAttribute("class", "link");
        container.insertBefore(strangerLink1, image1.nextSibling);
    } else if (rolledDice > 80 && rolledDice <= 95) {
        let stranger1 = spawnStranger(locationType);
        strangerLink1.innerText = "You see " + stranger1[0] +". They're " + stranger1[1] +".";
        strangerImage1.src = stranger1[2];
        strangerLink1.setAttribute("onclick", "container.insertBefore(strangerImage1, strangerLink1.nextSibling)");
        strangerLink1.setAttribute("class", "link");
        container.insertBefore(strangerLink1, image1.nextSibling);
        let stranger2 = spawnStranger(locationType);
        strangerLink2.innerText = "You see " + stranger2[0] +". They're " + stranger2[1] +".";
        strangerImage2.src = stranger2[2];
        strangerLink2.setAttribute("onclick", "container.insertBefore(strangerImage2, strangerLink2.nextSibling)");
        strangerLink2.setAttribute("class", "link");
        container.insertBefore(strangerLink2, strangerLink1.nextSibling);
    } else if (rolledDice > 95) {
        let stranger1 = spawnStranger(locationType);
        strangerLink1.innerText = "You see " + stranger1[0] +". They're " + stranger1[1] +".";
        strangerImage1.src = stranger1[2];
        strangerLink1.setAttribute("onclick", "container.insertBefore(strangerImage1, strangerLink1.nextSibling)");
        strangerLink1.setAttribute("class", "link");
        container.insertBefore(strangerLink1, image1.nextSibling);
        let stranger2 = spawnStranger(locationType);
        strangerLink2.innerText = "You see " + stranger2[0] +". They're " + stranger2[1] +".";
        strangerImage2.src = stranger2[2];
        strangerLink2.setAttribute("onclick", "container.insertBefore(strangerImage2, strangerLink2.nextSibling)");
        strangerLink2.setAttribute("class", "link");
        container.insertBefore(strangerLink2, strangerLink1.nextSibling);
        let stranger3 = spawnStranger(locationType);
        strangerLink3.innerText = "You see " + stranger3[0] +". They're " + stranger3[1] +".";
        strangerImage3.src = stranger3[2];
        strangerLink3.setAttribute("onclick", "container.insertBefore(strangerImage3, strangerLink3.nextSibling)");
        strangerLink3.setAttribute("class", "link");
        container.insertBefore(strangerLink3, strangerLink2.nextSibling);
    } else {console.log("No strangers spawned")};
    console.log("Strangers Framework roll: " + rolledDice);
    //TODO: Trim people photos so they fit better
    //TODO: Add multiple lines for describing spawned strangers.

}

function spawnStranger(locationType) {
    let coinflip = randomInclusive(1,2);
    let strangerName;
    let strangerGender;
    let strangerPicture;
    if (coinflip === 1) {
        strangerGender = "Female";
        strangerName = whiteGirlNames[Math.floor(Math.random()*whiteGirlNames.length)];
        strangerPicture = "images/strangers/whiteGirls/whiteGirl" + randomInclusive(1, 10) + ".jpg";
    } else if (coinflip === 2) {
        strangerGender = "Male";
        strangerName = whiteGuyNames[Math.floor(Math.random()*whiteGuyNames.length)];
        strangerPicture = "images/strangers/whiteGuys/whiteGuy" + randomInclusive(1, 10) + ".jpg";
    };
    
    
    return [strangerName, strangerGender, strangerPicture];
};

let strangersList = [];

let whiteGirlNames = ["Jessica", "Veronica", "Claire", "Ashley", "Olivia", "Emma", "Charlotte", "Amelia", "Ava", "Sophia", "Isabella", "Mia", "Luna", "Elizabeth", "Abigail", "Emily", "Penelope", "Madison", "Lily", "Grace", "Aurora", "Violet", "Zoey", "Willow", "Hannah", "Leah", "Lucy", "Ivy", "Audrey", "Autumn", "Bella", "Hailey", "Ariana", "Jade", "Eva", "Maria", "Julia", "Rose", "Margaret", "Mary", "Lucia", "Magnolia", "Alexandra", "Juliette", "Chloe", "Anastasia", "Brianna", "Molly", "Amy", "Belle", "Sara", "Morgan", "Vera", "Octavia", "Brooke", "Dakota", "Reagan", "Daphne", "Evie", "Paige", "Rebecca", "Lia", "Dahlia", "Brooklynn", "Ophelia", "Catherine", "Briella", "Adriana", "Nicole"];
let whiteGuyNames = ["Noah", "Oliver", "Elijah", "James", "William", "Benjamin", "Lucas", "Henry", "Ted", "Jack", "Alexander", "Danny", "Logan", "John", "David", "Luke", "Anthony", "Thomas", "Dylan", "Charles", "Caleb", "Christopher", "Isaiah", "Andrew", "Joshua", "Oliver", "Nathan", "Eli", "Ryan", "Jonathan", "Connor", "Sawyer", "Myles", "Walker", "George", "Lucas"];






////////
////////////////Mini-Event Generator
////////
function findItem() {
    let rolledDice = randomInclusive(1, 100);
    if (rolledDice >= 81) {
        let findItemLink = document.createElement("p");
        findItemLink.innerText = "You see something on the ground.";
        findItemLink.setAttribute("class", "link");
        findItemLink.setAttribute("onclick", "foundItem(); this.innerText = 'You pick it up...'; this.setAttribute('class', ''); this.setAttribute('onclick', '');");
        container.append(findItemLink); //TODO: Figure out where to place it on the page, other than dead last.

    };
    console.log("find items roll: " + rolledDice)
};

let foundImagesList = [];
function foundItem() {
    //TODO: Add a dice roll to find different types of item.
    let foundPhotograph = randomArrayItem(foundImagesList);
    photoAlbumContents.push(foundPhotograph);
    

    let foundImageName = document.createElement("p");
    foundImageName.innerText = foundPhotograph[0];
    foundImageName.setAttribute("class", "photoAlbumText");
    let foundImageText = document.createElement("p");
    foundImageText.innerText = foundPhotograph[1];
    foundImageText.setAttribute("class", "photoAlbumText");
    let foundImage = document.createElement("img");
    foundImage.src = foundPhotograph[2];
    foundImage.setAttribute("class", "photoAlbumPicture");

    let imageDisplay = document.createElement("div");
    imageDisplay.setAttribute("class", "photoAlbumEntry");
    container.append(imageDisplay);
    imageDisplay.append(foundImage, foundImageName, foundImageText);
};







//TODO: Add alleys with garbage cans to residential area, street corner, commercial street.

///////// Search Trash
let normalTrash = [ //TODO: Give each item a unique code, regardless of item list.
[0, "Half-eaten sandwich", "The partially eaten leftovers of a sandwich...", "food", 1, 7, "images/items/normalTrash/0.jpg"],
[1, "Empty bottle", "An empty glass bottle. Pretty much useless.", "trash", 1, null, "images/items/normalTrash/1.jpg"],
[2, "Open can of beans", "A mostly empty can of baked beans. Only a few spoonfuls remain.", "food", 1, 3, "images/items/normalTrash/2.jpg"],
[3, "Crumpled newspaper", "A crumpled copy of last week's newspaper.", "trash", 1, null, "images/items/normalTrash/3.jpg"],
[4, "Stick", "A small tree branch.", "trash", 1, null, "images/items/normalTrash/4.jpg"],
[5, "Dirty sock", "A discarded sock. Who knows where the other one is.", "trash", 1, null, "images/items/normalTrash/5.jpg"],
[6, "Hamburger wrapper", "Much better when it still contains a hamburger.", "trash", 1, null, "images/items/normalTrash/6.jpg"],
[7, "Candy wrapper", "The wrapper from a chocolate bar.", "trash", 1, null, "images/items/normalTrash/7.jpg"],
[8, "Old baseball cap", "I suppose you could still wear it...", "apparel", 2, null, "images/items/normalTrash/8.jpg"],
[9, "Underwear", "Somebody's old underwear. Gross.", "trash", 1, null, "images/items/normalTrash/9.jpg"],
[10, "Cardboard box", "Nothing inside.", "trash", 1, null, "images/items/normalTrash/10.jpg"],
[11, "Used razor", "A dirty, old disposable razor.", "trash", 1, null, "images/items/normalTrash/11.jpg"],
[12, "Empty beer can", "An empty can of beer.", "trash", 1, null, "images/items/normalTrash/12.jpg"]
];

let specialTrash = [];

function loadTrash() {
    let trashLink = document.createElement("p");
    trashLink.setAttribute("class", "link");
    trashLink.innerText = "Search through the trash.";
    trashLink.setAttribute("onclick", "searchTrash(); this.remove()");
    container.insertBefore(trashLink, link2);
};

function searchTrash() {
    let rolledDice = randomInclusive(1, 100);
    if (rolledDice <= 85) {
        generateTrash(normalTrash);
    } else if (rolledDice >= 86 && rolledDice < 99) {
        generateTrash(specialTrash);
    } else if (rolledDice >= 99) {
        uniqueTrash(); //TODO: Create uniqueTrash function!
    } else {
        console.error("SearchTrash() function is broken!")
    };
};

function generateTrash(array) {
    let selectedTrash = randomArrayItem(array);
    let trashImage = document.createElement("img");
    trashImage.setAttribute("class", "image");
    trashImage.src = selectedTrash[6];
    let trashText = document.createElement("p");
    trashText.innerText = "You found a " + selectedTrash[1].toLowerCase() + ".\n" + selectedTrash[2];
    container.insertBefore(trashText, link2);
    container.insertBefore(trashImage, trashText);
    inventoryContents.push(selectedTrash);
};






//////////
//////////////////// Travel Locations
//////////

//Bus Depot
function travelThemePark() {
    if (money >= 15) {
        changeMoney(-15);
        loadThemeParkEntrance();
    } else {
        link1.innerText = "You don't have enough money!";
        link1.setAttribute("onclick", "");
    };
};

function loadThemeParkEntrance() {
    clear(container);
    title1.innerText = "Theme Park - Entrance";
    text1.innerText = "You stand at the gates of the local theme park.\n While it's no Disneyland, it's still a very fun destination for friends, families, and couples.\nIt bustles with people as they go in and out of the large gateway.";
    image1.src = "images/backgrounds/themeParkEntrance.jpg";
    link1.innerText = "Line up to buy a ticket.";
    link1.setAttribute("onclick", "loadThemeParkTicketBooth()");
    link2.innerText = "Take the bus back to downtown.";
    link2.setAttribute("onclick", "loadBusDepot()");


    container.append(title1, text1, image1, link1, link2);
};

function loadThemeParkTicketBooth() {
    clear(container);
    title1.innerText = "Ticket Booth";
    text1.innerText = "You wait in line for a while, and eventually find yourself at the front of the line.\nYou step up to the counter, and look at the ticket prices.";
    image1.src = "images/backgrounds/themeParkTicketBooth.jpg";
    link1.innerText = "Ticket - $25";
    link1.setAttribute("onclick", "buyThemeParkTicket()");
    link2.innerText = "On second thought, maybe I'll head back to town...";
    link2.setAttribute("onclick", "loadThemeParkEntrance");

    container.append(title1, text1, image1, link1, link2);
};

function buyThemeParkTicket() {
    if (money >= 25) {
        changeMoney(-25);
        loadThemePark1();
    } else {
        link1.innerText = "You don't have enough money!";
        link1.setAttribute("onclick", "");
    };
};

function loadThemePark1() {
    clear(container);
    title1.innerText = "Theme Park";
    text1.innerText = "You buy your ticket, and enter the park.\nThe large park stretches out in front of you, with many rides, food stands, and other attractions.\nWhere will you go first?";
    image1.src = "images/backgrounds/themePark1.jpg";
    link2.innerText = "Leave the park.";
    link2.setAttribute("onclick", "confirmLeavePark()");
    container.append(title1, text1, image1, link2);
};

function confirmLeavePark() {
    let confirmText = document.createElement("p");
    confirmText.innerText = "You can't re-enter the park once you've left.\nAre you sure you want to leave the park?";
    container.insertBefore(confirmText, link2);
    link2.innerText = "Yes.";
    link2.setAttribute("onClick", "loadThemeParkEntrance()");
};









//////////
//////////////////// Shop Functions
//////////

let shopMenu = document.createElement('div');
shopMenu.setAttribute("class", "inventoryGrid");
let shopItems;

function populateShopMenu(array, minItem, maxItem) {
    while (shopMenu.firstChild) {       // Removes the previous shopMenu items.
        shopMenu.firstChild.remove();
    };
    shopItems = array.slice(minItem, maxItem + 1);
    
    shopItems.forEach((element) => {
        let shopItem = document.createElement("div");
        shopItem.setAttribute("class", "inventoryItem");
        shopItem.innerText = element[1];
        let shopItemImage = document.createElement("img");
        shopItemImage.src = element[6];
        shopItem.setAttribute("onclick", "purchaseItem(shopItems[" + element[0] + "])");
        shopItem.append(shopItemImage);
        shopItemImage.setAttribute("class", "inventoryPicture");
        shopMenu.append(shopItem);
    });
};

function purchaseItem(item) {
    if (money >= item[4]) {
        changeMoney(-item[4]);
        inventoryContents.push(item);
        console.log(money); //TODO: Display the item purchased message in-game.
    } else {
        console.log("You don't have enough money!");
    };
};


function loadSupermarketFood() {
    clear(container);
    title1.innerText = "Supermarket - Food";
    link2.innerText = "Step away from the aisle.";
    link2.setAttribute("onclick", "loadSupermarket()");
    container.append(title1, shopMenu, link2);
    populateShopMenu(foodItemList, 0, 50);
    
};

function loadChineseSupermarketFood() {
    clear(container);
    title1.innerText = "Chinese Supermarket - Food and Drinks";
    link2.innerText = "Step away from the aisle.";
    link2.setAttribute("onclick", "loadChineseSupermarket()");
    container.append(title1, shopMenu, link2);
    populateShopMenu(chineseSupermarketList, 0, 11); //TODO: Fix the inventory items so the images dont overflow.
    
};

function loadElectronicsItems() {
    clear(container);
    title1.innerText = "Electronics Store - Items";
    link2.innerText = "Step away from the aisle.";
    link2.setAttribute("onclick", "loadElectronicsStore(); checkElectronics()");
    container.append(title1, shopMenu, link2);
    populateShopMenu(electronicsStoreList, 0, 1);

};

function checkElectronics() { //TODO: Create more elegant method to remove purchased items, ideally immediately after purchase.
    inventoryContents.forEach((element) => {
        if (element[1] === "Camera") {
            hasCamera = true;
            electronicsStoreList.splice(0, 1);

        } else if (element[1] === "Laptop") {
            hasLaptop = true;
            electronicsStoreList.splice(electronicsStoreList.indexOf([1, "Laptop", "A mid-range laptop, more than enough for browsing the internet and some light gaming.", "tool", 250, null, "images/items/electronicsStoreItems/1.jpg"]), 1);
        };
    });
};






////////
//////////////// Camera
////////
function takePhoto(link) {
    if (hasCamera === true) {
        let photoLink = document.createElement("p");
        photoLink.innerText = "Take a picture.";
        photoLink.setAttribute("class", "link");
        photoLink.onclick = function() {  
            let imageTaken = link.getAttribute("src");
            myPhotos.push(imageTaken);
            photoLink.innerText = "That's going in my collection.";
            photoLink.onclick = "";
            photoLink.class = "";
        };
        container.insertBefore(photoLink, link2);
    };
};

let myPhotos = []; //Photos taken with digital camera.





////////
//////////////// Laptop
////////
function loadLaptop() { //TODO: Rework so that it doesn't stop the radio playing.
    clear(container);
    image1.src = "images/backgrounds/laptop.jpg";


    

    link2.innerText = "Close the laptop.";
    link2.setAttribute("onclick", "loadApartment()");

    container.append(image1, link2); 
    loadEvents(laptopEvents);

    if (hasCamera === true) { //Show images taken with camera
        link1.innerText = "View your photos.";
        link1.setAttribute("onclick", "loadLaptopPhotos()");
        container.insertBefore(link1, image1.nextSibling);
    };
};
let laptopEvents = [];



function loadLaptopPhotos() {
    clear(container);
    title1.innerText = "My Photos";

    myPhotos.forEach((element) => {
        let photoAlbumEntry = document.createElement("div");
        photoAlbumEntry.setAttribute("class", "photoAlbumEntry");
        photoAlbum.append(photoAlbumEntry);
        let photoAlbumPicture = document.createElement("img");
        photoAlbumPicture.setAttribute("class", "photoAlbumPicture");
        photoAlbumPicture.src = element;
        photoAlbumEntry.append(photoAlbumPicture);
    });

    link2.innerText = "Go back.";
    link2.onclick = function() {        //TODO: Fix bug that breaks the return button.
        while (photoAlbum.firstChild) {
            photoAlbum.firstChild.remove()};
        loadLaptop();
        };
    container.append(title1, photoAlbum, link2);
};










////////
/////////////// Date Manipulation
////////
function addMinutes(minutes) {
    date = (date.getTime() + minutes*60000);
};

let sunrise = 6;
let sunset = 19;


function checkTime(day, night) {
    currentTime = date.getHours();
    console.log(currentTime);
    if (sunrise <= currentTime && currentTime < sunset) {
        console.log("It's daytime.");
        day();
    } else if (currentTime < sunrise || currentTime >= sunset){
        console.log("It's nighttime.");
        night();
    } else {console.log("This shit's broken.")};
};


////////
//////////////// Night Mode
////////

function nightStreetCorner() {
    clear(container);
    title1.innerText = "Street Corner";
    text1.innerText = "You are standing on the street corner. \n It's dark, and the street is empty. ";
    image1.src = "images/backgrounds/nightStreetCorner.jpg";
    link1.innerText = "Head towards downtown.";
    link1.setAttribute("onclick", "nightDowntownStreet()");
    link2.innerText = "Go towards the residential area.";
    link2.setAttribute("onclick", "nightResidentialStreet()");
    link3.innerText = "Enter your apartment.";
    link3.setAttribute("onclick", "loadApartment()");
    link4.innerText = "Go to the commercial street.";
    link4.setAttribute("onclick", "nightCommercialStreet()");

    container.append(title1, text1, image1, link1, link2, link4, link3);
    loadEvents(nightStreetCornerEvents);

};
let nightStreetCornerEvents = [findItem];




////////
//////////////// Night Residential Street
////////
function nightResidentialStreet() {
    clear(container);
    title1.innerText = "Residential Street";
    text1.innerText = "The residential street is dark and quiet. \nEveryone seems to be at home, sleeping.";
    image1.src = "images/backgrounds/nightResidentialStreet.png";
    link1.innerText = "Visit the nearby park.";
    link1.setAttribute("onclick", "checkTime(loadPark, nightPark)");
    link2.innerText = "Go back towards town.";
    link2.setAttribute("onclick", "checkTime(loadStreetCorner, nightStreetCorner)");
    container.append(title1, text1, image1, link1, link2);
    loadEvents(nightResidentialStreetEvents);
};
let nightResidentialStreetEvents = [findItem];

function nightPark () {
    clear(container);
    title1.innerText = "Public Park";
    text1.innerText = "The park is quiet, and dimly lit by sparse street lamps.";
    image1.src = "images/backgrounds/nightPark.jpg";
    link2.innerText = "Go to the street.";
    link2.setAttribute("onclick", "checkTime(loadResidentialStreet, nightResidentialStreet)");
    
    container.append(title1, text1, image1, link2);
    loadEvents(nightParkEvents);
};
let nightParkEvents = [findItem, loadTrash];


////////
//////////////// Night Commercial Street
////////
function nightCommercialStreet() {
    clear(container);
    title1.innerText = "Commercial Street";
    text1.innerText = "The shops are all closed for the night.";
    image1.src = "images/backgrounds/nightCommercialStreet.jpg";
    link5.innerText = "Enter the alleyway.";
    link5.setAttribute("onclick", "checkTime(loadCommercialAlley, nightCommercialAlley)");
    link2.innerText = "Go back towards your apartment.";
    link2.setAttribute("onclick", "checkTime(loadStreetCorner, nightStreetCorner)");

    container.append(title1, text1, image1, link5, link2);
    loadEvents(nightCommercialStreetEvents);
};
let nightCommercialStreetEvents = [findItem];


function nightCommercialAlley() {
    clear(container);
    title1.innerText = "Commercial Street - Alleyway";
    text1.innerText = "The alleyway is dark and intimidating.";
    image1.src = "images/backgrounds/nightCommercialAlley.jpg";
    link2.innerText = "Go back to the street.";
    link2.setAttribute("onclick", "checkTime(loadCommercialStreet, nightCommercialStreet)");


    container.append(title1, text1, image1, link2);
    loadTrash();
    loadEvents(nightCommercialAlleyEvents);

};
let nightCommercialAlleyEvents = [findItem];


////////
//////////////// Night Downtown Street
////////
function nightDowntownStreet() {
    clear(container);
    title1.innerText = "Downtown Street";
    text1.innerText = "The streets are dark, and most of the shops are closed. \nThe convenience store seems to still be open.";
    image1.src = "images/backgrounds/nightDowntownStreet.jpg";
    link2.innerText = "Go back towards the residential area.";
    link2.setAttribute("onclick", "checkTime(loadStreetCorner, nightStreetCorner)");
    link3.innerText = "Enter the alleyway.";
    link3.setAttribute("onclick", "checkTime(loadAlleyway, nightAlleyway)");
    link5.innerText = "Enter the convenience store.";
    link5.setAttribute("onclick", "loadConvenienceStoreEntrance()");
    container.append(title1, text1, image1, link5, link3, link2);

    loadEvents(nightDowntownStreetEvents);
};
let nightDowntownStreetEvents = [findItem];

function nightAlleyway() {
    clear(container);
    title1.innerText = "Alleyway";
    text1.innerText = "It's a dark, dirty alleyway.";
    image1.src = "images/backgrounds/nightAlleyway.jpg";
    link2.innerText = "Return to the street.";
    link2.setAttribute("onclick", "checkTime(loadDowntownStreet, nightDowntownStreet)");
    link3.innerText = "Enter Chinatown.";
    link3.setAttribute("onclick", "checkTime(loadChinatown, nightChinatown)");

    container.append(title1, text1, image1, link3, link2);
    loadEvents(nightAlleywayEvents);
};
let nightAlleywayEvents = [findItem, loadTrash];

////////
//////////////// Chinatown
////////
function nightChinatown() {
    clear(container);
    title1.innerText = "Chinatown";
    text1.innerText = "You arrive in Chinatown.\nIt's night, so all the shops are closed.";
    image1.src = "images/backgrounds/nightChinatown.jpg";
    link2.innerText = "Go back through the alley.";
    link2.setAttribute("onclick", "checkTime(loadAlleyway, nightAlleyway)");
    container.append(title1, text1, image1, link2);
    loadEvents(nightChinatownEvents);
};
let nightChinatownEvents = [];
