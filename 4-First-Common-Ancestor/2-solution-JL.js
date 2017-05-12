
// the main function
function returnCommonAncestor(root, p, q) {
  // just a safety check to make sure the edge case
  // of not having either p or q here....
  if (!covers(root, p) || !covers(root, q)) {
    return null
  }
  return ancestorHelper(root, p, q)
}

// the real meat of this problem
function returnCommonAncestor(root, p, q) {
  if (root === null || root === p || root === q) {
    return root
  }

  const pLeft = covers(root.left, p)
  const qLeft = covers(root.left, q)
  // below MUST mean that 1 is on left side
  // and 1 is on right side
  if (pLeft !== qLeft) return root

  // if we get past this statement...
  // MUST mean that both are on one side!
  const childSide = pLeft ? root.left : root.right
  return ancestorHelper(childSide, p, q)
}

// a really helpful search function
// this part can actually be integrated
// to reduce unnecessary steps
// (we're already at optimal runtime tho)
function covers(root, node) {
  if (!root) return false
  if (root === node) return true

  return covers(root.left, node) || covers(root.right,node)
}
