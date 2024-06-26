// * Number of Employees Who Met the Target

/*
There are n employees in a company, numbered from 0 to n - 1. Each employee i has worked for hours[i] hours in the company.

The company requires each employee to work for at least target hours.

You are given a 0-indexed array of non-negative integers hours of length n and a non-negative integer target.

Return the integer denoting the number of employees who worked at least target hours.
*/

/**
 * @param {number[]} hours
 * @param {number} target
 * @returns {number}
 */

// O(n) time | O(1) space
function numberOfEmployeesWhoMetTarget(hours, target) {
  let count = 0

  for (let i = 0; i < hours.length; i++) {
    if (hours[i] >= target) count++
  }

  return count
}

// -------------------------
// TESTS

console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2)) // 3
