const testMergeSorted = require('../merge-sorted');

test('** check nums1 array is sorted with ascending pattern **', () => {
  const testArr: number[] = testMergeSorted([1,11,35], 3, [4,5,9], 3);
  let isSorted: boolean = true;
  for( let i = 1; i < testArr.length; i++ ) {
    if(testArr[i] < testArr[i-1]) {
      isSorted = false;
    };
  };

  expect(isSorted).toBe(true);
});