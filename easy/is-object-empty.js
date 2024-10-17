// * Is Object Empty

/*
Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.
*/

function isEmpty(obj) {
  return Object.keys(obj).length === 0
}

// -------------------------
// SOLUTION 2

// TIP: This solution seems more efficient than the previous one

function isEmpty2(obj) {
  for (let key in obj) return false
  return true
}

// -------------------------
// TESTS

// 1
console.log(isEmpty({ x: 5, y: 42 })) // false
console.log(isEmpty({})) // true
console.log(isEmpty([null, false, 0])) // false
console.log(isEmpty([])) // true

// 2
console.log('Solution 2:')
console.log(isEmpty2({ x: 5, y: 42 })) // false
console.log(isEmpty2({})) // true
console.log(isEmpty2([null, false, 0])) // false
console.log(isEmpty2([])) // true
