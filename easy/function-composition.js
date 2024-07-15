// * Function Composition

/*
Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).

The function composition of an empty list of functions is the identity function f(x) = x.

You may assume each function in the array accepts one integer as input and returns one integer as output.
*/

/**
 * @param {Function[]} functions
 * @return {Function}
 */

// O(n) time | O(1) space
function compose(functions) {
  return (x) => {
    let result = x

    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result)
    }

    return result
  }
}

// ----------------------
// TESTS

const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x])
console.log(fn(4)) // 65
/*
Explanation:
Evaluating from right to left ...
Starting with x = 4.
2 * (4) = 8
(8) * (8) = 64
(64) + 1 = 65
*/
