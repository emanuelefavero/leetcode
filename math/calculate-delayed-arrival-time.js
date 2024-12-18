// * Calculate Delayed Arrival Time

/*
You are given a positive integer arrivalTime denoting the arrival time of a train in hours, and another positive integer delayedTime denoting the amount of delay in hours.

Return the time when the train will arrive at the station.

Note that the time in this problem is in 24-hours format.
*/

/**
 * @param {number} arrivalTime
 * @param {number} delayedTime
 * @returns {number}
 */

// O(1) time | O(1) space
function findDelayedArrivalTime(arrivalTime, delayedTime) {
  return (arrivalTime + delayedTime) % 24
}

// -------------------------
// SOLUTION 2

// TIP: This solution does not use the modulo operator

function findDelayedArrivalTime2(arrivalTime, delayedTime) {
  let result = arrivalTime + delayedTime

  if (result >= 24) return result - 24
  return result
}

// -------------------------
// TESTS

// 1
console.log(findDelayedArrivalTime(15, 5)) // 20
// Explanation: Arrival time of the train was 15:00 hours. It is delayed by 5 hours. Now it will reach at 15+5 = 20 (20:00 hours).
console.log(findDelayedArrivalTime(13, 11)) // 0
// Explanation: Arrival time of the train was 13:00 hours. It is delayed by 11 hours. Now it will reach at 13+11=24 (Which is denoted by 00:00 in 24 hours format so return 0).

// 2
console.log(findDelayedArrivalTime2(15, 5)) // 20
console.log(findDelayedArrivalTime2(13, 11)) // 0
