const by = require('sort-by');
const ellipsize = require('ellipsize');

module.exports = (dato, root, i18n) => {
  const content = { hello: "world" }
  root.createDataFile("data/foobar.yml", 'yaml', content)
}
