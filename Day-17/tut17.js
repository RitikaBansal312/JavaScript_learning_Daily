console.log('JavaScript_Learning_Day-17');

// Events & Event Object In JavaScript

document.getElementById("heading").addEventListener("click", function(){
  console.log("You have clicked the heading");
  location.href = '//google.com' // this will take me to google.com
});

 // click

document.getElementById("heading").addEventListener("click", function(e){
  let variable;
  console.log("You have clicked the heading");
  variable = e.target;
  console.log(variable);
  variable = e.target.className;
  console.log(variable);
  variable = e.target.classList;
  console.log(variable);
  variable = Array.from(e.target.classList);
  console.log(variable);

  variable = e.target.id;
  console.log(variable);
  variable = e.offsetX;
  console.log(variable);
  variable = e.offsetY;
  console.log(variable);
  variable = e.clientX;
  console.log(variable);
  variable = e.clientY;
  console.log(variable);
  // location.href = '//google.com'
});

 // mouseover
 
document.getElementById("heading").addEventListener("mouseover", function(e){
  let variable;
  console.log("You have clicked the heading");
  variable = e.target;
  console.log(variable);
  variable = e.target.className;
  console.log(variable);
  variable = e.target.classList;
  console.log(variable);
  variable = Array.from(e.target.classList);
  console.log(variable);

  variable = e.target.id;
  console.log(variable);
  variable = e.offsetX;
  console.log(variable);
  variable = e.offsetY;
  console.log(variable);
  variable = e.clientX;
  console.log(variable);
  variable = e.clientY;
  console.log(variable);
  // location.href = '//google.com'
});