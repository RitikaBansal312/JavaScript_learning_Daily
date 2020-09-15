console.log('JavaScript_Learning_Day-05');

//Type Conversion and Type Coercion

// Type Conversion 

let myVar;
myVar = String(34);
// console.log(myVar, (typeof myVar));
let booleanVar = String(true);
// console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
// console.log(date, (typeof date));

let arr =  String([1,2,3,4,5]);
// console.log(arr.length, (typeof arr));

let i = 75;
// console.log(i.toString())

let stri = Number("3434");
stri = Number("343d4");
stri = Number(false);
stri = Number([1,2,3,4,5,6,7,8,9]);
// console.log(stri, (typeof stri));

let number = parseInt('34.098');
number = parseFloat('34.098');

console.log(number.toFixed(2), (typeof number));

// Type Coercion

let mystr = Number("698");
let mynum = 34;

//console.log(mystr ,mynum); // 698 34
//console.log(mystr+mynum); // 69834