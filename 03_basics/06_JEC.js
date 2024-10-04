

  //javascript Exective AudioContext

//  { }  global EC 

// Global Execution Contaxt

// function Execution context 

// Eval Execution Contaxt

// {} 1 // memery creation face // creation face  // memrory alocation
// 2 Execution face 

let val1 = 10
let val2 = 5

function addNum(num1,num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1 ,val2)
let result2 = addNum(10,2)

// 1 // global execution-  this 
 // memery phase
//    val1 = undefined
//    val2 = undefined 

//addNum - defination 

// result1 == undefined
// result2 = undefined

// 2// exection phase 

// val1 = 10
// val2 = 5 

// addNum -> new varibles + execution thread   // delete bhi hota ha kam hona ka bad 

1 //Memory phase                   2 // execution context        3 Execution Phase   
//1 val1 -> undefined                  num1->10                     val1= 10
//2 val2 -> undefined                  num2-> 5                     val2 = 5
// tottal = undefined                  total -> 15                   addnum -> 15
                                                                      
                                                                   // NEw varibles  thread
                                                                  //1 memory   2 execution

          // lifo last in first out                                                         
      // call stack                                                            