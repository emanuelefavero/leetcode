// Given two arrays of strings list1 and list2, find the common strings with the least index sum.

/*
A common string is a string that appeared in both list1 and list2.

A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

Return all the common strings with the least index sum. Return the answer in any order.
*/

function findRestaurant(list1, list2) {
  let min = Infinity
  let array = []

  for (let i = 0; i < list1.length; i++) {
    for (let j = 0; j < list2.length; j++) {
      if (list1[i] === list2[j] && i + j <= min) {
        // remove previous element with bigger index sum
        if (i + j < min) array.pop()

        // add current element
        array.push(list1[i])
        min = i + j // update min
      }
    }
  }

  return array
}

console.log(
  findRestaurant(
    ['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    [
      'Piatti',
      'The Grill at Torrey Pines',
      'Hungry Hunter Steakhouse',
      'Shogun',
    ]
  )
) // ['Shogun']
