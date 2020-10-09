let num = parseInt(process.argv[2]);
let previousValue = 0;
let newValue = 1;
if(!num){
    console.log('Argument must be required');
}else if(num == 1){
console.log(1);
}else {
    console.log(1);
 for(let i=1;i<num; i++){
    
     fibonacciSum = previousValue+newValue;
     console.log(fibonacciSum);
     
     previousValue = newValue;
     newValue= fibonacciSum;
     
 }
}


//1 1 2 3 5
//1 1 2 3 5 8 13 21 34 55