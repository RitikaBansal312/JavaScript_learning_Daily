console.log("JavaScript_Learning_Day-27");

// ES6 Classes and Inheritance In JavaScript

class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan(){
        return `I am ${this.name} and this company is the best`;
    }

    joiningYear(){
        return 2020 - this.experience;
    }

    static add(a, b){
        return a + b;
    }
}

class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, language, github){
        super(givenName, givenExperience, givenDivision);
        this.language = language;
        this.github = github;
    }

    favoriteLanguage(){
        if (this.language == 'python'){
            return 'Python';
        }
        else{
            return 'JavaScript';
        }
    }

    static multiply(a, b){
        return a * b;
    }
}

ritika = new Employee("Ritika", 56, "Division");
console.log(ritika);
console.log(ritika.joiningYear());
console.log(Employee.add(34, 5))
riti = new Programmer("Riti", 3, "Lays", "Go", "Riti5678")
console.log(riti)
console.log(riti.favoriteLanguage())
console.log(Programmer.multiply(5, 7));


