// * Final Value of Variable After Performing Operations

/*
There is a programming language with only four operations and one variable X:

++X and X++ increments the value of the variable X by 1.
--X and X-- decrements the value of the variable X by 1.
Initially, the value of X is 0.

Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.
*/

/**
 * @param {string[]} operations
 * @return {number}
 */

// O(n) time | O(1) space
function finalValueAfterOperations(operations) {
  let result = 0

  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === '++X' || operations[i] === 'X++') result++
    else result--
  }

  return result
}

// -----------------------------
// TESTS

console.log(finalValueAfterOperations(['--X', 'X++', 'X++'])) // 1
/*
Explanation: The operations are performed as follows:
Initially, X = 0.
--X: X is decremented by 1, X =  0 - 1 = -1.
X++: X is incremented by 1, X = -1 + 1 =  0.
X++: X is incremented by 1, X =  0 + 1 =  1.
*/
