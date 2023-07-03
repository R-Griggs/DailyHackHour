// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]

//declare a func labeled rotateArr
//input: array of nums, num
//output: none-mutate input array
console.time();
function rotateArr(nums, k) {
    //zero value is breaking it
    const cache = {};
    let pointer;
    if( k > nums.length){
        k = k % nums.length;
    }
    for(let i = 0; i < nums.length; i++){
        if(i+k >= nums.length) {
            pointer = i + k - nums.length;
        }
        else {
            pointer = i + k;
        }
        cache[pointer] = nums[pointer];
        if(cache[i]) {
            nums[pointer] = cache[i];
            delete(cache[i])
        }
        else{
            nums[pointer] = nums[i];
        }
    }
    console.log(nums)
    return;
}

rotateArr([1,2,3,4,5,6,7,8,9,0], 3);

console.timeEnd();