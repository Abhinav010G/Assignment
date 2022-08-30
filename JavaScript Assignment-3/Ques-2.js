// 2 . Write a program to find whether a given number is armstrong number or not 
function armstrongNo(first,last){

for (let a = first ; a<=last ; a++){
    let n = a;
    let s = 0;
while (n>0) {
    let r = n % 10;
    s = s + r * r * r;
    n = parseInt(n / 10);
}

if (s === a) {
    console.log("The armstrong number is ", a);
}
}
}
armstrongNo(0,1000);
