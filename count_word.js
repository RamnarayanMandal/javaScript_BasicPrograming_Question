// Count repeated words in a string
// for example :- "hello world hello"  =>
// output :- { 'hello': 2, 'world': 1 }

let str = "hello world hello"
    str = str.split(" ")

    let output ={}

for(let i=0; i<=str.length-1;i++){
   
     output[str[i]]=output[str[i]]?output[str[i]]+1:1
}

console.log(output)


//  count of words in a array of strings
// for example :- ["hello world", "hello js", "hello world hello"]  =>
// output :- { 'hello': 4, 'world': 2, 'js': 1 }


let arr = ["hello world", "hello js", "hello world hello"] 

arr = arr.join(" ").split(" ")

let result = {}

for(let i=0; i<=arr.length-1; i++){
    result[arr[i]]= result[arr[i]]?result[arr[i]]+1:1;
}

console.log(result)

// count occurrence of characters in a string
// for example :- "hello"  =>
// output :- { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }

let string = "hello"
let charCount = {}

for(let i=0; i<= string.length-1; i++){
    charCount[string[i]] = charCount[string[i]]?charCount[string[i]]+1:1
}

console.log(charCount)


//  count occurrence of words in given object
//  for example :- let people =[{ name:"mary",gender:"female"}
//                              { name:"john",gender:"male"}
//                              { name:"jane",gender:"female"}
//                              { name:"doe",gender:"male"}
//                            ];
// output :- {
//   'female': 3,
//   'male': 2
// }

let people =[{ name:"mary",gender:"female",age:25},
              { name:"john",gender:"male",age:30},
              { name:"jane",gender:"female",age:28},
              { name:"doe",gender:"male",age:22}
            ];

let genderCount = {}

for(let i=0; i<=people.length-1; i++){
    genderCount[people[i].gender] = genderCount[people[i].gender]?genderCount[people[i].gender]+1:1
}

console.log(people.sort((a,b)=>a.age-b.age))
