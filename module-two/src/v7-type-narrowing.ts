// typeof

let x = 123;
console.log(typeof x);

//type gaurd

const print = (value: string | number) => {
  if (typeof value == "string") {
    return value.toUpperCase();
  } else if (typeof value == "number") {
    return value;
  }
  return value;
};
// truthiness

type User = {
  name: string;
  address?: {
    street: string;
  };
} | null;

const currentUser: User = {
  name: "tusher",
  address: {
    street: "123 green road",
  },
};

const showAddress = (user: User) => {
  if (user && user.address) {
    console.log(user.address.street);
    return;
  }
};
showAddress(currentUser);

// some caveat of type guard
const printAll = (x: string | string[] | null) => {
  if (x && typeof x == "object") {
    for (let str of x) {
      console.log(str);
    }
  } else if (typeof x == "string") {
    console.log(x);
  } else {
    console.log("");
  }
};
printAll(null);

//equality
const compare = (x: number | string, y: number | boolean) => {
  if (x == y) {
    console.log(x, y);
  }
};

const printEverythings = (x: string | string[] | null) => {
  if (x != null) {
    if (typeof x == "object") {
      for (let str of x) {
        console.log(str);
        return;
      }
    }
    console.log(x);
    return;
  }
  console.log("x");
};

printEverythings("jjj");
//in operator

type Bird = { fly: () => void };
type Fish = { swim: () => void };

const move = (animal: Bird | Fish) => {
  if ("fly" in animal) {
    console.log(animal.fly());
    return;
  }
  animal.swim();
};



//interface of

const date = new Date();
const err = new Error("something went wrong");

console.log(date instanceof Date);
console.log(err instanceof Error);

const showDate = (x: Date | string) => {
  if (x instanceof Date) {
    console.log(x.toISOString());
    return;
  } 
  const date = new Date(x);
  console.log(date.toISOString());
};

showDate(new Date("12-12-1202"))

//discriminated union

interface Circle{
    kind: "circle";
    redius: number;
}

interface Squre{
    kind: "squre";
    sideLength: number;
}

const getArea = (shape: Circle | Squre) =>{
    if(shape.kind == "circle"){
        console.log(shape.redius)
    } else {
        console.log(shape.sideLength)
    }

}

getArea({kind: "circle", redius: 34})