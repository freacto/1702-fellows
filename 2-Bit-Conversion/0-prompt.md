# Bit Conversion (from CtCI ch 5)
Write a function to determine the number of bits you would need to flip to convert
integer A to integer B.


### EXAMPLE:

> Input:  29 (or: `111101`), 15 (or: `101111`)
>
> Output: 2

### Function signature:

```js
const findNumBitsDifference = (a, b) => {

}
```

### Things to remember about JS bitwise operators:
[MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)

All bitwise operators convert operands to 32-bit signed integers, so don't forget to accomodate negative integers. Interviewees might want to start by dealing with positive integers and then move on to negative ones

```js
// tests:
console.log(findNumBits(29, 15), 'should be 2');
console.log(findNumBits(4, 4), 'should be 0');
console.log(findNumBits(1, -1), 'should be 31 (1 less than the 32 bits of this signed int)');
```

Hint (text is white, highlight to see it):

 <span style="color:white">
Don't forget that there are zero-filling and sign-propagating bit shift operations.  One might lead to infinite loops in some cases...
</span>