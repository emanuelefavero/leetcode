// * Partitioning Into Minimum Number Of Deci-Binary Numbers

// A decimal number is called deci-binary if each of its digits is either 0 or 1 without any leading zeros. For example, 101 and 1100 are deci-binary, while 112 and 3001 are not.

// Given a string n that represents a positive decimal integer, return the minimum number of positive deci-binary numbers needed so that they sum up to n.

// TIP: Since we only have deci-binary (1s and 0s) to sum up to given number n, we need atleast n[i] deci-binary numbers to sum up to n[i], where n[i] is the ith digit of given number. So, we only need to find the maximum digit in the given number n. The maximum digit will be the answer

const minPartitions = (n) => Math.max(...n)

// -------------------------
// TESTS

console.log(minPartitions('32')) // 3
// Explanation: 10 + 11 + 11 = 32
