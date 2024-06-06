function countGoodRectangles(rectangles) {
  let lengths = []

  for (let i = 0; i < rectangles.length; i++) {
    lengths.push(Math.min(rectangles[i][0], rectangles[i][1]))
  }

  lengths.sort((a, b) => b - a)

  let count = 1

  let firstLength = lengths[0]
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
