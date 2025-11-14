// * Number Of Rectangles That Can Form The Largest Square

/*
You are given an array rectangles where rectangles[i] = [li, wi] represents the ith rectangle of length li and width wi.

You can cut the ith rectangle to form a square with a side length of k if both k <= li and k <= wi. For example, if you have a rectangle [4,6], you can cut it to get a square with a side length of at most 4.

Let maxLen be the side length of the largest square you can obtain from any of the given rectangles.

Return the number of rectangles that can make a square with a side length of maxLen.
*/

/**
 * @param {number[][]} rectangles
 * @returns {number}
 */

// O(nlogn) time | O(n) space
function countGoodRectangles(rectangles) {
  const lengths = []

  for (let i = 0; i < rectangles.length; i++) {
    lengths.push(Math.min(rectangles[i][0], rectangles[i][1]))
  }

  lengths.sort((a, b) => b - a)

  let count = 1

  const firstLength = lengths[0]
  for (let i = 1; i < lengths.length; i++) {
    if (lengths[i] !== firstLength) return count

    count++
  }

  return count
}

console.log(
  countGoodRectangles([
    [5, 8],
    [3, 9],
    [5, 12],
    [16, 5],
  ])
) // 3
