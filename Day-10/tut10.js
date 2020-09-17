console.log('JavaScript_Learning_Day-10');

// Functions in JavaScript

function greet(name){
    console.log(`Happy Birthday ${name} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you.`);
}
  let name='SkillF';
  greet(name);

// functions with arguments & returning a value

function greet2(name2,thanks){
    console.log(`Happy Birthday ${name2} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you.${thanks}!`);
   return 4;
}
  let name2='SkillF';
  let val = greet2(name2,'thanks a lot');
  console.log(val);

// returning a default value

function greet3(name3,thanks='thankyou'){
    console.log(`Happy Birthday ${name3} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you.${thanks}!`);
}
  let name3='SkillF';
  greet3(name3);

// function in a variable & returning a string

let mygreet = function(name4, thank='Thank You'){
     let msg = `Happy Birthday ${name4} How I wish I could fly to you right now and be with you on this special day of yours. But remember, my good wishes are always there with you. ${thank}!`;
    return msg;
}
  let name4 = 'SkillF';
  let val2 = mygreet(name4, 'Thanks a lot');
  console.log(val2);

// using object
const myobj = {
        name: "SkillF",
        game: function(){
        return "GTA";
    }
}
console.log(myobj.game());

// using arrays
arr = ['fruit', 'vegetable', 'furniture'];
arr.forEach(function(element, index, array) {
    console.log(element, index, array)
    console.log(element, array)
    console.log(element, index)
});

// Scope In JavaScript

// let/const....has block level scope

let k =234;
console.log(k);
function uk(name){
    let k = 9;
    console.log(k);
    return `This is a ${name} uk`;
}
console.log(uk("bansal"), k);
   
// var..... has function level scope

var i =234;
console.log(i);

function ui(name){
     i = 9;
     console.log(i);
    return `This is a ${name} ui`;
}
console.log(ui("ritika"), i);