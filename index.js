module.exports = {
  hooks: {
    "page:before": function(page) {
      var content = page.content;
      // remove a new line (along with space/tab characters around the
      // new line) between 'zenkaku' characters
      content = content.replace(/([^\x00-\x7F])[ \t]*\r?\n[ \t]*(?=[^\x00-\x7F])/g, "$1");
      // console.log(content);
      page.content = content;
      return page;
    }
  }
};
