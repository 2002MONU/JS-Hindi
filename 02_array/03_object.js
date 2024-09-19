// singleton
// object,create
// object literals
   const mySym = Symbol("key1");

 const jsUser = {
    name : "Monu Kumar",
    "Full name " : "Monu saini",
    age : 22,
   [ mySym] : "myKey1",
    location : "Vizag",
    email : "monu@gmail.com",
    isLogedIn : false,
    isLoginDays : ["Monday", "Saturday"]
 }

 console.log(jsUser.email);
 console.log(jsUser["email"]);
 console.log(jsUser["Full name"]);
console.log(jsUser[mySym]);
 

 jsUser.email = "Monusaini@gmail.com";
 //Object.freeze(jsUser);
 jsUser.email = "Monusainighj@gmail.com";
  //console.log(jsUser);

  jsUser.greeting = function(){
    console.log("Hello Monu");
    
  }

  
  jsUser.greetingTwo = function(){
    console.log(`Hello Monu , $(this.name)`);
    
  }


  console.log(jsUser.greeting());
  console.log(jsUser.greetingTwo());
  
  
  



 
 