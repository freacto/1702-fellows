function countBits (num, bit) {
  let bitCount = 0;
  let currentBit = num & 1;

  while (currentBit === bit) {
    bitCount++;
    num >>= 1;
    currentBit = num & 1;
  }

  return [bitCount, num];
}

function nextLargest (num) {
  let [zeros, remainder] = countBits(num, 0);
  let [ones] = countBits(remainder, 1);
  let totalBits = zeros + ones; // position of rightmost non-trailing zero

  num |= 1 << totalBits; // flip the bit at the rightmost non-trailing zero
  num &= ~((1 << totalBits) - 1); // clear all the bits to the right of the flipped bit
  num |= ((1 << (ones - 1)) - 1); // insert the remaining ones to the right

  return num;
}

function nextSmallest (num) {
  let [ones, remainder] = countBits(num, 1);
  let [zeros] = countBits(remainder, 0);
  let totalBits = zeros + ones; // position of rightmost non-trailing one

  num ^= 1 << totalBits; // flip the bit at the rightmost non-trailing one
  num &= ~((1 << totalBits) - 1); // set bits to the right of the flipped bit to 0
  num |= ((1 << (ones + 1)) - 1) << (zeros - 1); // insert the remaining ones to the right of the flipped bit

  return num;
}

const num = 1000;
console.log(num.toString(2));
console.log(nextSmallest(num), nextLargest(num));
