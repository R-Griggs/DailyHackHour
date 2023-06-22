const testMergeSorted = require('../Merge Sorted/merge-sorted');

test('** check return value is of type Array **', () => {
  const testArr: number[] = testMergeSorted([17,11,35], [4,15,9], 3, 3);
  expect(Array.isArray(testArr)).toBe(true);
})

test('** check returned array length equals (m + n) **', () => {
  const testArr = testMergeSorted([1,2,3], [4,5,6], 3, 3);
  expect(testArr.length).toBe(6);
});

test('** check returned array is sorted with ascending pattern **', () => {
  const testArr: number[] = testMergeSorted([1,11,35], [4,5,9], 3, 3);
  console.log('testArr:', testArr);
  let isSorted: boolean = true;
  for( let i = 1; i < testArr.length; i++ ) {
    if(testArr[i] < testArr[i-1]) {
      isSorted = false;
    };
  };

  expect(isSorted).toBe(true);
});