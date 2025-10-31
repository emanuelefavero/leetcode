// * Number of Laser Beams in a Bank

// ? Medium

/*
Anti-theft security devices are activated inside a bank. You are given a 0-indexed binary string array bank representing the floor plan of the bank, which is an m x n 2D matrix. bank[i] represents the ith row, consisting of '0's and '1's. '0' means the cell is empty, while'1' means the cell has a security device.

There is one laser beam between any two security devices if both conditions are met:

- The two devices are located on two different rows: r1 and r2, where r1 < r2.
- For each row i where r1 < i < r2, there are no security devices in the ith row.

Laser beams are independent, i.e., one beam does not interfere nor join with another.

Return the total number of laser beams in the bank.
*/

/**
 * @param {string[]} bank
 * @returns {number}
 */

// O(m * n) time | O(m) space
function numberOfBeams(bank) {
  const devices = []

  // Count the number of devices on each floor
  for (const floor of bank) {
    let devicesCount = 0
    for (const cell of floor) {
      if (cell === '1') devicesCount++
    }
    devices.push(devicesCount)
  }

  let beamsCount = 0

  // Loop through each floor with devices and find the next floor with devices
  for (let i = 0; i < devices.length - 1; i++) {
    if (devices[i] === 0) continue

    for (let j = i + 1; j < devices.length; j++) {
      if (devices[j] === 0) continue

      // Calculate the number of beams between floor i and floor j by multiplying the number of devices on each floor
      beamsCount += devices[i] * devices[j]
      break
    }
  }

  return beamsCount
}

// -------------------------
// TESTS

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
This is because the 2nd row contains security devices, which breaks the second condition.
*/

console.log(numberOfBeams(['000', '111', '000'])) // 0
// Explanation: There does not exist two devices located on two different rows.
