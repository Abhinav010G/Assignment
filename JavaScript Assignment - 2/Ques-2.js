// 2. Write a function using switch case to find the grade of a student based on marks obtained
// a. “S grade” if the marks are between 90 and 100.
// b. “A grade” if the marks are between 80 and 90.
// c. “B grade” if the marks are between 70 and 80.
// d. “C grade” if the marks are between 60 and 70.
// e. “D grade” if the marks are between 50 and 60.
// f. “E grade” if the marks are between 40 and 50.
// g. “Student has failed” if the marks are between 0 and 40.
// h. Else output “Invalid marks”.
function grade_stud(a){
    if (a>=90 && a<=100){
        console.log("S grade");
    }
    else if (a>=80 && a<90){
        console.log("A grade");
    }
    else if (a>=70 && a<80){
        console.log("B grade");
    }
    else if (a>=60 && a<70){
        console.log("C grade");
    }
    else if (a>=50 && a<60){
        console.log("D grade");
    }
    else if (a>=40 && a<50){
        console.log("E garde")
    }
    else if (a<40){
        console.log("Student has failed");
    }
    else {
        console.log("Invalid marks");
    }
}
grade_stud(54);