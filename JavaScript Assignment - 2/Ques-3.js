// 3. Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000
function Myfunc(a) {
    if (a % 3 === 0 && a % 5 === 0) {
        let sum = 0;
        for (i = 0; i <= a; i++) {
            sum += i;
        }
        console.log("Sum the numbers is ", +sum);
    }


    else if (a >= 1000)
        console.log("Invalid input");
    else {
        console.log("Error")
    }
}
Myfunc(15)