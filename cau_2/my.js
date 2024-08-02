function checkString(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] >= 'A' && string[i] <= 'Z') {
            count++;
        }
    }
    if (count > 0) {
        return count;
    } else {
        return "The string does not contain any uppercase characters";
    }
}
let str = "hello hi";
let str2 = "Hello Hi"
console.log(checkString(str));
console.log(checkString(str2));