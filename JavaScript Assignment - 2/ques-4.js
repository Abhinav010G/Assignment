// 4. Write a program to find the factorial of all prime numbers between a given range . Range will be passed as 2 values in the function  parameters. eg- if it is needed to find the values for numbers 1-100, then function declaration can look like - function prime(1,100).
function prime(a, b) {
    for (let i = a; i <= b; i++) {
        let num = 0;
        let fact = 1;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                num++;
                break;
            }
        }
        if (i > 1 && num == 0) {
            console.log(i);
            for (let k = 1; k <= i; k++)
                fact = fact * k;
            console.log("FACTORIAL", +fact);
        }
    }
}
prime(1, 10);