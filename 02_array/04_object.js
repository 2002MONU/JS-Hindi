
const tinderUser = {}

tinderUser.id = "12345";
tinderUser.name = " Monu";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "monu@gmail.com",
    fullname : {
        userfullname: {
            firstname : "Monu",
            lastname : "Kumar"
        }
    }
} 

// console.log(regularUser.fullname);

  const obj1 = {1:"a",2:"b"}
  const obj2 = {3:"a",4:"b"}
  const obj4 = {5:"a",6:"b"}

//   const obj3 = { obj1 , obj2}
//   const obj3 =  Object.assign({} ,obj1, obj2 ,obj4)
   const obj3 = {...obj1,...obj2,...obj4}
  console.log(obj3);
  