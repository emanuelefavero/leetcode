// * Flood Fill

/*
An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.
*/

/**
 * @param {number[][]} image - 2D array of integers
 * @param {number} sr - starting row
 * @param {number} sc - starting column
 * @param {number} color - color to fill
 * @returns {number[][]}
 */

// O(n) time | O(n) space
function floodFill(image, sr, sc, color) {
  let row = image.length
  let column = image[0].length
  let oldColor = image[sr][sc]

  if (oldColor === color) return image // if the old color is the same as the new color, then we don't need to do anything

  function dfs(r, c) {
    if (image[r][c] === oldColor) {
      image[r][c] = color

      if (r >= 1) dfs(r - 1, c) // go up
      if (r + 1 < row) dfs(r + 1, c) // go down
      if (c >= 1) dfs(r, c - 1) // go left
      if (c + 1 < column) dfs(r, c + 1) // go right
    }
  }

  dfs(sr, sc) // call dfs on the starting row and column

  return image
}

// -------------------------
// TESTS

let image = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
]
let sr = 1 // starting row
let sc = 1 // starting column
let color = 2

console.log(floodFill(image, sr, sc, color))
// [[2,2,2],[2,2,0],[2,0,1]]
// Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
