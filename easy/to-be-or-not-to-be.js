// * To Be Or Not To Be

// TIP: This is a JavaScript specific problem

/*
Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
*/

/**
 * @param {string} val
 * @returns {Object}
 */

// O(1) time | O(1) space
function expect(val) {
  return {
    toBe: (val2) => {
      if (val !== val2) throw new Error('Not Equal')
      else return true
    },
    notToBe: (val2) => {
      if (val === val2) throw new Error('Equal')
      else return true
    },
  }
}

// -------------------------
// TESTS

console.log(expect(1).toBe(1)) // true
console.log(expect(1).notToBe(2)) // true
