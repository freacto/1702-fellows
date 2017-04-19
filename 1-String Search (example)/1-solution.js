function indexOf (needle, haystack) {
  for (let hIdx = 0; hIdx <= haystack.length - needle.length; hIdx++) {
    for (let nIdx = 0; nIdx < needle.length; nIdx++) {
      if (haystack[hIdx + nIdx] !== needle[nIdx]) break;
      if (nIdx + 1 === needle.length) return hIdx;
    }
  }
  return -1;
}

/*Note: where n is the haystack size and m the needle size, the solution above is O(n&#42;m). There are [other algorithms](https://en.wikipedia.org/wiki/String_searching_algorithm#Single_pattern_algorithms), such as [Boyer-Moore](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string_search_algorithm) (well, [modified slightly](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string_search_algorithm#The_Galil_Rule)), that can perform at O(n+m) time—or even faster.*/

// Testing
console.log(indexOf('ld', 'hello world')); // 7
console.log(indexOf('howdy', 'hello world')); // -1
console.log(indexOf('ello', 'hello world')); // 1
console.log(indexOf('rld', 'hello world')); // 8
console.log(indexOf('rd', 'hello world')); // -1