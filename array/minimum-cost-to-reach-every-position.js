// * Minimum Cost to Reach Every Position

/*
You are given an integer array cost of size n. You are currently at position n (at the end of the line) in a line of n + 1 people (numbered from 0 to n).

You wish to move forward in the line, but each person in front of you charges a specific amount to swap places. The cost to swap with person i is given by cost[i].

You are allowed to swap places with people as follows:

- If they are in front of you, you must pay them cost[i] to swap with them.
- If they are behind you, they can swap with you for free.

Return an array answer of size n, where answer[i] is the minimum total cost to reach each position i in the line.
*/

/**
 * @param {number[]} cost
 * @returns {number[]}
 */

// TIP: The problem is worded poorly, but it can easily be solved by keeping track of the minimum value seen so far as you iterate through the array

// O(n) time | O(n) space
function minCosts(cost) {
  let result = []

  let min = Infinity
  for (let i = 0; i < cost.length; i++) {
    min = Math.min(min, cost[i])
    result.push(min)
  }

  return result
}

// -------------------------
// SOLUTION 2

// TIP: This is a one liner solution

const minCosts2 = (cost) =>
  cost.map((value, i) => (cost[i] = Math.min(value, cost[i - 1] || Infinity)))

// -------------------------
// TESTS

// 1
console.log(minCosts([5, 3, 4, 1, 3, 2])) // [5,3,3,1,1,1]
/* Explanation:
We can get to each position in the following way:

i = 0. We can swap with person 0 for a cost of 5.
i = 1. We can swap with person 1 for a cost of 3.
i = 2. We can swap with person 1 for a cost of 3, then swap with person 2 for free.
i = 3. We can swap with person 3 for a cost of 1.
i = 4. We can swap with person 3 for a cost of 1, then swap with person 4 for free.
i = 5. We can swap with person 3 for a cost of 1, then swap with person 5 for free.
*/
console.log(minCosts([1, 2, 4, 6, 7])) // [1,1,1,1,1]

// 2
console.log(minCosts2([5, 3, 4, 1, 3, 2])) // [5,3,3,1,1,1]
console.log(minCosts2([1, 2, 4, 6, 7])) // [1,1,1,1,1]
