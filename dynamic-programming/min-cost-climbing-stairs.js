// * Min Cost Climbing Stairs

/*
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

You can either start from the step with index 0, or the step with index 1.

Return the minimum cost to reach the top of the floor.
*/

// TODO jsDoc
// TODO link to README

// TIP: This is a bottom-up approach

function minCostClimbingStairs(cost, result = 0) {
  let prev1 = cost[0]
  let prev2 = cost[1]

  for (let i = 2; i < cost.length; i++) {
    // The current cost is the cost of the current step plus the minimum of the previous two steps
    let current = cost[i] + Math.min(prev1, prev2)

    // The previous two steps are updated
    prev1 = prev2
    prev2 = current
  }

  // The minimum cost is the minimum of the previous two steps at this point
  return Math.min(prev1, prev2)
}

// -----------------------------
// TESTS

console.log(minCostClimbingStairs([10, 15, 20])) // 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])) // 6
