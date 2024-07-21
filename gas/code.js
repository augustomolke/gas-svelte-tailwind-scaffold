const IDX = "gas/index.html";
function doGet(e) {
  return HtmlService.createHtmlOutputFromFile(IDX);
}



  
var include = function (filename) { 
    return HtmlService.createHtmlOutputFromFile(filename); };
  