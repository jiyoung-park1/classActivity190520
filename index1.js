//linked list executable code
function linkedList(){

}


//recursion executable code
function countdownRecursion(number){
  if (number === 0){
   return;   
  }
  
  console.log(number)
  countdownRecursion(number - 1);

}

countdownRecursion(3)