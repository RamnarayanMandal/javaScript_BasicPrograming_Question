//  To check Armstrong No
//  1.step count each digit of give no
// 2.step mulation of count time of each digit of give no
// 3.step sum of mulation of each digit given no
// 4. compare give no and sum of all  sum of mulation of each digit given no  if give no equal to that no then armstong no else not armstong no

//  for example :- 153 = (1)*3 + (50)*3 + (3)*3
//                 1634 = (1)*4 + (6)*4 + (3)*4 + (4)*4




let no = 153;
let copy = no;
let count = 0;

//  1.step count each digit of give no
while (no !== 0) {
    no = Math.floor(no / 10);
    count++;

}


let no2 = copy;
let sum = 0;
let mul = 1;

while (no2 !== 0) {
    rem = no2 % 10;

    // 2.step mulation of count time of each digit of give no
    for (let i = 1; i <= count; i++) {
        mul = mul * rem;
    }

    //  3.step sum of mulation of each digit given no
    sum += mul;
    mul = 1;




    no2 = Math.floor(no2 / 10);

}

// 4. compare give no and sum of all  sum of mulation of each digit given no  if give no equal to that no then armstong no else not armstong no



if (copy === sum) {
    console.log(`${copy} is Armstong No`)
}
else {
    console.log(`${copy} is not Armstong No`)

}