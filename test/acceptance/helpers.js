function clearBrowserData(browser) {
    browser.execute(() => {
        localStorage.clear();
    });
}

module.exports = {
    clearBrowserData
};
