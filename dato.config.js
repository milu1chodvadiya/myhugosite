/*module.exports = (dato, root, i18n) => {
  const content = { hello: "world" }
  root.createDataFile("data/foobar.yml", 'yaml', content)
}


module.exports = (dato, root, i18n) => {
  root.createPost("content/post/my-post.md", "yaml", {
    frontmatter: {
      title: "First article",
      type: "post",
      categories: ["random"],
      weight: 4,
      date: "2012-04-06",
    },
    content: "Lorem **ipsum dolor sit amet**, consectetur adipiscing elit."
  });
}


module.exports = (dato, root, i18n) => {
  root.directory("content/post", (dir) => {
    for (let i = 0; i < 10; i++) {
      dir.createPost(`post-${i}.md`, "yaml", {
        frontmatter: {
          title: `Article ${i}`,
          type: "post",
          categories: ["random"],
          weight: 4,
          date: "2012-04-06",
        },
        content: "Lorem **ipsum dolor sit amet**, consectetur adipiscing elit."
      });
    }
  });
}
*/


/*
module.exports = (dato, root, i18n) => {

  // inside a "post" directory...
  root.directory("content/post", (dir) => {


    // ...iterate over the "Blog post" records...
    dato.blogPosts.forEach((blogPost) => {

      // ...and create a markdown file for each article!
      root.createPost(`${blogPost.slug}.md`, "yaml", {
        frontmatter: {
          title: blogPost.title,
          type: "post",
          categories: blogPost.categories.map(cat => cat.slug),
          date: blogPost.publishedAt,
        },
        content: blogPost.content
      });
    });
  });
}*/
/*module.exports = (dato, root) => {
  root.directory('data/', dir => {
    dir.createDataFile('home.toml', 'toml', {
      sitename: dato.homepage.sitename,
      tagline: dato.homepage.tagline,
      description: dato.homepage.description
    });
  });
}*/
// const htmlTag = require('html-tag');
// const toHtml = (tags) => (
//   tags.map(( tagName, attributes, content ) => (
//     htmlTag(tagName, attributes, content)
//   )).join("")
// );

const If = require('if');
const myfunc = (myvariable) => (
    '<title>'+myvariable[0].content+'</title>'+
    '<meta property="'+myvariable[1].attributes['property']+'" content="'+myvariable[1].attributes['content']+'" />'+
    '<meta name="'+myvariable[2].attributes['name']+'" content="'+myvariable[2].attributes['content']+'" />'+
    '<meta name="'+myvariable[3].attributes['name']+'" content="'+myvariable[3].attributes['content']+'" />'+
    '<meta property="'+myvariable[4].attributes['property']+'" content="'+myvariable[4].attributes['content']+'" />'+
    '<meta name="'+myvariable[5].attributes['name']+'" content="'+myvariable[5].attributes['content']+'" />'+
    '<meta name="'+myvariable[6].attributes['name']+'" content="'+myvariable[6].attributes['content']+'" />'+
    '<meta name="'+myvariable[7].attributes['name']+'" content="'+myvariable[7].attributes['content']+'" />'+
    '<meta property="'+myvariable[8].attributes['property']+'" content="'+myvariable[8].attributes['content']+'" />'+
    '<meta property="'+myvariable[9].attributes['property']+'" content="'+myvariable[9].attributes['content']+'" />'+
    '<meta property="'+myvariable[10].attributes['property']+'" content="'+myvariable[10].attributes['content']+'" />'+
    '<meta property="'+myvariable[11].attributes['property']+'" content="'+myvariable[11].attributes['content']+'" />'+
    '<meta name="'+myvariable[12].attributes['name']+'" content="'+myvariable[12].attributes['content']+'" />'

  // myvariable.map((number, i) =>
  //   If(i == 0).Then(function(){
  //     console.log("<title>"+number['content']+"</title>")
  //   }).Else(function(){
  //     // "<title>"+number['tagName']+"</title>"
  //   })
  // ).join("")
);
module.exports = (dato, root, i18n) => {

      dato.posts.forEach((myPost, i) => {
        root.createPost(`content/post/${myPost.title}.md`, "yaml",{
          frontmatter: {
            title: myPost.title,
            type: "post",
            date: myPost.date,
            weight: myPost.weight,
            categories: myPost.categories,
            header: myPost.header.map(head => head.testPageTitle),
          },
          content: myPost.content+myPost.testField
        });
      });

      root.createPost(`content/about.md`, "yaml",{
        frontmatter: {
          title: dato.about.title,
          date: dato.about.date,
          sidemenu: "true",
          description: dato.about.description,
        },
        content: dato.about.content
      });

      dato.sidebars.forEach((sideBar, i) => {
        if(i == 0){
          root.createPost(`content/sidebar/index.md`, "yaml",{
            frontmatter: {
              title: sideBar.sidebarName,
              sidemenu: "true",
              date: "2017-07-17",
              seoMetaTags: myfunc(sideBar.seoMetaTags),
              url: '/sidebar',
            },
            content: sideBar.sidebarName
          });
        }else{
          root.createPost(`content/subsidebar/${sideBar.sidebarName}.md`, "yaml",{
            frontmatter: {
              title: sideBar.sidebarName,
              sidemenu: "true",
              date: "2017-07-17",
              seoMetaTags: myfunc(sideBar.seoMetaTags),
              url: `/${sideBar.sidebarName}`,
            },
            content: sideBar.sidebarName
          });
        }
      });

      dato.carrears.forEach((carreAr, i) => {
        if(i == 0){
          root.createPost(`content/carrear/index.md`, "yaml",{
            frontmatter: {
              title: carreAr.carrearTitle,
              sidemenu: "true",
              date: "2017-07-19",
              seoMetaTags: myfunc(carreAr.seoMetaTags),
              url: '/carrear',
            },
            content: carreAr.carrearTitle
          });
        }else{
          root.createPost(`content/subcarrear/${carreAr.carrearTitle}.md`, "yaml",{
            frontmatter: {
              title: carreAr.carrearTitle,
              sidemenu: "true",
              date: "2017-07-19",
              seoMetaTags: myfunc(carreAr.seoMetaTags),
              url: `/${carreAr.carrearTitle}`,
            },
            content: carreAr.carrearTitle
          });
        }
      });


/*
  root.directory("content/post", (dir) => {
    for (let i = 0; i < 10; i++) {
      dir.createPost(`post-${i}.md`, "yaml", {
        frontmatter: {
          title: `Article ${i}`,
          type: "post",
          categories: ["random"],
          weight: 4,
          date: "2012-04-06",
        },
        content: "Lorem **ipsum dolor sit amet**, consectetur adipiscing elit."
      });
    }
  });

//console.log(dato.itemsById);

//console.log(i18n.availableLocales);



  // inside a "post" directory...
  root.directory("content/post", (dir) => {
    //console.log(dato);
    //console.log(dato.posts);

    // iterate over all the available locales...
    i18n.availableLocales.forEach((locale) => {

      // switch to the nth locale
      i18n.withLocale(locale, () => {


    // ...iterate over the "Blog post" records...
    dato.posts.forEach((blogPost) => {
    // To get the rich text of each post
    //console.log(blogPost.header.map(head => head.testPageTitle));
      // ...and create a markdown file for each article!
      root.createPost(`content/post/${blogPost.slug}.md`, "yaml", {
        frontmatter: {
          title: blogPost.title,
          type: "post",
          categories: blogPost.categories,
          weight: blogPost.weight,
          date: blogPost.date,
          header: blogPost.header.map(head => head.testPageTitle),

        },
        content: blogPost.content+blogPost.testField,

      });
    });
  });
 });
  });*/
// add {{ .Params.Testfield }} in post template to get the changes in layout directory
}
