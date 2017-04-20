# Prompt (from CtCI ch 2)

Implement an algorithm to find the kth to last element of a singly linked list.

### Example:

> Input: [3] -> [4] -> [1] -> [0], 3

> Output: [4]

### Function signature:

``` javascript
const returnKthToLast = (linkedListHead, k) => {

}
```
<details>
  <summary>hint</summary>
  <p> What if you knew the linked list size? What is the difference between finding the Kth-to-Last element and finding the Xth element?
  <details>
    <summary>hint</summary>
    <p>If you don't know the linked list size, can you compute it? How does this impact the runtime?
      <details>
      <summary>hint</summary>
      <p>You can do this recursively or iteratively. If you choose iteratively, imagine you had 2 pointers pointing at adjacent nodes and they were moving at the same speed through the linked list. When one hits the ends of the linked list, where will the other be?
    </p></details>
  </p></details>
</p></details>
