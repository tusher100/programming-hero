//* type alias vs interface

type id = number;

//interface roll = number

type Role = number | "member";

const role : Role = "member"

//! interface string | "member"

interface User {
    name: string;
    id: id;
    role: Role;
}

const user: User = {
    name: "tusher",
    id: 123,
    role: "member",
}

//Interface

interface Animal {
    species: string;
}

interface Cat  extends Animal{
    breed: string;
}

const cat : Cat = {
breed: "persian",
species: "felix"
}


type Vehical = {
    brand: string
}

type Car = Vehical & {
    model: string
}

const car : Car = {
    model: "ACYS",
    brand: "djf",
}


interface Iemp {
    id: number;
}

interface Iemp{
    name: string;
}

const emp: Iemp = {
    id: 133,
    name: "dsfg"
}