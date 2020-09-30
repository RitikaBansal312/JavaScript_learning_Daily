console.log('welcome to tut 24');

// Object Literals, Constructors and Object Oriented JavaScript

// Object Literal for creating objects

let car = {
    name:'Maruti',
    topSpeed:88,
    run:function(){
        console.log('Car is running');
    }
}
console.log(car);
car.run();

// we have already seen constructors like these:
// new Date();

// Creating a constructor for cars

function GeneralCar(givenName,givenSpeed){
    this.name = givenName;
    this.topSpeed = givenSpeed;
    this.run = function(){
        console.log(`$(this.name) is running`);
    }
    this.analyze = function() {
        console.log(`This car is slower by ${200 - this.topSpeed} km/hr than Mercedes`);
    }
}
car1 = new GeneralCar('Nissan', 180);
car2 = new GeneralCar('Maruti Suzuki', 80);
car3 = new GeneralCar('Tata', 150);
console.log(car1, car2, car3);