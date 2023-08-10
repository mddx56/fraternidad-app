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

export type UserInput = Omit<UserType, "id">;