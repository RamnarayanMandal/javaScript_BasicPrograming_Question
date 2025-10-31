// Replace underscores with spaces and capitalize words
// input :- hello_world_this_is_js
// output :- Hello World This Is Js

let str = "ui_dev_guide"



let arr = str.split("_")

for(let i=0; i<=arr.length-1;i++){
     arr[i] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
}

console.log(arr.join(" "))