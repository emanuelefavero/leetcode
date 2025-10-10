// * Restore Finishing Order

/*
You are given an integer array order of length n and an integer array friends.

- order contains every integer from 1 to n exactly once, representing the IDs of the participants of a race in their finishing order.
- friends contains the IDs of your friends in the race sorted in strictly increasing order. Each ID in friends is guaranteed to appear in the order array.

Return an array containing your friends' IDs in their finishing order.
*/

/**
 * @param {number[]} order
 * @param {number[]} friends
 * @returns {number[]}
 */

// O(n) time | O(n) space
function recoverOrder(order, friends) {
  const result = []
  const length = friends.length
  const set = new Set([...friends])

  for (const id of order) {
    if (result.length === length) break
    if (set.has(id)) result.push(id)
  }

  return result
}

// -----------------------------
// SOLUTION 2

// TIP: We can also solve the problem with nested loops, but it would be less efficient (although in this case is fine since the constraints are small)

// O(n^2) time | O(1) space
function recoverOrder2(order, friends) {
  const result = []

  for (const id of order) {
    for (const friend of friends) {
      if (id === friend) {
        result.push(id)
        break
      }
    }
  }

  return result
}

// -----------------------------
// TESTS

// 1
console.log(recoverOrder([3, 1, 2, 5, 4], [1, 3, 4])) // [3, 1, 4]
// Explanation: The finishing order is [3, 1, 2, 5, 4]. Therefore, the finishing order of your friends is [3, 1, 4].
console.log(recoverOrder([1, 4, 5, 3, 2], [2, 5])) // [5, 2]
// Explanation: The finishing order is [1, 4, 5, 3, 2]. Therefore, the finishing order of your friends is [5, 2].

// 2
console.log(recoverOrder2([3, 1, 2, 5, 4], [1, 3, 4])) // [3, 1, 4]
console.log(recoverOrder2([1, 4, 5, 3, 2], [2, 5])) // [5, 2]
