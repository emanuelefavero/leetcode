// * Number of Laser Beams in a Bank

// ? Medium

/*
Anti-theft security nums are activated inside a bank. You are given a 0-indexed binary string array bank representing the floor plan of the bank, which is an m x n 2D matrix. bank[i] represents the ith row, consisting of '0's and '1's. '0' means the cell is empty, while'1' means the cell has a security device.

There is one laser beam between any two security nums if both conditions are met:

- The two nums are located on two different rows: r1 and r2, where r1 < r2.
- For each row i where r1 < i < r2, there are no security nums in the ith row.

Laser beams are independent, i.e., one beam does not interfere nor join with another.

Return the total number of laser beams in the bank.
*/

/**
 * @param {string[]} bank
 * @returns {number}
 */

// O(m * n) time | O(m) space
function numberOfBeams(bank) {
  const nums = []

  // Count the number of devices on each floor
  for (const floor of bank) {
    let count = 0
    for (const cell of floor) {
      if (cell === '1') count++
    }
    nums.push(count)
  }

  let sum = 0

  // Loop through each floor with devices and find the next floor with devices to calculate the number of beams
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0) continue

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === 0) continue

      // Calculate the number of beams between floor i and floor j by multiplying the number of nums on each floor
      sum += nums[i] * nums[j]
      break
    }
  }

  return sum
}

// -------------------------
// SOLUTION 2

// TIP: We can filter out the floors with no devices first, then just sum the number of beams between each pair of consecutive floors with devices

function numberOfBeams2(bank) {
  const nums = []

  // Loop through each floor and each cell to count the number of devices on each floor
  for (let i = 0; i < bank.length; i++) {
    let count = 0
    for (let j = 0; j < bank[i].length; j++) {
      if (bank[i][j] === '1') count++
    }
    nums.push(count)
  }

  // Filter out the floors with no devices
  const filtered = nums.filter((count) => count > 0)

  // Sum the number of beams between each pair of consecutive floors with devices
  let sum = 0
  for (let i = 0; i < filtered.length - 1; i++) {
    sum += filtered[i] * filtered[i + 1]
  }

  return sum
}

// -------------------------
// SOLUTION 2

// TIP: We can also keep track of the number of devices on the previous floor with devices while iterating through the bank

function numberOfBeams3(bank) {
  let sum = 0
  let prev = 0

  for (const floor of bank) {
    let count = 0

    for (const cell of floor) {
      if (cell === '1') count++
    }

    // If there are devices on the current floor, calculate the number of beams with the previous floor and update prev
    if (count > 0) {
      sum += prev * count
      prev = count
    }
  }

  return sum
}

// -------------------------
// TESTS

// 1
console.log(numberOfBeams(['011001', '000000', '010100', '001000'])) // 8
/*
Explanation: Between each of the following device pairs, there is one beam. In total, there are 8 beams:
 * bank[0][1] -- bank[2][1]
 * bank[0][1] -- bank[2][3]
 * bank[0][2] -- bank[2][1]
 * bank[0][2] -- bank[2][3]
 * bank[0][5] -- bank[2][1]
 * bank[0][5] -- bank[2][3]
 * bank[2][1] -- bank[3][2]
 * bank[2][3] -- bank[3][2]
Note that there is no beam between any device on the 0th row with any on the 3rd row.
This is because the 2nd row contains security nums, which breaks the second condition.
*/
console.log(numberOfBeams(['000', '111', '000'])) // 0
// Explanation: There does not exist two nums located on two different rows.

// 2
console.log(numberOfBeams2(['011001', '000000', '010100', '001000'])) // 8
console.log(numberOfBeams2(['000', '111', '000'])) // 0

// 3
console.log(numberOfBeams3(['011001', '000000', '010100', '001000'])) // 8
console.log(numberOfBeams3(['000', '111', '000'])) // 0
