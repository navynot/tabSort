
const tabData = {};
let sortedArr = [];
let sortedObj = {};
let sortedId = [];

let sortButton = document.getElementById("sortButton");

//use chrome instead of browser that MDN uses, this gets all info on tabs
let querying = chrome.tabs.query({currentWindow: true})
    .then(tabs => {
        sortButton.addEventListener("click", () => {
            //add titles and ids to tabData object
            for (let i = 0; i < tabs.length; i++) {
                tabData[tabs[i].title] = tabs[i].id
            }
            //get and sort array of titles and then add the sorted titles with their corresponding ids to sortedObj
            //can use reduce method here to optimize in the future
            sortedArr = Object.keys(tabData).sort().forEach(key => {sortedObj[key] = tabData[key]})
            //create array that has the ids sorted in alphabetical order
            //will use these sorted ids to with tabs.move
            sortedId = Object.values(sortedObj)
            console.log(sortedObj)
            console.log(sortedId)
        })
    })


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