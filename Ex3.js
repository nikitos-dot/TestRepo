
let arr = [1, 5, 0, 3, 5, 6, 0, 0, 0, 0, 0];
let zeroNum = 0;
for (i = 0; i < arr.length; i++) {
    zeroNum += Number(arr[i] == 0)
}
console.log(zeroNum);