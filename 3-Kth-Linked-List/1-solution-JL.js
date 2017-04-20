/*
ITERATIVE APPROACH:

the third hint set me off.

i thought ok, i can just keep "sending" runners down and i know that the kth one i sent will be at the right place when the last one arrives...

i'll end up sending as many runners as the length, so i know the length and can identify the length-k runner!

i started coding but then thought why keep sending runners?

why not just send two? the one that reaches the end and the kth one?

the first one goes in, but after k number of steps, i send the second. when the first reaches the tail, the second MUST be at the kth to last one.


this is an O(N) solution using O(1) space

*/


function getKthToLast(llhead, k){
  let runner = llhead
  let kth = llhead
  let counter = 0

  while (runner){
    if (counter >= k) kth = kth.next
    runner = runner.next
    counter++
  }

  return kth
}
