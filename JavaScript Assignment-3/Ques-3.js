// Write a program to find whether a given number is special number or not If the sum of the factorial of digits of a number (N) is equal to the number itself, the number (N) is called a special number.
//  eg- 145 is a special number Logic- 1! + 4! + 5!= 1+24+120 
function fact(n){
let f = 1;
while(n!=0){
 f = f*n;
 n--;
}
return f;
}

function specialNo(n){
    let sum = 0;
    let temp = n;
    while (temp !=0){
     
        sum = sum + fact(temp%10);
        temp = parseInt(temp/10);
    }
    if (sum == n){
        console.log("Special Number ")
    }
    else {
        console.log("Normal no.")
    }
}
specialNo(145);
	
    
    
 
    
   
    
