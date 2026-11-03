//type assertion


// as syntex

type Status = "pending" | "accepct" | "reject";

const someStatus:  string = "pending"

const showStatus = (status: Status) => {
    
    console.log("status is " + status)
}
showStatus(someStatus as Status)

// non-null assertions


interface Config {
    port?: number
}

const config :Config = {
    port: 4000,
}
const currentPort: number = config.port!;

//constant assertions

const configuration = {
    port: 8000,
    prefix: "/api"
} as const;