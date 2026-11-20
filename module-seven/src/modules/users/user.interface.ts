export interface IUser{
    name: string,
    email: string,
    password: string,
    age?: number | null,
    role?: string
}

export interface Ipartial{
    name?: string | null,
    password?: string | null,
    age?: string | null,
    is_active?: string | null,
}