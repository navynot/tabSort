//sort buttons
const alphaButton = document.getElementById("alphaButton");
const reverseAlphaButton = document.getElementById("reverseAlphaButton");
const reverseCurrentButton = document.getElementById("reverseCurrentButton");

//auto sort buttons
const auto = {};
const alphaAuto = document.getElementById("alpha");
const rAlphaAuto = document.getElementById("rAlpha");
const rCurrentAuto = document.getElementById("rCurrent");

//get state of auto
chrome.storage.sync.get('auto', (data) => {
    Object.assign(auto, data.auto);
    alphaAuto.checked = Boolean(auto.alpha);
    rAlphaAuto.checked = Boolean(auto.rAlpha);
    rCurrentAuto.checked = Boolean(auto.rCurrent);
})

//sort button event listeners
alphaButton.addEventListener("click", () => {
    alphabetSort();
});

reverseAlphaButton.addEventListener("click", () => {
    reverseAlph();
});

reverseCurrentButton.addEventListener("click", () => {
    reverseCurrent();
});

//auto sort button event listeners
alphaAuto.addEventListener("change", (event) => {
    auto.alpha = event.target.checked;
    chrome.storage.sync.set({auto});
})

rAlphaAuto.addEventListener("change", (event) => {
    auto.rAlpha = event.target.checked;
    chrome.storage.sync.set({auto});
})

rCurrentAuto.addEventListener("change", (event) => {
    auto.rCurrent = event.target.checked;
    chrome.storage.sync.set({auto});
})

//sort functions
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




