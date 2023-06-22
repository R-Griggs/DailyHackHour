// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

// Example 3:

// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]
// Explanation: The arrays we are merging are [] and [1].
// The result of the merge is [1].
// Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

function mergeSorted(nums1: number[], nums2: number[], m: number, n: number): void {
  //run while j < (m + n)
  let j: number = 0;
  let i: number = 0;
  //run while j is less than m+n
  while( j < ( m + n ) ){
      //if nums2[i] <= nums1[i] splice it into nums1[i-1] and increment i
      if(nums2[i] <= nums1[j] || nums2[i] && !nums1[j]){
        nums1.splice(j, 0, nums2[i]);
        i++;
      }
      j++;
  }
}

function mergeSortedPure(nums1: number[], nums2: number[], m: number, n: number): number[] {

  //solve problem here
  let i: number = 0, j:number = 0;
  const result: number[] = [];

  //run while i<num1.length or j < num2.length
  while( i < nums1.length || j < nums2.length ) {

    //push nums1[i] if nums1[i] < nums2[j] then increment i
    if(nums1[i] <= nums2[j] || nums1[i] && !nums2[j]) {
      result.push(nums1[i]);
      i++;
    }
    //push nums2[j] if nums2[j] < nums1[i] then increment j
    else if(nums2[j] <= nums1[i] || nums2[j] && !nums1[i]) {
      result.push(nums2[j]);
      j++;
    }
  } 
  //return result array
  return result;
}

const result = mergeSorted([5,6,7], [1,6,9], 3, 3);
console.log(result)


module.exports = mergeSorted;