exports.header = null;
exports.footer = {
  height   : "2cm",
  contents : function(pageNum, numPages) {
    return "<hr>\n<h3>footer <span style='float:right'>" + pageNum + " / " + numPages + "</span></h3>"
  }
}
