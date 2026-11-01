const addTwo = (a: number, b: number) => {
    return a + b
}

console.log(addTwo(40, 20))

// Array and tuple and readonly modifier

const arr0: Array<string> = ["ssf", "dsf"]
const arr: string[] = ["Apple", "dd", "djd"]
const numArr: number[] = [1, 4, 6]
arr.push("56")
arr.pop()

console.log(arr)

//tuple
const dhakaLatLon: readonly [number, number] = [12.4545, 47.34844]

// optional, default and rest (...args)

const concatName = (firstName: string, lastName?: string) => {
    if (!lastName) {
        return firstName;
    }

    return firstName + " " + lastName;
}

console.log(concatName("mir"))

const greetings = ( fullName: string, greeting = "hello") => {
    console.log(greeting + " " + fullName);

}

greetings("mir")

//rest parameters

const sum = (...numArr: number[]) => {
    return numArr.reduce((total, sum) => total + sum, 0)
}

console.log(sum(1,2,3))

const logUserAction = (...args : [name: string, age: number, isActive?: boolean]) =>{
    const [name, age, isActice]= args;
    console.log(name + " is " + age)
}

logUserAction("mir", 192)


//object type, type alias and interface

type address = {
    street: string;
    zip: number;
}

type User = {
name: string;
    age: number;
    isAction: boolean;
    action: () => void;
    badge: string[];
    address: address;
}

const user: User = {
    name: "Mir",
    age: 20,
    isAction: true,
    action: () => console.log("hi"),
    badge: ["red", "green"],
    address: {
        street: "cyberjaya",
        zip: 63000
    }

}

interface TUser  {
    name: string;
    age: number;
    isAction: boolean;
    action: () => void;
    badge: string[]
}

const user2: TUser = {
    name: "jamil",
    age: 24,
    isAction: true,
    action: () => console.log("hi"),
    badge: ["red", "green"]

}

console.log(user.address.street)