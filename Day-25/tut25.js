console.log("JavaScript_Learning_Day-25");

// Object Prototype In javascript

// Object literal : Object.prototype
let obj = {
    name: "ritika",
    channel: "abcd",
    address: "sre"
}
console.log(obj);

function Obj(givenName){
    this.name = givenName
}

Obj.prototype.getName = function (){
    return this.name;
}

Obj.prototype.setName = function (newName){
  this.name = newName;
}

let obj2 = new Obj("rashi");
console.log(obj2);
 