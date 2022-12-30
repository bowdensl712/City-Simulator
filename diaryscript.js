//現代の変数
let modernDate;
let modernMoney;
let modernInventory;

//日記の変数
let diaryOpened = false;
let diaryMoney = 2000; //80年代の円
let diaryDate = new Date("1986-04-01T07:00:00");
let diaryInventory = [];

//一般の関数
function hiduke() {
    return date.toLocaleString("ja-JP", {year: "numeric", month: "long", day: "numeric"}) + "：";
};

function loadDiary() { 
    modernDate = JSON.parse(JSON.stringify(date));
    modernMoney = JSON.parse(JSON.stringify(money));
    modernInventory = JSON.parse(JSON.stringify(inventoryContents));
    date = diaryDate;
    if (diaryOpened === false) {
        clear(container);
        title1.innerText = hiduke() + "私の部屋";
        text1.innerText = "今日から私の新しい生活が始まる！\n新しい学校、新しい制服、新しいクラスメイト...\n未来には何が待っているのかな？";
        image1.src = "images/1986/backgrounds/diaryBedroom.jpg";
        link1.innerText = "廊下に出る";
        link1.setAttribute("onclick", "homeHallway()");
        container.append(title1, text1, image1, link1);
        diaryOpened = true;
        addMinutes(0);
    } else { 
        diaryBedroom();
    };
};


function diaryBedroom() {
    clear(container);
    title1.innerText = hiduke() + "私の部屋";
    text1.innerText = "私の部屋。\nここでいつもゴロゴロしてる。";
    image1.src = "images/1986/backgrounds/diaryBedroom.jpg";
    link2.innerText = "廊下に出る";
    link2.setAttribute("onclick", "homeHallway(); addMinutes(1)");
    container.append(title1, text1, image1, link2);

};

function homeHallway() {
    clear(container);
    title1.innerText = hiduke() + "家の廊下";
    text1.innerText = "各部屋の扉が並んでいる。";
    image1.src = "images/1986/backgrounds/homeHallway.jpg";
    
    link1.innerText = "私の部屋に入る";
    link1.setAttribute("onclick", "diaryBedroom(); addMinutes(1)");
    link2.innerText = "キッチンに行く";
    link2.setAttribute("onclick", "homeKitchen(); addMinutes(1)");

    container.append(title1, text1, image1, link1, link2);
};

function homeKitchen() {
    clear(container);
    title1.innerText = hiduke() + "家のキッチン";
    text1.innerText = "キッチンはいつも綺麗に掃除している";
    image1.src = "images/1986/backgrounds/.jpg";
    
    link1.innerText = "廊下に行く";
    link1.setAttribute("onclick", "homeHallway(); addMinutes(1)");
    link2.innerText = "家を出る";
    link2.setAttribute("onclick", "homeStreet(); addMinutes(1)");

    container.append(title1, text1, image1, link1, link2);
};




/* Function Template

function () {
    clear(container);
    title1.innerText = hiduke() + "";
    text1.innerText = "";
    image1.src = "images/1986/backgrounds/.jpg";
    
    link1.innerText = "";
    link1.setAttribute("onclick", "(); addMinutes(1)");
    link2.innerText = "";
    link2.setAttribute("onclick", "(); addMinutes(1)");

    container.append(title1, text1, image1, link1, link2);
};


*/