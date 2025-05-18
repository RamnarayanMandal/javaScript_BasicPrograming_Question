//  Reverse String using for loop

let str = "Ramnarayan Mandal";
let rev="";

for(let i=str.length-1; i>=0; i--){
    rev+=str[i];
}

console.log("for loop",rev)

//  Reverse String using for while loop

let j = str.length-1;

while(j>=0){
    rev+=str[j];
    j--

}

console.log("while loop",rev)