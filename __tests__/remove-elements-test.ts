const removeElement = require('../remove-element');

test('*** test element is removed', () => {
  const removeElementTest = removeElement([0,0,1,3,5,0,7,9,0], 0) 

  let elementIsRemoved = true;

  for(let i = 0; i < removeElementTest.length; i++) {
    if(removeElementTest[i] === 0) {
      elementIsRemoved = false;
    }
  }

  expect(elementIsRemoved).toBe(true);
  
});