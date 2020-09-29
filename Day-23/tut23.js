console.log('JavaScript_Learning_Day-23');

// Date Object: Date & Time In JavaScript

let today = new Date();
console.log(today);
console.log(typeof today);

let otherDate = new Date('10-03-1998 04:54:08');
console.log(otherDate);
otherDate = new Date('June 13 1976');
console.log(otherDate);
otherDate = new Date('13/03/1998');
console.log(otherDate);
otherDate = new Date('03/13/1998');
console.log(otherDate);

let a;
a=otherDate.getDay();
console.log(a);
a=otherDate.getDate();
console.log(a);
a=otherDate.getMonth();
console.log(a);
a=otherDate.getHours();
console.log(a);
a=otherDate.getMinutes();
console.log(a);
a=otherDate.getSeconds();
console.log(a);
a=otherDate.getTime();
console.log(a);
a=otherDate.getMilliseconds();
console.log(a);

otherDate.setDate(23);
console.log(otherDate);
otherDate.setMonth(0);
console.log(otherDate);
otherDate.setFullYear(1900);
console.log(otherDate);
otherDate.setHours(1);
console.log(otherDate);
otherDate.setMinutes(2);
console.log(otherDate);
otherDate.setSeconds(3);
console.log(otherDate);