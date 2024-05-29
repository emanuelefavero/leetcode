// *  Sort the People

/*
You are given an array of strings names, and an array heights that consists of distinct positive integers. Both arrays are of length n.

For each index i, names[i] and heights[i] denote the name and height of the ith person.

Return names sorted in descending order by the people's heights.
*/

/**
 * @param {string[]} names
 * @param {number[]} heights
 * @returns {string[]}
 */

// O(n log n) time | O(n) space
function sortPeople(names, heights) {
  let result = []

  for (let i = 0; i < names.length; i++) {
    let person = { name: names[i], height: heights[i] }
    result.push(person)
  }

  result.sort((a, b) => b.height - a.height)

  for (let i = 0; i < result.length; i++) {
    result[i] = result[i].name
  }

  return result
}

// -------------------------
// TESTS

console.log(sortPeople(['Mary', 'John', 'Emma'], [180, 165, 170]))
