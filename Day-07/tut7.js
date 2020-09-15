console.log('We are in tut7.js and lets discuss about arrays');
// Arrays and Objects In JavaScript 

// const marks = [34, 23, 24, 93 ,73, 25];
let marks = [34, 23, 24, 93, 73, 25];

const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 89, [3, 5]];

const arr = new Array(23,123,21, 'Orange');
console.log(marks);
// console.log(mixed);
console.log(fruits);

// to print a particular element from array
console.log(fruits[1]);

// to print length of array
console.log(arr.length);

// to check whether an array is array or not
console.log(Array.isArray('arr'));

// inserting an element into an array
arr[0] = 'Ritika';
let arrelement = arr[0];
console.log('element :', arrelement);
console.log(arr);

// index of element of an array
let value = marks.indexOf(73);
console.log(value)

// Mutating or Modifying arrays

// push the element to the last of the array
marks.push(3564);

// push the element to the start of the array
marks.unshift(1009);

// pop the element from the last of the array
marks.pop()

// pop the element from the start of the array
marks.shift()

// remove 3 elements from index2
marks.splice(2, 3);

// reverse the array
marks.reverse()

// concatinating 2 arrays
let marks2 = [1, 2,3, 7]
marks = marks.concat(marks2);
console.log(marks);

let myobj = {
    'first name': 'ritika', 
    channel: 'CodeWithritika',
    isActive: true,
    marks: [1,5,3,6]
}

console.log(myobj)
console.log(myobj['channel'])
console.log(myobj.channel)
           
