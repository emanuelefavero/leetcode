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
  // We start at the first or second step
  for (let i = 2; i < cost.length; i++) {
    // We add the minimum cost of the previous step to the current step
    cost[i] += Math.min(cost[i - 1], cost[i - 2])
  }

  // We return the minimum cost of the last two steps
  return Math.min(cost[cost.length - 1], cost[cost.length - 2])
}

// -----------------------------
// TESTS

console.log(minCostClimbingStairs([10, 15, 20])) // 15
// Explanation: You will start at index 1.
// - Pay 15 and climb two steps to reach the top.
// The total cost is 15.

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])) // 6
