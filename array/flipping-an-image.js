// * Flipping an Image

/*
Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

To flip an image horizontally means that each row of the image is reversed.

For example, flipping [1,1,0] horizontally results in [0,1,1].
To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0.

For example, inverting [0,1,1] results in [1,0,0].
*/

// TIP: More readable solution (2 loops instead of one, still beats 95%)

/**
 * @param {number[][]} image
 * @returns {number[][]}
 */

// O(n^2) time, O(1) space
function flipAndInvertImage(image) {
  // Flip horizontally
  for (let i = 0; i < image.length; i++) {
    let left = 0
    let right = image[i].length - 1

    while (left < right) {
      const temp = image[i][left]
      image[i][left] = image[i][right]
      image[i][right] = temp

      left++
      right--
    }
  }

  // Invert
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image.length; j++) {
      if (image[i][j] === 0) image[i][j] = 1
      else image[i][j] = 0
    }
  }

  return image
}

// -------------------------
// TESTS

function flipAndInvertImage2(image) {
  // Flip and invert
  for (const row of image) {
    let left = 0
    let right = row.length - 1

    while (left < right) {
      const temp = row[left]
      row[left] = row[right] === 0 ? 1 : 0
      row[right] = temp === 0 ? 1 : 0

      left++
      right--
    }

    // In case of odd number of elements, invert the middle element
    if (left === right) {
      row[left] = row[left] === 0 ? 1 : 0
    }
  }
  return image
}

// -------------------------
// TESTS

// 1
console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
) // [[1,0,0],[0,1,0],[1,1,1]]

// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

// 2
console.log(
  flipAndInvertImage2([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
) // [[1,0,0],[0,1,0],[1,1,1]]
