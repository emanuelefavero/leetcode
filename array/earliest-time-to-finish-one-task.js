// * Earliest Time to Finish One Task

/*
You are given a 2D integer array tasks where tasks[i] = [si, ti].

Each [si, ti] in tasks represents a task with start time si that takes ti units of time to finish.

Return the earliest time at which at least one task is finished.
*/

function earliestTime(tasks) {
  let min = Infinity

  for (const task of tasks) {
    let sum = task[0] + task[1]
    min = Math.min(min, sum)
  }

  return min
}

// -------------------------
// SOLUTION 2

// TIP: THis solution works but it is slightly less efficient

function earliestTime2(tasks) {
  let sums = []

  for (const task of tasks) {
    let sum = task[0] + task[1]
    sums.push(sum)
  }

  return Math.min(...sums)
}

// -------------------------
// TESTS

// 1
console.log(
  earliestTime([
    [1, 6],
    [2, 3],
  ])
) // 5
/* Explanation:
The first task starts at time t = 1 and finishes at time 1 + 6 = 7. The second task finishes at time 2 + 3 = 5. You can finish one task at time 5.
*/
console.log(
  earliestTime([
    [100, 100],
    [100, 100],
    [100, 100],
  ])
) // 200
/* Explanation:
All three tasks finish at time 100 + 100 = 200.
*/

// 2
console.log(
  earliestTime([
    [1, 6],
    [2, 3],
  ])
) // 5
console.log(
  earliestTime([
    [100, 100],
    [100, 100],
    [100, 100],
  ])
) // 200
