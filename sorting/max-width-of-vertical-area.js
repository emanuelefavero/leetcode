// * Widest Vertical Area Between Two Points Containing No Points

/*
Given n points on a 2D plane where points[i] = [xi, yi], Return the widest vertical area between two points such that no points are inside the area.

A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.

Note that points on the edge of a vertical area are not considered included in the area.
*/

function maxWidthOfVerticalArea(points) {
  points = points.sort((a, b) => a[0] - b[0]) // sort the points by x value

  let maxWidth = 0

  // find the maximum width between two points
  for (let i = 0; i < points.length - 1; i++) {
    // get width between previous x value - current x value
    let width = points[i + 1][0] - points[i][0]

    // update maxWidth if width is greater
    maxWidth = Math.max(maxWidth, width)
  }

  return maxWidth
}

// -----------------------
// TESTS

console.log(
  maxWidthOfVerticalArea([
    [8, 7],
    [9, 9],
    [7, 4],
    [9, 7],
  ])
) // 1
// Explanation: Both the red and the blue area are optimal.

console.log(
  maxWidthOfVerticalArea([
    [3, 1],
    [9, 0],
    [1, 0],
    [1, 4],
    [5, 3],
    [8, 8],
  ])
) // 3
