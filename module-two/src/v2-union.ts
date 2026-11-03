//* literal types

type Status = "pending"
const status : Status = "pending"

//* Basic Union

type Identity = string | number | boolean

const id : Identity = true
console.log(id)

//* literal union

type Role = "user" | "admin"

const userRole : Role = "admin"


//object union

type Admin = {id: number, role: "admin", prevalge: string[]}
type Mamber = {id: number, role: "member", plans: string[]}

type User = Admin | Mamber

const user : User= {

    id: 22,
    role: "member",
    plans: [" abc"]

}

console.log(user.plans[0])