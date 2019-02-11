var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
   var animal = "cat";
   return animal;
}

function add2(n) {
  var sum = n + 2;
  return sum;
}

function funkyFunction() {
  function funckyFunction(){ 
     //var theFunk = funkyFunction;
     return 'function';
  }
  return "FUNKY!";
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.

