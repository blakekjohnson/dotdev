module.exports = function (config) {
  config.addFilter("asPostDate", (dateObj) => {
    return dateObj.toISOString().substr(0, 10);
  });
};

