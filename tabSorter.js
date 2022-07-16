
//initialize alphabet sort button 
let alphaButton = document.getElementById("alphaButton");

//when button is clicked, sort tabs alphabetically
alphaButton.addEventListener("click", () => {
    alphabetSort();
});

function alphabetSort() {
    const tabData = {};
    let sortedTab = {}
    let sortedId = [];

    //get information of all tabs
    chrome.tabs.query({currentWindow: true})
    .then(tabs => {

            //iterate through tabs object and add tab title and tab id as key, value pairs to tabData object
            for (let i = 0; i < tabs.length; i++) {
                tabData[tabs[i].title] = tabs[i].id;
            };

            //sort the tabData object by first creating an array of the keys (tab titles)
            //reduce the array into a new object that contains the sorted titles with their corresponding tab IDs
            sortedTab = Object.keys(tabData).sort().reduce((acc, cur) => {
            acc[cur] = tabData[cur];
            return acc;
            }, {});

            //create an array of the sorted IDs
            //iterate through the sorted IDs and move each tab to their corresponding indexes
            sortedId = Object.values(sortedTab).forEach(id => {chrome.tabs.move(id, {index: sortedId.indexOf(id)})});
    });
};
