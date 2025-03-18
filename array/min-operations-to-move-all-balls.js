// * Minimum Number of Operations to Move All Balls to Each Box

/*
You have n boxes. You are given a binary string boxes of length n, where boxes[i] is '0' if the ith box is empty, and '1' if it contains one ball.

In one operation, you can move one ball from a box to an adjacent box. Box i is adjacent to box j if abs(i - j) == 1. Note that after doing so, there may be more than one ball in some boxes.

Return an array answer of size n, where answer[i] is the minimum number of operations needed to move all the balls to the ith box.

Each answer[i] is calculated considering the initial state of the boxes.
*/

/**
 * @param {string} boxes
 * @returns {number[]}
 */

// O(n^2) time | O(n) space
function minOperations(boxes) {
  let answer = []

  for (let i = 0; i < boxes.length; i++) {
    let count = 0

    // Go left
    let left = i - 1
    while (left >= 0) {
      if (boxes[left] === '1') count += i - left
      left--
    }

    // Go right
    let right = i + 1
    while (right < boxes.length) {
      if (boxes[right] === '1') count += right - i
      right++
    }

    answer.push(count)
  }

  return answer
}

// -------------------------
// SOLUTION 2

// TIP: This solution is more efficient than the previous one. We just have to count the number of balls and the moves to the left and right of each box

// O(n) time | O(n) space
function minOperations2(boxes) {
  let answer = Array(boxes.length).fill(0)

  let balls = 0
  let moves = 0

  // Go left
  for (let i = boxes.length - 1; i >= 0; i--) {
    answer[i] += moves
    if (boxes[i] === '1') balls++
    moves += balls
  }

  balls = 0
  moves = 0

  // Go right
  for (let i = 0; i < boxes.length; i++) {
    answer[i] += moves
    if (boxes[i] === '1') balls++
    moves += balls
  }

  return answer
}

// -------------------------
// TESTS

// 1
console.log(minOperations('110')) // [1,1,3]
/*
Explanation: The answer for each box is as follows:
1) First box: you will have to move one ball from the second box to the first box in one operation.
2) Second box: you will have to move one ball from the first box to the second box in one operation.
3) Third box: you will have to move one ball from the first box to the third box in two operations, and move one ball from the second box to the third box in one operation.
*/

// 2
console.log(minOperations2('110')) // [1,1,3]
