const indexOf = (needle, haystack) => {
  let counter = 0;
  let result = -1;

  for (let i = 0; i < haystack.length; i++){
    for (let j = 0; j < needle.length; j++){
      if (haystack[i + j] === needle[j]) {
        counter++;
        if (j === 0) result = i;
        if (counter === needle.length) return result;
      } else {
        counter = 0;
        result = -1;
      }
    }
  }

  return result;
}

// Testing
console.log(indexOf('ld', 'hello world')); // 7
console.log(indexOf('howdy', 'hello world')); // -1
console.log(indexOf('ello', 'hello world')); // 1
console.log(indexOf('rld', 'hello world')); // 8
console.log(indexOf('rd', 'hello world')); // -1