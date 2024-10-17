// * Is Object Empty

/*
Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.
*/

function isEmpty(obj) {
  return !Object.keys(obj).length
}

// -------------------------
// TESTS

console.log(isEmpty({ x: 5, y: 42 })) // false
console.log(isEmpty({})) // true

console.log(isEmpty([null, false, 0])) // false
console.log(isEmpty([])) // true
