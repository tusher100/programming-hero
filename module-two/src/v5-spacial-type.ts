//top types

let x : any = "tusher"
x = 234

let something :  unknown = "ddd";


//core types

const num : number = 234
something = num;

//nullish type

interface User{
    name: string

}
type CurrentUser = null | User;

let currentUser : CurrentUser = null;


currentUser = {
    name: "ttt",
}

console.log(currentUser)

//unit type

const greet = () => {
    console.log("hello")
}

something = greet()

//subtype of unit

const anotherGreet = () : undefined => {
 console.log("hmm")
 undefined
}

const greetings = anotherGreet();
console.log(greetings)

//bottom types

const getError = (msg : string): never =>{
    throw new Error(msg)
}