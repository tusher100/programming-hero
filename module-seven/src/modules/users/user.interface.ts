export interface IUser{
    name: string,
    email: string,
    password: string,
    age?: number | null,
}

export interface Ipartial{
    name?: string | null,
    password?: string | null,
    age?: string | null,
    is_Active?: string | null,
}