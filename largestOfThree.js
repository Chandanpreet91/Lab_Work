let firstNum = process.argv[2];
let secNum = process.argv[3];
let thirdNum = process.argv[4];
 
let largestNum = firstNum;

if (secNum> largestNum){
    largestNum = secNum;
}
if(thirdNum > largestNum){
    largestNum = thirdNum;
}
console.log(`the largest number is : ${largestNum}`);

