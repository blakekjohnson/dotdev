module.exports = function (config) {
  config.addPassthroughCopy("bundle.css");
  config.addPassthroughCopy("assets");
  config.addFilter("toJSON", (arr) => {
    return JSON.stringify(arr);
  });
};

