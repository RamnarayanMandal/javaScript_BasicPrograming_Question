let str = "kayak";
let rev = "";

for(let i=str.length-1; i>=0 ; i--){
    rev+=str[i];
}

if(str===rev){
    console.log(`${str} is palindrome String`)
}
else{
    console.log(`${str} is not palindrome String`)
}
