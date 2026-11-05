//utility types

//partial

interface User{
    id: string;
    name: string;
    email: string;
}

const updateProfile = (id: string, data: Partial<User> ) => {

}

updateProfile("erw", {name:"Tusher", })

//required

interface Config {
    apiKey?: string;
    timeout?: number;
}

const initialize = (config: Required<Config>) => {

}

initialize({apiKey: "djdsfjhd", timeout: 45})

//pick

interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
}

type ProductPreview = Pick<Product, "name" | "description">

const preview: ProductPreview = {
    name: "dsf",
    description: "sdf"
}

//omit

interface Employee {
    id: number;
    name: string;
    salary: number;
    nid: string;
}

type PublicEmployee = Omit<Employee, "salary" | "nid">


const directoryEntry: PublicEmployee = {
    id: 23,
    name: "df"
}

type Env = "dev" | "stage" | "prod"

const apiUrl: Record<Env, string> = {
    dev: "sdf",
    stage: 'dfs',
    prod: 'dsf',
}