// Nikita Sigalov, Roy Horvitz
//a function that given an arrays counts the number of 0's and prints the amount of 0's in an array
let arr = [1, 5, 0, 3, 5, 6, 0, 0, 0, 0, 0];
let zeroNum = 0;
for (i = 0; i < arr.length; i++) {
    zeroNum += Number(arr[i] == 0)
}
console.log(zeroNum);
