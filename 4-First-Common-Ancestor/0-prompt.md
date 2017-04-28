# Prompt (from CtCI ch 4.8)

Implement an algorithm to find the first common ancestor of 2 given nodes on a binary tree

(NOTE for interviewer. they may assume a few facts.. and they should not assume the following:
- this is a binary search tree
- this is doubly linked (you can link back to the parents from each child))

There's a more optimized solution beyond the scope of the hints provided below in CtCI.

### Example:

> Input: [3] -> [4] -> [1] -> [0], 3

> Output: [4]

### Function signature:

``` javascript
const returnFirstCommonAncestor = (root, p, q) => {

}
```
<details>
  <summary>hint</summary>
  <p> The first common ancestor means the deepest node such that p and q are descendants. Think about how you'd identify that.
  <details>
    <summary>hint</summary>
    <p>How can you figure out if p is a descendant of a node n???? And what does it mean if you find p there, what should you do next with that knowledge?
      <details>
      <summary>hint</summary>
      <p>So you'll start with the root... checking if it is p... and then finish looking for it in the rest of the tree somehow. And then we'll also be checking nodes if they are q... and how do we know which path it'll turn up in?
        <details>
        <summary>hint</summary>
        <p>If you haven't said recursion by now, you should go back and implement binary tree and a search method for it. It'd be helpful to have some kind of function that checks if the left or right contains a given node. If you're stuck, try making that helper function.
          <details>
          <summary>hint</summary>
          <p>The node at which p and q are contained in opposite sides respectively is the the node you should return.
        </p></details>
      </p></details>
    </p></details>
  </p></details>
</p></details>
