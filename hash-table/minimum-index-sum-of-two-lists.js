/**
 * * Given two arrays of strings list1 and list2, find the common strings with the least index sum
 *
 * @param {string[]} list1
 * @param {string[]} list2
 * @returns {string[]}
 */

/*
A common string is a string that appeared in both list1 and list2.

A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

Return all the common strings with the least index sum. Return the answer in any order.
*/

// O(n^2) time | O(n) space - slower but easier to understand
function findRestaurant(list1, list2) {
  let min = Infinity
  let array = []

  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j] && i + j <= min) {
        // remove previous element with bigger index sum
        if (i + j < min) array.pop()

        // add current element
        array.push(list1[i])
        min = i + j // update min
      }
    }
  }

  return array
}

// -------------------------------
// SOLUTION 2

// O(n) time | O(n) space - faster and still readable although a bit more complex
function findRestaurant2(list1, list2) {
  let map = {}

  // fill the map with the elements of list1
  for (let i = 0; i < list1.length; i++) {
    map[list1[i]] = i
  }

  let array = []
  let minSum = Infinity

  // loop through list2 and check if the current element is in the map
  for (let i = 0; i < list2.length; i++) {
    let restaurant = list2[i]

    if (map[restaurant] !== undefined) {
      let currentSum = map[restaurant] + i

      // if the current sum is smaller than the min sum, update the array and the min sum
      if (currentSum < minSum) {
        array = [restaurant]
        minSum = currentSum

        // if the current sum is the same as the min sum, add the restaurant to the array
      } else if (currentSum === minSum) {
        array.push(restaurant)
      }
    }
  }

  return array
}

// -------------------------------
// TESTS

// Solution 1
console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    [
      'Piatti',
      'The Grill at Torrey Pines',
      'Hungry Hunter Steakhouse',
      'Shogun',
    ]
  )
) // ['Shogun']

// Solution 2
console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    [
      'Piatti',
      'The Grill at Torrey Pines',
      'Hungry Hunter Steakhouse',
      'Shogun',
    ]
  )
) // ['Shogun']
