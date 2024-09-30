

function calculateCartPrice(...num1){ // rest  
    return num1
}

// console.log((calculateCartPrice(200 , 400, 500)));

 const user = {
    username : "Monu",
    price : 199
 }

 function handleobject(anyobject){
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}` );
   
 }

 handleobject({
    username : "Saini",
    price : 300
 })

 const myArray = [200,400,500,600];

 function returnSecondValue(myArray){
    return myArray[1];
 }