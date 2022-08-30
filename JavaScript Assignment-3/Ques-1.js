// 1. Using for loops, write a Javascript program to output the following pattern -
// 1
// 2 3
// 4 5 6
// 7 8 9 10
let a = "";
for ( i = 1 ; i<=5; i++){
    for (j=1;j<=i;j++){
        a += j;
    }
    a += "\n";
    }
    console.log(a);