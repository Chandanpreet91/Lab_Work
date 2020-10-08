//$ node capitalizeEvenLetters.js fish

//fIsH

let word = process.argv[2]
let result = ''
for(let i = 0; i <word.length; i++) {
if (i%2 === 1) {
let upper = word[i].toUpperCase()
result += upper
} else {
    result+=word[i]
}   
}
console.log(result)