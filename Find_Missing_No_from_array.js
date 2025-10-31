// find the missing number from an array of 1 to N numbers

// for example :- [1,2,3,4,6]  => missing no is 5
//  count of no = 10
// output = new array  [5,7,8,9,10]

let arr = [1,2,3,5]
let count = 10;
let output = []



for(let i=1; i<=10; i++){
    arr.includes(i)?"":output.push(i)
    
}

console.log(output)