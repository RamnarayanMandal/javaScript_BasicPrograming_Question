//  To find the Fibonacci series for 1st ten ?number or within the range 100 using for loop.

//  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

//  ........Logic..........

//  a+b = c
//  0 + 1 = 1
//   b=a; , a=c ;

//  1+0 =1 
//  1+1=2
//  2+1 =3
//  3+2 =5
//  5+3 =8
//  8+5 =13
//  13+8 =21  ... so on 



let a = 0;
let b = 1;

let c;

for (let i = 0; i <= 9; i++) {

    if (i === 0) {
        console.log(a)
    }
    else {

        c = a + b;
        console.log(c)


        b = a;
        a = c;
    }


}



//  To find the Fibonacci series for 1st ten ?number or within the range 100 using while loop.

console.log("......while Loop.........")

let x = 0;
let y = 1;

let z = 0;

let j =0;

 console.log(z)

while( j <=8 ){
    z= x+y;
    console.log(z)
     y=x;
     x=z;
     j++;
}
