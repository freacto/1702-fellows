

const findNumBits = (a, b) => {
  // sanity check
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN;
  }
  let diff = a ^ b;
  let count = 0;
  // consume until number is 0
  while (diff) {
    count += diff & 1;
    // must be zero-filling right shift
    diff = diff >>> 1;
  }
  // could also be this for loop
  // for (let num = a ^ b; num !== 0; num = num >>> 1) {
  //   count += num & 1;
  // }
  return count;
}

console.log(findNumBits(29, 15), 'should be 2');
console.log(findNumBits(4, 4), 'should be 0');
console.log(findNumBits(1, -1), 'should be 31 (1 less than the 32 bits of this signed int)');