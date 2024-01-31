function isIncreasingNumber(n) {
    if(n < 0 || n > 1000000) return null;
    if(n.length < 10) return null;

    let remaining = n;
    let prevDigit = 10;

    

    while (remaining > 0) {
        lastDigit = remaining % 10;

        if(lastDigit >= prevDigit) return false

        prevDigit = lastDigit;

        remaining = Math.trunc(remaining / 10)
        console.log('check remaining', remaining);

    }
    return true
}

console.log('check isIncreasing', isIncreasingNumber(1234));
