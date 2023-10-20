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
  let map = new Map()
  let array = []
  let min = Infinity

  // fill the map with the elements of list1
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], i)
  }

  // check if the elements of list2 are in the map
  for (let i = 0; i < list2.length; i++) {
    // if the element is in the map, add the index sum to the map
    if (map.has(list2[i])) {
      map.set(list2[i], map.get(list2[i]) + i)

      // if the index sum is smaller than min, update min
      if (map.get(list2[i]) < min) min = map.get(list2[i])
    }
  }

  // get the elements with the smallest index sum
  for (let [key, value] of map) {
    if (value === min) array.push(key)
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
