module.exports = (config) => {
    config.addPassthroughCopy("./src/images/");
    config.addPassthroughCopy("./src/sketchbook/");
    config.addPassthroughCopy("./src/recordings/");
    return {
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: '_site'
        }
    };
};