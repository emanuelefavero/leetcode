function subtractProductAndSum(n) {
  let array = n.toString().split('') // convert n to array of chars

  // get product
  let product = array.reduce(
    (accumulator, current) => accumulator * parseInt(current),
    1
  )

  // get sum
  let sum = array.reduce(
    (accumulator, current) => accumulator + parseInt(current),
    0
  )

  return product - sum
}

// -------------------------
// TESTS

console.log(subtractProductAndSum(234)) // 15
/*
Explanation:
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
*/
