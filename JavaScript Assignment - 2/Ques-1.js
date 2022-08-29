//Write a Javascript function to check whether a triangle is equilateral,isosceles or scalene.

function triangle(a, b, c) {
    if (a === b && b === c) {
        console.log("THE TRIANGLE IS AN EQUILATERAL TRIANGLE")
    }
    else if (a === b || b === c || c === a) {
        console.log("THE TRIANGLE IS AN ISOSCELES TRIANGLE")
    }
    else {
        console.log("THE TRIANGLE IS AN SCALENE TRIANGLE")
    }
}
triangle(60,60,45);
