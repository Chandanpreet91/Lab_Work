let a = parseFloat(process.argv[2]);
let b = parseFloat(process.argv[3]);
let c = parseFloat(process.argv[4]);

if(a+b>c && a+c > b && b+c > a ){
let perimeter= a + b+ c;
let p = perimeter/2;

console.log(`The perimeter is ${perimeter}`);

let area = Math.sqrt(p*(p - a)*(p - b)*(p - c));

console.log(`The area is : ${area}`);
}else{
    console.log(`Impossible Triangle`);
}
