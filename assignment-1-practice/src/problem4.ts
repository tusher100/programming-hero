/*Create a generic function concatenateArrays that accepts multiple arrays of the same type T using rest parameters (...arrays: T[][]) and returns a single combined array containing all elements in the order they were passed.

Requirements:
Must use a generic type parameter <T> and rest parameters.
Do not use any.
// Sample Input:
concatenateArrays(["a", "b"], ["c", "d"]);
concatenateArrays([1, 2], [3, 4], [5]);

// Sample Output:
["a", "b", "c", "d"]
[1, 2, 3, 4, 5]
*/

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

const stringArr = concatenateArrays<string>(["a", "b"], ["c", "d"]);
const numberArr = concatenateArrays<number>([1, 2], [3, 4], [5]);

console.log(stringArr);
console.log(numberArr);