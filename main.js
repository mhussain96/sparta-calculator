console.log('working');

var name = prompt("What is your name?");

function outerFunction(goblin) {
  
   function innerFunction(troll) {
     console.log(troll);

         }

   innerFunction(goblin)            

}

outerFunction(name);