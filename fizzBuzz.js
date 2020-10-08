//Write a script `fizzBuzz.js` that takes two numbers, 
//then iterates through the numbers from 1 to 100 logging "fizz" 
//if the current number is divisible by the first number, "buzz" 
//if the current number is divisible by the second number, 
//"fizzbuzz" if it's divisible by both, else print the current number.

let firstNum = parseInt(process.argv[2]);
let secondNum = parseInt(process.argv[3]);

for(let i=1;i<=15;i++){
    if ((i % firstNum === 0) && (i % secondNum === 0)){
        console.log('fizzbuzz')
    }else if((i % firstNum) === 0){
        console.log('fizz')
     }else if((i % secondNum) === 0){
      console.log('buzz');
}else{
    console.log(i);
}}
/*$ node fizzBuzz.js 3 5

1

2

fizz

4

buzz

fizz

7

8

fizz

buzz

11

fizz

13

14

fizzbuzz

...

```*/