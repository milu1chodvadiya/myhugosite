const by = require('sort-by');
const ellipsize = require('ellipsize');

module.exports = (dato, root, i18n) => {
  const content = { hello: "world" }
  root.createDataFile("data/foobar1.yml", 'yaml', content)
}

module.exports = (dato, root, i18n) => {
    dato.blogPosts.forEach((blogPost) => {
      root.createPost(`content/post/${blogPost.title}.md`, "yaml", {
        frontmatter: {
          title: blogPost.title,
          type: "post",
          date: "2017-07-17",
        },
        content: blogPost.bio
      });
    });
}

module.exports = (dato, root, i18n) => {
    dato.blogPosts.forEach((blogPost) => {
      root.createPost(`content/${blogPost.title}.md`, "yaml", {
        frontmatter: {
          title: blogPost.title,
          type: "post",
          date: "2017-07-17",
        },
        content: blogPost.bio
      });
    });
}
