//variable is html element button that comes up on extension popup
let sortButton = document.getElementById("sortButton");

sortButton.addEventListener("click", () => {
    //after clicking the grey button

} )

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
