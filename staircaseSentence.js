let str = process.argv[2];

let space = '';
var words = str.split(" ");

for (var i = 0; i < words.length ; i++) {
    
    console.log(space + words[i]);
    space+= ' ';
}







/*Write a script named `staircaseSentence.js` that takes a sentence-like string as an argument. 
Then, it logs each word on their own line according to their word position in the sentence times 2.
$ node staircaseSentence.js "The quick brown fox jumps over the lazy dog"

The

  quick

    brown

      jumps

        over

          the

            lazy

              dog*/