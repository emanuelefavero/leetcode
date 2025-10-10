// * Restore Finishing Order

/*
You are given an integer array order of length n and an integer array friends.

- order contains every integer from 1 to n exactly once, representing the IDs of the participants of a race in their finishing order.
- friends contains the IDs of your friends in the race sorted in strictly increasing order. Each ID in friends is guaranteed to appear in the order array.

Return an array containing your friends' IDs in their finishing order.
*/

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
// TESTS

console.log(recoverOrder([3, 1, 2, 5, 4], [1, 3, 4])) // [3, 1, 4]
// Explanation: The finishing order is [3, 1, 2, 5, 4]. Therefore, the finishing order of your friends is [3, 1, 4].
console.log(recoverOrder([1, 4, 5, 3, 2], [2, 5])) // [5, 2]
// Explanation: The finishing order is [1, 4, 5, 3, 2]. Therefore, the finishing order of your friends is [5, 2].
