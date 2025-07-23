module.exports = {
    /**
     * 
     * @param {String} itemUrl The link in question 
     * @param {String} pageUrl The page context (provided by eleventy?)
     * @returns {String} The attributes or empty
     */
    getLinkActiveState(itemUrl, pageUrl) {
        let response = "";

        if (itemUrl === pageUrl 
            || (itemUrl.length > 1 && pageUrl.indexOf(itemUrl) === 0)) {
            response = "aria-current='page' data-state='active'";
        }

        return response;
    }
}