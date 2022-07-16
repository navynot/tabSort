
chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'sync' && changes.auto?.newValue) {
        const autoSort = Boolean(changes.auto.newValue.alpha)
    }
})
