/*Create an async function validateAgeAsync that accepts a number age and returns a Promise<string>:

If age is 18 or above, resolve after 1 second (1000 ms) with the string "Access Granted".
If age is less than 18, reject immediately with new Error("Access Denied: Must be 18 or older").
Requirements:
Explicitly type the return value as Promise<string>.
Use new Promise with setTimeout (or async/await) and reject using an Error instance (new Error(...)).
// Sample Input 1:
await validateAgeAsync(20);

// Sample Output 1 (resolves after 1 second):
"Access Granted"

// Sample Input 2:
await validateAgeAsync(15);

// Sample Output 2 (rejects with Error):
Error: Access Denied: Must be 18 or older*/

const validateAgeAsync = async (age: number): Promise<string> =>{

    const data =  "Access Granted";

    if(age < 18){
        throw new Error("Access Denied: Must be 18 or older")
    } 
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return data

}

(async () => {
  try {
    const userData = await validateAgeAsync(20);
    console.log(userData); 
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
})();