/*Create a function formatCoordinate that accepts a readonly tuple representing a coordinate and location name in the exact order [latitude, longitude, locationName] ([number, number, string]), and returns a formatted location string.

Requirements:
Apply the readonly modifier to the tuple parameter so it cannot be mutated inside the function.
Return the exact string format: "Location: [locationName] ([latitude], [longitude])" without rounding the numbers.
// Sample Input:
formatCoordinate([23.81, 90.41, "Dhaka"]);
formatCoordinate([22.35, 91.78, "Chittagong"]);

// Sample Output:
"Location: Dhaka (23.81, 90.41)"
"Location: Chittagong (22.35, 91.78)"
*/

const formatCoordinate = ( location: readonly [latitude: number, longitude: number, locationName: string]): string => {
    const [latitude, longitude, locationName] = location
  return `Location: ${locationName} (${latitude}, ${longitude})`;
};

//let location: readonly [number, number, string]

console.log(formatCoordinate([22.35, 91.78, "Chittagong"]))