// Access element using id
var articlesDiv = document.getElementById("articles");
var headerDiv = document.getElementById("header");
console.log(headerDiv.children[0]);
console.log(articlesDiv.children[2]);
// Change style by accessing style object's properties


articlesDiv.children[0].style.fontSize = "50px";
headerDiv.children[0].style.color = "white";
