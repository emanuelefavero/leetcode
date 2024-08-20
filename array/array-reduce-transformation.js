// * Array Reduce Transformation

/*
Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

This result is achieved through the following operations: acc = fn(init, nums[0]), acc = fn(acc, nums[1]), acc = fn(acc, nums[2]), ... until every element in the array has been processed. The ultimate value of acc is then returned.

If the length of the array is 0, the function should return init.

Please solve it without using the built-in Array.reduce method.
*/

function reduce(nums, fn, init) {
  let acc = init
  for (let i = 0; i < nums.length; i++) {
    acc = fn(acc, nums[i])
  }

  return acc
}

// -------------------------
// SOLUTION 2

// TIP: Using a forEach loop

function reduce2(nums, fn, init) {
  let acc = init
  nums.forEach((num) => {
    acc = fn(acc, num)
  })
  return acc
}

// -------------------------
// TESTS

// 1
console.log(reduce([1, 2, 3, 4], (acc, curr) => acc + curr, 0)) // 10
/*
Explanation:
initially, the value is init=0.
(0) + nums[0] = 1
(1) + nums[1] = 3
(3) + nums[2] = 6
(6) + nums[3] = 10
The final answer is 10.
*/
console.log(reduce([1, 2, 3, 4], (acc, curr) => acc + curr * curr, 100)) // 130

// 2
console.log(reduce([1, 2, 3, 4], (acc, curr) => acc + curr, 0)) // 10
console.log(reduce([1, 2, 3, 4], (acc, curr) => acc + curr * curr, 100)) // 130
