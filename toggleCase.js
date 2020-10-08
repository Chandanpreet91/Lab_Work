let original = process.argv[2];
let newstr = '';
let lowerString = original.toLowerCase();
for(let i=0; i<original.length; i++){
  if (original[i] === lowerString[i]){
      newstr += original[i].toUpperCase();
  }else{
      newstr+= lowerString[i] ;
  }
}console.log(`Toggle case, ${newstr}`); 