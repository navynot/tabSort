//variable is html element button that comes up on extension popup
// let sortButton = document.getElementById("sortButton");

// sortButton.addEventListener("click", () => {
//     //after clicking the button, invoke sort tabs

// } )

//use chrome instead of browser
let querying = chrome.tabs.query({})
console.log(querying)

// function sortTabs(){
//     //get array of open tabs with title and index
//     //iterate through array and compare title with title next to it, use something like bubble sort to move tabs to sort alphabetically

//     //use tabs.move() to move the tabs
//     //tabs.Tab contains information about tab

// }


/* ---------------- CODE FROM TUTORIAL TO CHANGE BACKGROUND COLOR ------------------*/
// chrome.storage.sync.get("color", ({ color }) => {
//   changeColor.style.backgroundColor = color;
// });

// changeColor.addEventListener("click", async () => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true});

//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: setPageBackgroundColor,
//     });
// });

// function setPageBackgroundColor() {
//     chrome.storage.sync.get("color", ({color}) => {
//         document.body.style.backgroundColor = color;
//     })
// }
