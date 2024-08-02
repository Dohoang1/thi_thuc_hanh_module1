function isPrime(arr) {
    let result = [];
    let num = 0;
    let isPrime;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (num <= 2) {
            continue;
        }
        isPrime = true;
        for (let j = 2; j <= Math.sqrt(num); j++) {
            if (num % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            result.push(num);
        }
    }
    let temp = 0;
    for (let k = 0; k < result.length; k++) {
        for (let l = k +1 ; l < result.length; l++) {
            if ( result[k] > result[l] ) {
                temp = result[k];
                result[k] = result[l];
                result[l] = temp;
            }
        }
    }
    return result;
}
let nums = [1, 2, 5, 6, 23, 8, 47, 10, 3];

console.log(isPrime(nums));