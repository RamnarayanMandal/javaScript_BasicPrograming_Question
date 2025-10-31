//  replace spaces with underscores
// input :- Hello World This Is Js
// output :- hello_world_this_is_js

let input = "Hello World This Is Js"

let str = input.split(" ")



for(let i=0; i<=str.length-1; i++){

    if(i===0){
      str[i] = str[i].charAt(0).toLowerCase()+str[i].slice(1)
    }
    else{

     str[i] = "_"+str[i].charAt(0).toLowerCase()+str[i].slice(1)
}
  
   
}

let output = str.join("")

console.log(output)