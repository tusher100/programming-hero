/*Problem 2:
Create a function processInput that accepts a value which may be a string, number, or boolean, and returns a formatted result based on the value's type:

If the input is a string → trim any leading/trailing spaces and return it in lowercase.
If the input is a number → return the number multiplied by 10.
If the input is a boolean → return "Active" if true, or "Inactive" if false.
Requirements:
Write the correct union type for the function parameter and the return type.
Use type narrowing (typeof) to handle each case safely.
// Sample Input:
processInput("  TypeScript  ");
processInput(7);
processInput(true);
processInput(false);

// Sample Output:
"typescript"
70
"Active"
"Inactive"*/

type ValueType = number | string | boolean;

const processInput = (value: ValueType): number | string => {
  if (typeof value == "string") {
    return value.trim().toLowerCase();
  } else if (typeof value == "number") {
    return value * 10;
  } else {
    if (value == true) {
      return "Active";
    } else {
      return "Inactive";
    }
  }
};

console.log(processInput("  TypeScript  "));
console.log(processInput(7));
console.log(processInput(true));
console.log(processInput(false));
