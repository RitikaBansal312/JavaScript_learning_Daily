console.log('JavaScript_Learning_Day-19');

// Local & Session storage in JavaScript

let impArray = ['adrak', 'pyaz', 'bhindi'];

// Add a key-value pair inside local Storage
localStorage.setItem('Name', 'Ritika');
localStorage.setItem('Name2', 'Rashi');
localStorage.setItem('Sabzi', JSON.stringify(impArray));

// Clears the entire local storage
localStorage.clear();

// Clear a particular key-value pair
localStorage.removeItem('Name2');

// Retrieve an item from the local Storage
let name = localStorage.getItem('Name');
name = JSON.parse(localStorage.getItem('Sabzi'));
console.log(name)

sessionStorage.setItem('sessionName', 'sRitika');
sessionStorage.setItem('sessionName2', 'sRashi');
sessionStorage.setItem('sessionSabzi', JSON.stringify(impArray));