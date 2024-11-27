//printing all prime numbers under 237, since we know we can go up to the square root

function prime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // aloop that checks up until the square root of the number since we can check the prime numbers via square root
        if (num % i === 0) return false;
    }
    return true;
}

for (let i = 2; i < 237; i++) {
    if (prime(i)) {
        //printing the prime number
        console.log(i);
    }
}