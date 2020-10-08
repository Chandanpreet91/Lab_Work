let num = parseInt(process.argv[2]);
let pyramid = '';
for(let i=1; i<=num; i++){
    pyramid+= '#'
    console.log(pyramid);
}
