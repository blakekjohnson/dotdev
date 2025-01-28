const { feedPlugin } = require("@11ty/eleventy-plugin-rss");
const schemaPlugin = require("@quasibit/eleventy-plugin-schema");

module.exports = function (eleventyConfig) {
  // Passthroughs
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("robots.txt");

  // Custom Filters
  eleventyConfig.addFilter("toJSON", (arr) => {
    return JSON.stringify(arr);
  });

  // Feed generator plugin
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

  // JSON-LD Schema plugin
  eleventyConfig.addPlugin(schemaPlugin);
};

