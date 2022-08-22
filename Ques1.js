// 1. Write a program to find whether a given year is a leap year or not.
 let year = prompt("Enter the year, here!");

 if (year%4===0  && year%100!==0 || year%400===0){
    console.log(`The year ${year} is an leap year`);
 }else{
    console.log(`The year ${year} is not an leap year`);
 }