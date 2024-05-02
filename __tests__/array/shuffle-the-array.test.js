import { shuffle } from '../../array/shuffle-the-array'

test('shuffle([2, 5, 1, 3, 4, 7], 3) to equal [2, 3, 5, 4, 1, 7]', () => {
  expect(shuffle([2, 5, 1, 3, 4, 7], 3)).toStrictEqual([2, 3, 5, 4, 1, 7])
})
