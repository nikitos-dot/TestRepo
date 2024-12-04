// Nikita sigalov, Roy Horvitz

//printing all prime numbers under 237, since we know we can go up to the square root

//a function that  checks if a certain number is number is prime, for a certain numbe, using  loop that runs up to the square root, for the
// the mathematical properties of prime number 
function prime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // aloop that checks up until the square root of the number since we can check the prime numbers via square root
        if (num % i === 0) return false;
    }
    return true;
}
// the main loop thT runs and printing each prime number from 2 up to 236 included
for (let i = 2; i < 237; i++) {
    if (prime(i)) {
        //printing the prime number
        console.log(i);
    }
}
