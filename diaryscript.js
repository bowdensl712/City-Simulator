//Modern-day Variables
let modernDate;
let modernMoney;
let modernInventory;

//Diary Variables
let diaryOpened = false;

function loadDiary() { 
    modernDate = JSON.parse(JSON.stringify(date));
    modernMoney = JSON.parse(JSON.stringify(money));
    modernInventory = JSON.parse(JSON.stringify(inventoryContents));
    if (diaryOpened === false) {
        

        diaryOpened = true;
    } else { 

    };
};