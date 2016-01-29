function countDivs(html) {
    return html.split('<div').length - 1;
}


var htmlStr="<!DOCTYPE html><html><head lang=\"en\"><meta charset=\"UTF-8\"><title>index</title>" +
    "<script src=\"/yourScript.js\" defer></script></head><body><div id=\"outerDiv\"><div class=\"first\"><div><div>hello</div></div>" +
    "</div><div>hi<div></div></div><div>I am a div</div></div></body></html>";


console.log(countDivs(htmlStr));

var html=document.body.innerHTML;
console.log(countDivs(html));

function countOfDivs() {
    return document.getElementsByTagName('div').length;
}
console.log(countOfDivs());

