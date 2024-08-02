let nums = [3,6,11,17,4,9,18,20,5,1];
console.log(nums);
console.log(nums.length)

let oddsum = 0;
let evensum = 0;
for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
        oddsum += nums[i];
    } else {
    evensum += nums[i];}
}
console.log(evensum - oddsum);

