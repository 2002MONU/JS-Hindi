

 let a = 300
if(true){
    let a = 10
    const b = 20
    //var c = 30 
    // console.log("Inner:" , a);
    
}

// console.log(a);
// console.log(b);
//console.log(c);

//   

// nested   // clousere

function one(){
    const username = "Monu"

    function two(){
        const website = "Youtube"
        console.log(username);
        
    }
    // console.log(website);
    
    two()
}

// one()

if(true){
    const username = "Monu"
    if(username === "Monu"){
        const website = "yoitube";
   // console.log(username + website);
    
    }
   // console.log(website);
    
}

//console.log(username);



//*****************instresting  */

console.log(addone(5))
function addone(num){
 return num + 1
}



const addTwo = function(num){
    return num + 2
}
addTwo(5) 


