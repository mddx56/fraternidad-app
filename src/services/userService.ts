import { api } from './api';
import { UserType, UserInput, LoginType, UserResponseType, UserPasswordType, UserAdminType } from '../types/UserType';

export const getAllUsers = async () => {
    const response = await api.get<UserAdminType[]>(`auth/users/`);
    return response.data;
};

export const getUser = async (id: string) => {
    const response = await api.get<UserType>(`auth/users/${id}`);
    return response.data;
};

export const createUser = async (formData: UserInput) => {
    const response = await api.post<UserType>(`auth/users/`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const updateUser = async (id: number, formData: FormData) => {
    const response = await api.put<UserType>(`auth/users/${id}`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const deleteUser = async (id: number) => {
    const response = await api.delete<UserType>(`auth/users/${id}`);
    return response.data;
};


export const login = async (data: LoginType) => {
    const response = await api.post<UserResponseType>(`login`, data);
    return response.data;
};

export const signUp = async (data: UserInput) => {
    const response = await api.post(`signup`, data);
    return response.data;
};

export const changePassword = async (data: UserPasswordType) => {
    const user_id = data.user_id;
    delete data.user_id;
    console.log(data);
    const response = await api.put(`/change_password/${user_id}/`, data);
    return response.data;
};