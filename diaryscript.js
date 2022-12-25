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
    return diaryDate.toLocaleString("ja-JP", {year: "numeric", month: "long", day: "numeric"}) + "：";
};

function loadDiary() { 
    modernDate = JSON.parse(JSON.stringify(date));
    modernMoney = JSON.parse(JSON.stringify(money));
    modernInventory = JSON.parse(JSON.stringify(inventoryContents));
    if (diaryOpened === false) {
        clear(container);
        title1.innerText = hiduke() + "私の部屋";
        text1.innerText = "今日から私の新しい生活が始まる！\n新しい学校、新しい制服、新しいクラスメイト...\n未来には何が待っているのかな？";
        image1.src = "images/1986/backgrounds/diaryBedroom.jpg";
        link1.innerText = "廊下に出る";
        link1.setAttribute("onclick", "diaryHallway()");
        container.append(title1, text1, image1, link1);
        diaryOpened = true;
    } else { 
        diaryBedroom();
    };
};


function diaryBedroom() {
    clear(container);
    title1.innerText = hiduke() + "私の部屋";
    text1.innerText = "今日から私の新しい生活が始まる！\n新しい学校、新しい制服、新しいクラスメイト...\n未来には何が待っているのかな？";
    image1.src = "images/1986/backgrounds/diaryBedroom.jpg";
    link1.innerText = "廊下に出る";
    link1.setAttribute("onclick", "diaryHallway()");
    container.append(title1, text1, image1, link1);

};

