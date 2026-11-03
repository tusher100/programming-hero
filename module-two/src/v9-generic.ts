const wrapInArray = <T>(value: T) => {
  return [value];
};

const stringArr = wrapInArray<string>("abc");
const numberArr = wrapInArray<number>(123);

console.log(stringArr);
console.log(numberArr);
stringArr.map((item) => item.toUpperCase());

interface User {
  name: string;
  role: string;
}

interface Blog {
  title: string;
  description: string;
  date: string;
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
  statusCode: number;
}

type UseResponse = ApiResponse<User>
type blogResponse = ApiResponse<Blog>

const useRes: UseResponse = {
    statusCode: 200,
    success: true,
    data:{
        name:"dhd",
        role: "Dg",
    }

}