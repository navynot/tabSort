
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

            //create array of values in sorted order
            sortedId = Object.values(sortedTab);

            
            moveTabs(sortedId);
        })
    });


function moveTabs(ids){
    ids.forEach(id => {
        chrome.tabs.move(id, {index: ids.indexOf(id)})
    })
}