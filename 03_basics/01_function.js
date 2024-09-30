
 

 function sayMyName(){
    console.log("M");
    console.log("O");
    console.log("N");
    console.log("U");
 }

//  sayMyName()

 function addTwoNumbers(number1 , number2){  // perameters
  // let result = number1 + number2;
   return number1 + number2
 }

//  addTwoNumbers(3 ,5) // arguments

 const result= addTwoNumbers(3 ,5)

//  console.log("Result :" , result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please Enter Username");
        return
    }
     return `${username} just Logged In`
}

function loginUserMessage(username){
    if(!username){
        console.log("Please Enter Username");
        return
    }
     return `${username} just Logged In`
}

console.log(loginUserMessage("Monu"))
// console.log(loginUserMessage()) // undefined
 




 
 