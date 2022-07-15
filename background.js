//The background script ('background.js') is a JavaScript script that runs once our extension either gets installed or the user refreshes the extension manually.

//The background script doesn't actually have access to any of the webpages your user is viewing, so your background script can't manipulate the DOM.

//we don't need to save any information for sorting tabs, so I'm commenting this out -Mariko





// let color = '#3aa757';


// chrome.runtime.onInstalled.addListener(() => {
//   chrome.storage.sync.set({ color });
//   console.log('Default background color set to %cgreen', `color: ${color}`);
// });