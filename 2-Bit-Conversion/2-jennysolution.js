// use modulo to determine if there is a '1' in the XOR'd result in each place
// need to add one change at the end if there is a leftover 1 
// (always the case but can't find a more elegant way to take care of the edge case of n and m being the same)

function determineChangesNeeded (n, m){
  let xord = n ^ m;
  let changes = 0;
  while (xord > 1) {
    if (xord % 2) changes++
    xord = Math.ceil(xord/2)
  }
  if (xord === 1) changes++
  return changes
}
