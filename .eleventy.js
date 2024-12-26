const { feedPlugin } = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("bundle.css");

  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("toJSON", (arr) => {
    return JSON.stringify(arr);
  });

  eleventyConfig.addPlugin(feedPlugin, {
    type: "atom",
    outputPath: "/feed.xml",
    collection: {
      name: "post",
      limit: 10,
    },
    metadata: {
      language: "en",
      title: "blakekjohnson.dev",
      subtitle: "Various blog posts.",
      base: "https://blakekjohnson.dev",
      author: {
        name: "Blake Johnson",
      },
    },
  });
};

