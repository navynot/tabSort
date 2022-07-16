
// let tabData;

//use chrome instead of browser that MDN uses, this gets all info on tabs
let tabData = chrome.tabs.query({currentWindow: true})
    .then((value) => {
        //value is array of tabs and their details
        // console.log(value)
        //run the function sortTabs
        return value

    })

    console.log(tabData)

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