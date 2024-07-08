// * Array Wrapper

/*
Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].
*/

class ArrayWrapper {
  constructor(nums) {
    this.nums = nums
  }

  valueOf() {
    return this.nums.reduce((a, b) => a + b, 0)
  }

  toString() {
    return JSON.stringify(this.nums)
  }
}

// -----------------------
// TESTS

const obj1 = new ArrayWrapper([1, 2])
const obj2 = new ArrayWrapper([3, 4])
console.log(obj1)
console.log(obj1 + obj2)
console.log(String(obj1))
console.log(String(obj2))
