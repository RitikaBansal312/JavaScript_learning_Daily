console.log('JavaScript_Learning_Day-13');

// Webpage Crawler In JavaScript

// Exercise-01 :

/*
1. You have to create a variable which is a 
string containing the text which is a link
 you are interested in. 

2.You have to fetch all the links from a
 given page which contains some text
*/

// Solution :

let str = "python";
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function(element) {
  href = element.href;
  if (href.includes(str)) {
    console.log(href);
  }
});