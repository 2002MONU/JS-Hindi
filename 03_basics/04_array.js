
const user = {
    username : "Monu",
    price:999,  // current contact refer

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }


}
// global object window object
// user.welcomeMessage()
// user.username = "Sam"

// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Monu";
//     console.log(this.username);
    
// }

// chai(this);

// const chai = function(){
//    // let username = "Monu";
// //     console.log(this.username);
// }

const chai = () => {
    let username = "Monu"
    console.log(this);
    
}

// chai()

//  const addTwo = (num1 , num2) => {
//     return num1 + num2
//  }

//  console.log(addTwo(3,6));
 
// const addTwo = (num1 , num2) => (num1 + num2)

const addTwo = (num1 , num2) => ({user : "Monu"})

console.log(addTwo(3,4));
