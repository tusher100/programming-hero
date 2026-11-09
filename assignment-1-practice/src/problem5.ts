// Problem 5:
// Define an interface Course with the following properties:

// title (string)
// students (number)
// isPublished (boolean)
// Then, create a function getPopularCourses that accepts an array of Course objects and a minStudents number. The function should return a new array containing only the courses where isPublished is true and students is greater than or equal to minStudents.

// Requirements:
// Define the Course interface with the exact property names and types.
// Do not mutate the original array.
// // Sample Input:
// const courses = [
//   { title: "TypeScript Mastery", students: 120, isPublished: true },
//   { title: "Draft Course", students: 200, isPublished: false },
//   { title: "Basic HTML", students: 45, isPublished: true },
//   { title: "Next.js Pro", students: 85, isPublished: true }
// ];

// getPopularCourses(courses, 80);

// // Sample Output:
// [
//   { title: "TypeScript Mastery", students: 120, isPublished: true },
//   { title: "Next.js Pro", students: 85, isPublished: true }
// ]

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

const getPopularCourses = (course: Course[], minStudents: number): Course[] => {
  const filterCourses: Course[] = [];

  for (const i of course) {
    if (i.isPublished == true && i.students >= minStudents) {
      filterCourses.push(i);
    }
  }

  return filterCourses;
};

const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

console.log(getPopularCourses(courses, 80));
