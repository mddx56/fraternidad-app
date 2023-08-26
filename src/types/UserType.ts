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

export type UserProfile = {
    user_id: string;
    username: string;
    name: string;
    role: string;
    exp: number;
    iat: number;
    jti: string;
    active: boolean;
}

/*
{
    "token_type": "access",
    "exp": 1693228517,
    "iat": 1692623717,
    "jti": "9f579bd557724d22bf19e4578da86247",
    "user_id": "0e23ee1d-8b20-43b1-b9bd-143e4573f1ed",
    "username": "walter",
    "name": "walter mamani janco",
    "role": "Fraterno",
    "active": true
}
*/