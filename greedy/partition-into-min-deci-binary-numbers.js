// * Partitioning Into Minimum Number Of Deci-Binary Numbers

// A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

// Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.

// TIP: Since we only have deci-binary (1s and 0s) to sum up to given number n, we need atleast n[i] deci-binary numbers to sum up to n[i], where n[i] is the ith digit of given number. So, we only need to find the maximum digit in the given number n. The maximum digit will be the answer

const minPartitions = (n) => Math.max(...n)

// -------------------------
// SOLUTION 2

// TIP: We can also loop through digits between 9 and 0 and return the first digit that is present in the number n. This will be the maximum digit

function minPartitions2(n) {
  for (let i = 9; i >= 0; i--) {
    if (n.includes(i)) return i
  }
}

// -------------------------
// SOLUTION 3

function minPartitions3(n) {
  let max = 0

  for (let i = 0; i < n.length; i++) {
    if (n[i] > max) max = n[i]
  }

  return parseInt(max)
}

// -------------------------
// TESTS

// 1
console.log(minPartitions('32')) // 3
// Explanation: 10 + 11 + 11 = 32

// 2
console.log(minPartitions2('32')) // 3

// 3
console.log(minPartitions3('32')) // 3
