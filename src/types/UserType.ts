export type UserState = {
    loading: boolean;
    users: Array<UserAdminType>;
    error: string | undefined;
}

export interface UserAdminType {
    id: string;
    last_login?: string;
    username: string;
    password: string;
    ci: boolean;
    full_name: string;
    email: string;
    phone: string;
    financial_condition: string;
    role: string;
    copy_ci: boolean;
    avatar?: boolean;
    suspend?: boolean;
    is_staff?: boolean;
    is_active?: boolean;
    is_admin?: boolean;
    is_superuser?: boolean;
    verified?: boolean;
}

export type UserAdminInput = Omit<UserAdminType, "id" | "last_login" | "avatar" | "suspend" | "is_active" | "is_staff" | "is_admin" | "is_superuser" | "verified">;
//export type UserAdminInput = Omit<UserAdminType, "id" | "last_login" | "ci" | "avatar" | "suspend" | "is_staff" | "is_active" | "is_admin" | "is_superuser" | "verified">;

export type UserType = {
    id: string;
    ci: boolean;
    username: string;
    password: string;
    email: string;
    full_name: string;
    phone: string;
    avatar: boolean;
    suspend: boolean;
    role: string;
}

export type UserInput = Omit<UserType, "id" | "role" | "avatar" | "phone" | "ci" | "suspend">;

export type LoginType = Omit<UserType, "id" | "email" | "full_name" | "ci" | "suspend" | "role" | "phone" | "avatar">

export type UserResponseType = {
    refresh: string;
    access: string;
}

export type UserPasswordType = {
    user_id?: string;
    old_password: string;
    password: string;
    password2: string;
}

export type UserProfile = {
    user_id: string;
    username: string;
    name: string;
    ci: boolean;
    phone: string;
    email: string;
    role: string;
    avatar: boolean;
    exp: number;
    iat: number;
    jti: string;
    active: boolean;
    suspend: boolean;
}

export type AuthStatus = 'authorized' | 'unauthorized' | 'pending';

export type AuthCheckType = {
    token: string;
    claims: Claims;
    user_id: string;
    username: string;
    full_name: string;
    email: string;
    role: string;
    phone: string;
    suspend: boolean;
}

export type Claims = {
    token_type: string;
    exp: number;
    iat: number;
    jti: string;
}
