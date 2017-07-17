const by = require('sort-by');
const ellipsize = require('ellipsize');

module.exports = (dato, root, i18n) => {
  const content = { hello: "world" }
  root.createDataFile("data/foobar.yml", 'yaml', content)
}

module.exports = (dato, root, i18n) => {
  root.createPost("content/post/my-post.md", "yaml", {
    frontmatter: {
      title: "My First Post",
      type: "post",
      categories: ["random"],
      weight: 4,
      date: "2017-07-17",
    },
    content: "Lorem **ipsum dolor sit amet**, consectetur adipiscing elit."
  });
}
