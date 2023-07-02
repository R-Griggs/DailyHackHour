// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

//declare function majorityElement
//input: array of nums
//output: num
function majorityElement(nums) {
    const cache = {};
    for(let i = 0; i < nums.length; i++) {
        if(cache[nums[i]]) {
            cache[nums[i]] ++;
        }
        else{
            cache[nums[i]] = 1;
        }
    }
    let max = -Infinity;
    let result;
    for(key in cache) {
        if(cache[key] > max) {
            max = cache[key];
            result = key;
        }
    }
    return result;
}

console.log(majorityElement([1,2,2,3,3,3,1,1]));