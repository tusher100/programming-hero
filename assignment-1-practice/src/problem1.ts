/* Problem 1:
Create a function multiplyValue that accepts a number value and an optional number multiplier.

If multiplier is provided, return value multiplied by multiplier.
If multiplier is not provided (undefined), return value multiplied by 2 by default.
Requirements:
Handle 0 properly when passed as multiplier (multiplying by 0 must return 0).
// Sample Input:
multiplyValue(10);
multiplyValue(10, 5);
multiplyValue(7, 0);

// Sample Output:
20
50
0*/


const multiplyValue = (value: number, multiplier?: number) : number => {
    if(multiplier == null){
        return (value * 2)
    } else{
        return value * multiplier
    }
}

console.log(multiplyValue(7, 6))