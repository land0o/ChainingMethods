// Requirements
// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// 1.Sort the numbers in descending order (10, 9, 8, 7, etc).
// sort()- iterates and sorts the array. The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down). Sorts the values as strings in alphabetical and ascending order by default.

// 2.Remove any integers greater than 19.
// filter() - iterates the array and returns a new array with values that meet the condition

// 3.Multiply each remaining number by 1.5 and then subtract 1.
// map() - iterates the array and returns a new array from the values

// 4.Then output (either in the DOM or the console) the sum of all the resulting numbers.

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

const numb = integers
  .sort((a, b) => b - a)
  .filter(interger => interger <= 19)
  .map(interger => interger * 1.5 - 1);
console.log(numb);
