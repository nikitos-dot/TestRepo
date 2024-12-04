// Nikita Sigalov, Roy Horvitz
/*
a function that prints the follows:
1 if a number is devided by 2,3 or 5 and only by one of those 
2 if its devided by only a pair of numbers and just a pair, for example 3 and 5
3 if its devided by all 3 numbers
*/
const num = 60;
//Calculating the approprriate sum
console.log(Number(num % 5 == 0) + Number(num % 2 == 0) + Number(num % 3 == 0))
