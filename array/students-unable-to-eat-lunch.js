// * Number of Students Unable to Eat Lunch

/*
The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:

If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
Otherwise, they will leave it and go to the queue's end.
This continues until none of the queue students want to take the top sandwich and are thus unable to eat.

You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i​​​​​​th sandwich in the stack (i = 0 is the top of the stack) and students[j] is the preference of the j​​​​​​th student in the initial queue (j = 0 is the front of the queue). Return the number of students that are unable to eat.
*/

/**
 *
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @returns {number}
 */

// O(n^2) time | O(1) space (where n = students.length)
function countStudents(students, sandwiches) {
  let count = 0

  while (students.length) {
    if (students[0] === sandwiches[0]) {
      students.shift()
      sandwiches.shift()
      count = 0
    } else {
      students.push(students.shift())
      count++

      if (count === students.length) return students.length
    }
  }

  return students.length
}

// -------------------------
// TESTS

console.log(countStudents([1, 1, 0, 0], [0, 1, 0, 1])) // 0
/*
Explanation:
- Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
- Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
- Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
- Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
- Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
- Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
Hence all students are able to eat.
*/

console.log(countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])) // 3
