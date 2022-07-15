# tabSort

EDITS
 - took out "<all_urls>" in JSON manifest. JSON can't do comments, so I'm writing it in here. It was causing an error in the chrome://extensions page 


 # 5 parts to a chrome extension 
[source](https://dev.to/anobjectisa/how-to-build-a-chrome-extension-4oig)
1. the manifest file
2. the background script
3. the foreground script
4. the popup page
5. the options page

# issues I came up with
- using browser.something. I would get an error "browser is not identified". I used [this thread](https://github.com/mdn/webextensions-examples/issues/194) to use chrome.something instead since chrome implements API's using the chrome. namespace. That said, that is confusing because the MDN documentation uses browser...
