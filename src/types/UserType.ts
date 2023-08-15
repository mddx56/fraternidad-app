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
}

export type UserLoginType = Omit<UserType, "id" | "email">

export type UserResponseType = {
    refresh: string;
    access: string;
}

export type UserInput = Omit<UserType, "id">;