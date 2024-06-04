// * Count Elements With Maximum Frequency

/*
You are given an array nums consisting of positive integers.

Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

The frequency of an element is the number of occurrences of that element in the array.
*/

function maxFrequencyElements(nums) {
  let sum = 0
  let frequencies = []

  // Count the frequency of each element
  for (let i = 0; i < nums.length; i++) {
    let count = 1
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        count++
      }
    }

    frequencies.push(count)
  }

  // Sort the frequencies in descending order
  frequencies = frequencies.sort((a, b) => b - a)

  // Get the maximum frequency and add it to the sum
  let maxFrequency = frequencies[0]
  sum += maxFrequency

  // Add the maximum frequency to the sum if there are multiple elements with the same frequency
  for (let i = 1; i < frequencies.length; i++) {
    if (frequencies[i] === maxFrequency) {
      sum += maxFrequency
    }
  }

  return sum
}

// -----------------------------
// TESTS

console.log(maxFrequencyElements([1, 2, 2, 3, 1, 4])) // 4
