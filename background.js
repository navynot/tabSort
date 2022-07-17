
chrome.storage.onChanged.addListener((changes, area) => {
    if (area === 'sync' && changes.auto?.newValue) {
        Boolean(changes.auto.newValue.enabled);

        Boolean(changes.auto.newValue.alpha);
        Boolean(changes.auto.newValue.rAlpha);
        Boolean(changes.auto.newValue.rCurrent);

        Boolean(changes.auto.newValue.alphaDisabled);
        Boolean(changes.auto.newValue.rAlphaDisabled);
        Boolean(changes.auto.newValue.rCurrentDisabled);

    }
})
