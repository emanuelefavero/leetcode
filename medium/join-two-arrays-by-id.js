// * Join Two Arrays by ID

// TIP: This is a JavaScript specific problem

/*
Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 

joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

If two objects share an id, their properties should be merged into a single object:

- If a key only exists in one object, that single key-value pair should be included in the object.
- If a key is included in both objects, the value in the object from arr2 should override the value from arr1.
*/

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array}
 */

// O(n) time, O(n) space
function join(arr1, arr2) {
  let map = {}

  addTo(map, arr1) // add all items from arr1 to map
  addTo(map, arr2) // add all items from arr2 to map

  return Object.values(map).sort((a, b) => a.id - b.id)
}

// helper function to add items to map
function addTo(map, arr) {
  for (let item of arr) {
    if (!map[item.id]) {
      map[item.id] = item
      continue
    }

    Object.keys(item).forEach((key) => {
      map[item.id][key] = item[key]
    })
  }
}

// --------------------------
// TESTS

const arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
]

const arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 0, y: 0 },
]

console.log(join(arr1, arr2))
/*
[
  {"id": 1, "x": 2, "y": 3},
  {"id": 2, "x": 10, "y": 20},
  {"id": 3, "x": 0, "y": 0}
]

Explanation: The two objects with id=1 and id=3 are included in the result array without modifiction. The two objects with id=2 are merged together. The keys from arr2 override the values in arr1.
*/
