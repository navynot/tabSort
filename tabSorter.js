const auto = {};


const alphaButton = document.getElementById("alphaButton");
const reverseAlphaButton = document.getElementById("reverseAlphaButton");
const reverseCurrentButton = document.getElementById("reverseCurrentButton");


alphaButton.addEventListener("click", () => {
    alphabetSort();
});

function alphabetSort() {
    const tabData = {};
    let sortedTab = {}
    let sortedId = [];

    
    chrome.tabs.query({currentWindow: true})
    .then(tabs => {

            for (let i = 0; i < tabs.length; i++) {
                tabData[tabs[i].title] = tabs[i].id;
            };
           
            sortedTab = Object.keys(tabData).sort().reduce((acc, cur) => {
            acc[cur] = tabData[cur];
            return acc;
            }, {});
        
            sortedId = Object.values(sortedTab).forEach(id => {
                chrome.tabs.move(id, {index: sortedId.indexOf(id)
                })});
    });
};


reverseAlphaButton.addEventListener("click", () => {
    reverseAlph();
});

function reverseAlph() {
    const tabData = {};
    let sortedTab = {}
    let sortedId = [];

    chrome.tabs.query({currentWindow: true})
    .then(tabs => {
            for (let i = 0; i < tabs.length; i++) {
                tabData[tabs[i].title] = tabs[i].id;
            };

            sortedTab = Object.keys(tabData).sort().reverse().reduce((acc, cur) => {
            acc[cur] = tabData[cur];
            return acc;
            }, {});

            sortedId = Object.values(sortedTab).forEach(id => {chrome.tabs.move(id, {index: sortedId.indexOf(id)})});
    });
};


reverseCurrentButton.addEventListener("click", () => {
    reverseCurrent();
});

function reverseCurrent() {
    const tabData = {};
    let sortedTab = {}
    let sortedId = [];

    chrome.tabs.query({currentWindow: true})
    .then(tabs => {

          
            for (let i = 0; i < tabs.length; i++) {
                tabData[tabs[i].title] = tabs[i].id;
            };

            sortedTab = Object.keys(tabData).reverse().reduce((acc, cur) => {
            acc[cur] = tabData[cur];
            return acc;
            }, {});

            sortedId = Object.values(sortedTab).forEach(id => {chrome.tabs.move(id, {index: sortedId.indexOf(id)})});
    });
};

const alphaAuto = document.getElementById("alpha");

chrome.storage.sync.get('auto', (data) => {
    Object.assign(auto, data.auto);
    alphaAuto.checked = Boolean(auto.alpha)
})

alphaAuto.addEventListener("change", (event) => {
    auto.alpha = event.target.checked;
    chrome.storage.sync.set({auto});
    console.log("your mom");
})