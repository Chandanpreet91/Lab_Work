let quantity = parseInt(process.argv[2]);
let numOfFaces = parseInt(process.argv[3]);
let total = 0;
for (i =0 ; i< quantity ; i++){
 let rolled= Math.floor(Math.random() * quantity);
 total = total +rolled;
 console.log(`Rolled : ${rolled}`);}
 let averageRoll = total / 2;
 console.log(`__________________`);
 console.log(`Average Roll : ${averageRoll}`);
 console.log(`Total: ${total}`);


