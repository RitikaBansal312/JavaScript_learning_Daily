console.log("JavaScript_Learning_Day-24");

// Prototype Inheritance In JavaScript

const proto = {
    slogan: function () {
        return `This company is the best`;
    },
    changeName: function (newName) {
        this.name = newName
    }
}

// This creates ritika object
let ritika = Object.create(proto);
ritika.name = "ritika";
ritika.role = "Programmer";
ritika.changeName("rashi")
console.log(ritika)

// This also creates ritika object
const ritika1 = Object.create(proto, {
    name: { value: "ritika", writable: true },
    role: { value: "Programmer" },
});
ritika1.changeName("rashi")
console.log(ritika1)

// Employee constructor
function Employee(name, salary, experience) {
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}

// Slogan
Employee.prototype.slogan = function () {
    return `This company is the best. Regards, ${this.name}`;
}

// Create an object from this constructor now
let ritikaObj = new Employee("ritika", 3450990, 02);
console.log(ritikaObj.slogan())

// Programmer
function Programmer(name, salary, experience, language) {
    Employee.call(this, name, salary, experience);
    this.language = language;
}

// Inherit the prototype
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let Riti = new Programmer("Riti", 2500000, 0, "Javascript");
console.log(Riti);


