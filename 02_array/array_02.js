 const marvelHeros = ["Thor","Ironman" ,"Spiderman"]

 const dc_heros = ["superman","flash","batman"]

//    const allHeros =   marvelHeros.concat(dc_heros);
//     console.log(allHeros);

const all_new_heros = [...marvelHeros,...dc_heros]; // spreads operators

console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity);

console.log(real_another_array);

 console.log(Array.isArray("Monu"));

 console.log(Array.from("Monu"));

 console.log(Array.from({name:"Monu"})); // intersting

 let score1= 100;
 let score2 = 200;
 let score3 = 300;

 console.log(Array.of(score1,score2,score3));
 
 
 

    
  