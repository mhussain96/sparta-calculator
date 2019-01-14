console.log('working');


// var start = "yes";
// while (start === "yes") {
//   var name = prompt("What is your name?");
//   var num1 = prompt('First number');
//   var num2 = prompt('Second number');
//   var choice = prompt('Would you like to add, subtract, times or divide?');
// function calculate(arg1, arg2, operator) {
//   if (operator === "add")
//   return parseInt(arg1) + parseInt(arg2)
//   if (operator === "subtract")
//   return parseInt(arg1) - parseInt(arg2)
//   if (operator === "times")
//   return parseInt(arg1) * parseInt(arg2)
//   if (operator === "divide")
//   return parseInt(arg1) / parseInt(arg2) 
// } 


// var sum = calculate(num1, num2, choice);
// alert(`${sum}`); 
// var end = prompt("Would you like to continue?");
// if (end === "no") {
//   break;
// } 

// }





function calc() {
  var num1 = prompt(`First Number`);
  var num2 = prompt(`Second Number`);
  var choice = prompt(`+, -, *, /`);
} if (choice === '+') {
  return Number(num1) + Number(num2);
} if (choice === '-') {
  return Number(num1) - Number(num2);
} if (choice === '*') {
  return Number(num1) + Number(num2);
} if (choice === '/') {
  return Number(num1) / Number(num2);
} 
console.log( calc());
































