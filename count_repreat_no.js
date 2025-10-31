// Count repeated numbers in an array
// for example :- [1,2,3,4,5,5,6,7,8,8,9,10,10,7,10,5,5]  => 
// output :- { '1': 1, '2': 1, '3': 1, '4': 1, '5': 4, '6': 1, '7': 2, '8': 2, '9': 1, '10': 3 }

let arr = [5,5,5,5,8,8,9]

let output = {}

for(let i=0; i<=arr.length-1; i++){
     output[arr[i]]=output[arr[i]]?output[arr[i]]+1:1
}

console.log(typeof(output))