console.log('JavaScript_Learning_Day-06');

// Strings: Properties, Methods & Template Literals in JavaScript

const name = 'Ritika';
const greeting = 'Good Morning';
console.log(greeting + ' ' + name);

let html;
html  = "<h1> this is heading</h1>"+
        "<p> this is My para</p>";

html = html.concat('this', ' str2');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());

// indexing start with 0

console.log(html[1]);
console.log(html.indexOf('h1'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(2));
console.log(html.endsWith('dsfsdfd'));
console.log(html.includes('hdtdsfg'));
console.log(html.includes('is'));

console.log(html.substring(1,6)); // include (n-1)
console.log(html.slice(0, 4));
console.log(html.split(''));
console.log(html.split('>'));

console.log(html.replace('this', 'it')); // replace always first occurance

// template literals (introduce in ES6)

let fruit1 = 'Orange\'';
let fruit2 = 'Apple';
let myHtml = `Hello ${name}
            <h1> This is "my" heading </h1>
            <p> You like ${fruit1} and ${fruit2}`;

document.body.innerHTML = myHtml;           
