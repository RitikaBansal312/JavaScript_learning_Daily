console.log("JavaScript_Learning_Day-12");

// Understanding DOM

let a = document;
a = document.all;  // prints HTML ALL Collection
console.log(a);
a = document.body;   // prints HTML BODY Collection
console.log(a);
a = document.forms[0];   // prints first form
Array.from(a).forEach(function(element){
    console.log(element);
})
a = document.links[0];  // to extract the link
console.log(a);

/* use document.images and document.
scripts and print the list of images 
and scripts on an html page
*/

a = document.images;  // print the list of images
console.log(a);
a = document.scripts;   // print the list of scripts
console.log(a);
a = document.links;    // print the link 
console.log(a);

a = document.all;
a.forEach(function(element){
    console.log(element);
})
console.log(a);

/* a.forEach is not a function..so this 
gives an error, to avoid this we use 
"array.from".
in this case array creates a collection of HTML.
*/

Array.from(a).forEach(function(element){
    console.log(element);
})
console.log(a);