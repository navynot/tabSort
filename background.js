
chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'sync' && changes.auto?.newValue) {
        const alphaSort = Boolean(changes.auto.newValue.alpha);
        const rAlphaSort = Boolean(changes.auto.newValue.rAlpha);
        const rCurrentSort = Boolean(changes.auto.newValue.rCurrent);
    }
})
