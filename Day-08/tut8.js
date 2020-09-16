console.log('JavaScript_Learning_Day-08');

// If Else Conditionals & Switches in JavaScript

const age = 19;
const doesDrive = true;

if (age==19){
    console.log('Age is 19')
} else if(age == 65){
    console.log('Age is 65')
} else{
    console.log('Age is not 19')
}

// == check only value
// === check both value and type

if (typeof vari !== 'undefined'){
    console.log('vari is defined');
} else{
    console.log('vari is not defined');
}

if (doesDrive){
    console.log("You can drive");
} else{
    console.log("You cannot drive");
}

if (doesDrive || age>18){
    console.log("You can drive");
} else{
    console.log("You cannot drive");
}

// turnery operator
console.log(age==45? 'Age is 45': 'Age is not 45');

// switch case
switch (age) {
    case 18:
        console.log("You are 18");
        break;

    case 28:
        console.log("You are 28");
        break;

    case 38:
        console.log("You are 38");
        break;

    default:
        console.log("You are unknown age");
        break;
}         