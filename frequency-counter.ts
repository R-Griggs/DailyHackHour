//crerate a function that checks if two strings are anagrams of one another

//input: string, string
//output bool
function isAnagram(str1: string, str2: string): boolean {
  //filter and return false
  //declare cache objects to hold characters and values
  const freq1: { [key: string]: number } = {};
  const freq2: { [key: string]: number } = {};

  //populate cache objects by iterating over passed in strings
  for(let i = 0; i < str1.length; i++) {
    const currChar: string = str1[i];
    freq1[currChar] ? freq1[currChar] += 1 : freq1[currChar] = 1;
  }
  for(let i = 0; i < str2.length; i++) {
    const currChar: string = str2[i];
    freq2[currChar] ? freq2[currChar] += 1 : freq2[currChar] = 1;
  }

  //compare the two cache objects
  for(const key in freq1) {
    //if both caches do not hold the same keys
    if(!(key in freq2)){
      return false;
    }
    //if both caches dont have matching values for each key
    if(freq1[key] !== freq2[key]) {
      return false
    }
  }
  //return true
  return true;
}

console.log(isAnagram('boomaaa', ''));



function isAnagram2(str1: string, str2: string): boolean {
  
  //check string lengrths match
  if(str1.length !== str2.length) {
    return false;
  }

  //iterate over string 1 to populate a cache {char: count}
  const charCache: { [key: string]: number} = {};
  for (let i = 0; i < str1.length; i++) {
    charCache[str1[i]] ? charCache[str1[i]] ++ : charCache[str1[i]] = 1;
  };

  //iterate over str2 and check against charCache
  for (let j = 0; j < str2.length; j++) {
    //check if curr char is in the cache
    if(!charCache[str2[j]] || charCache[str2[j]] === 0){
      return false;
    }
    charCache[str2[j]] --;
  };

  console.log(charCache)
  return true;
}

console.log(isAnagram2('cvbn', 'cnvb'))