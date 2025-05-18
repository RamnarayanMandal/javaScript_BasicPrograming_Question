// To check Strong Number or not
// A strong number is a number where the sum of the factorials of its digits equals the number itself. For example, 145 is a strong number because 1!+4!+5!=1+24+120=145.


let no = 145;
let copy = no;
let fact = 1;
let sum = 0;


while(!no==0){

    let rem = no%10;

    for(let i=1; i <=rem ; i++ ){
       
        fact = i*fact;

    }
   
    sum += fact
    fact = 1;

   no = Math.floor(no/10);
   

}

if(sum===copy){
    console.log(`${copy} is Strong number`)
}
else{
    console.log(`${copy} is not Strong number`)
}

