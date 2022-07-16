
const tabData = {};
let sortedTab = {}
let sortedId = [];

let sortButton = document.getElementById("sortButton");

//use chrome instead of browser that MDN uses, this gets all info on tabs
let allTabs = chrome.tabs.query({currentWindow: true})
    .then(tabs => {
        sortButton.addEventListener("click", () => {
            //add titles and ids to tabData object
            for (let i = 0; i < tabs.length; i++) {
                tabData[tabs[i].title] = tabs[i].id;
            };

            //sort titles alphabetically while retaining their respective ids
            sortedTab = Object.keys(tabData).sort().reduce((acc, cur) => {
                acc[cur] = tabData[cur];
                return acc;
            }, {});
            console.log(sortedTab);

            //create array of values in sorted order
            sortedId = Object.values(sortedTab);
            console.log(sortedId);
        })
    });


// function sortTabs(value){
//         //get array of open tabs with title and index loop through array 
//         //check if title[i] is > title[i+1] if so, then move tab for i right
//     for(let i = 1; i<value.length;i++){
//         let titleLeft = value[i].title;
//         for(let j = 0; j<value.length; i++){
//             let titleRight = value[j].title;
//             if(titleLeft > titleRight){
//                 //move left to right - moving returns a promise
//                 let moving = chrome.tabs.move(value.tabs[i].id, {index:i+1})
//                 console.log(moving)

//             }
//         }
//     }

// // }