// * Decompress Run-Length Encoded List

/*
We are given a list nums of integers representing a list compressed with run-length encoding.

Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  For each such pair, there are freq elements with value val concatenated in a sublist. Concatenate all the sublists from left to right to generate the decompressed list.

Return the decompressed list.
*/

// TIP: A run-length encoding is a method of compressing data by replacing repeated sequences with a single value and the number of times it repeats.
// e.g. 'aaabb' => 'a3b2', [1, 2] => [2], [3, 4] => [4, 4, 4]
// So we need to take the second number of the pair and repeat it the first number of times

function decompressRLElist(nums) {
  let i = 0
  let result = []

  while (i < nums.length) {
    let freq = nums[i]
    let value = nums[i + 1]

    for (let i = 0; i < freq; i++) {
      result.push(value)
    }

    i += 2
  }

  return result
}

// -------------------------
// TESTS

console.log(decompressRLElist([1, 2, 3, 4])) // [2, 4, 4, 4]
/*
Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
At the end the concatenation [2] + [4,4,4] is [2,4,4,4].
*/

console.log(decompressRLElist([1, 1, 2, 3])) // [1, 3, 3]
