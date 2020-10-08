let num = parseInt(process.argv[2])

if(num<0 || num>=100){
    console.log("Invalid grade");
}else if(num >= 95 && num < 100){
    console.log('Grade A');
}else if(num>=80 && num < 95){
    console.log('Grade B')
}else if(num>=70 && num < 80){
    console.log('Grade C');
}else if(num>=60 && num << 70){
    console.log('Grade C+')
}else{
    console.log('Fail');
}

