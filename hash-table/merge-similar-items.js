// * Merge Similar Items

/*
You are given two 2D integer arrays, items1 and items2, representing two sets of items. Each array items has the following properties:

- items[i] = [valuei, weighti] where valuei represents the value and weighti represents the weight of the ith item.
- The value of each item in items is unique.

Return a 2D integer array ret where ret[i] = [valuei, weighti], with weighti being the sum of weights of all items with value valuei.

Note: ret should be returned in ascending order by value.
*/

/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @returns {number[][]}
 */

// O(n) time | O(n) space
function mergeSimilarItems(items1, items2) {
  const map = new Map()

  // Loop through both arrays and add the values to the map
  for (const item of items1) {
    map.set(item[0], (map.get(item[0]) || 0) + item[1])
  }
  for (const item of items2) {
    map.set(item[0], (map.get(item[0]) || 0) + item[1])
  }

  // Convert the map to an array
  const result = []
  for (const [key, value] of map) {
    result.push([key, value])
  }

  // Sort the array by the value
  return result.sort((a, b) => a[0] - b[0])
}

// -----------------------------
// TESTS

console.log(
  mergeSimilarItems(
    [
      [1, 1],
      [4, 5],
      [3, 8],
    ],
    [
      [3, 1],
      [1, 5],
    ]
  )
) // [[1,6],[3,9],[4,5]]
/*
Explanation:
The item with value = 1 occurs in items1 with weight = 1 and in items2 with weight = 5, total weight = 1 + 5 = 6.
The item with value = 3 occurs in items1 with weight = 8 and in items2 with weight = 1, total weight = 8 + 1 = 9.
The item with value = 4 occurs in items1 with weight = 5, total weight = 5.  
Therefore, we return [[1,6],[3,9],[4,5]].
*/
