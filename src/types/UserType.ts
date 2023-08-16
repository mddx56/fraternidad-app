export type UserState = {
    loading: boolean;
    eventos: Array<UserType>;
    error: string | undefined;
}

export type UserType = {
    id: number;
    username: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;
}

export type LoginType = Omit<UserType, "id" | "email" | "first_name" | "last_name">

export type UserResponseType = {
    refresh: string;
    access: string;
}

export type UserInput = Omit<UserType, "id">;