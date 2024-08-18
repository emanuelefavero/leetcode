// * Filter Elements from Array

/*
Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.
*/

function filter(arr, fn) {
  let result = []

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) result.push(arr[i])
  }

  return result
}

// -------------------------
// SOLUTION 2

// TIP: This solution uses the filter method (even though it's not allowed in the problem statement)

function filter2(arr, fn) {
  return arr.filter((el, i) => fn(el, i))
}

// -------------------------
// TESTS

console.log(filter([0, 10, 20, 30], (n) => n > 10)) // [20, 30]
// Explanation: The function filters out values that are not greater than 10

console.log(filter([1, 2, 3], (n, i) => i === 0)) // [1]
// fn can also accept the index of each element. In this case, the function removes elements not at index 0

console.log(filter2([0, 10, 20, 30], (n) => n > 10)) // [20, 30]
console.log(filter2([1, 2, 3], (n, i) => i === 0)) // [1]
