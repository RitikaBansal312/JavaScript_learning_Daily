console.log('JavaScript_Learning_Day-15');

// Children, Parent & Traversing the DOM

let cont = document.querySelector('.no');
cont = document.querySelector('.container');
let nodeName = cont.childNodes[1].nodeName;
let nodeType = cont.childNodes[1].nodeType;
console.log(nodeName);
console.log(nodeType);

/* Node types
1. Element
2. Attribute
3. Text Node
8. Comment
9. document
10. docType
*/

console.log(cont.childNodes); // count texts and comments
console.log(cont.children); // only count elements

let container = document.querySelector('div.container');

console.log(container.children[1].children[0].children);

console.log(container.firstChild);
console.log(container.firstElementChild);

console.log(container.lastChild);
console.log(container.lastElementChild);
console.log(container.children);
console.log(container.childElementCount); // Count of child elements

// Chaining

console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);
