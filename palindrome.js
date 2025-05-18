// To check Given Number is Palindrome or not

/* A palindromic number is a number that reads the same forwards and backwards.
For example, 16361 is a palindromic number because if you reverse the digits, you still get 16361.

In simple words:

A palindromic number looks the same even when you flip the digits.

Other examples: 121, 444, 9009. 

*/

let no = 121;

let copy = no;

let rev =0;

while(!no== 0){
    let rem = no%10;

    rev = rev *10 + rem;

    no = Math.floor(no/10)
}

if(rev===copy){
    console.log(`${copy} is Reverse Number.`)
}
else{
    console.log(`${copy} is not Reverse Number.`)
}
