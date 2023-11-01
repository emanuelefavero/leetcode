// * Flood Fill

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
