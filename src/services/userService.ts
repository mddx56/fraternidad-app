import { api } from './api';
import { UserType, UserInput, UserLoginType, UserResponseType } from '../types/UserType';

export const getAllUsers = async () => {
    const response = await api.get<UserType[]>(`agenda/users/`);
    return response.data;
};

export const getUser = async (id: string) => {
    const response = await api.get<UserType>(`agenda/users/${id}`);
    return response.data;
};

export const createUser = async (formData: UserInput) => {
    const response = await api.post<UserType>(`agenda/users/`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const updateUser = async ({
    id,
    formData,
}: {
    id: number;
    formData: FormData;
}) => {
    const response = await api.put<UserType>(`agenda/users/${id}`, formData, {
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return response.data;
};

export const deleteUser = async (id: number) => {
    const response = await api.delete<UserType>(`agenda/users/${id}`);
    return response.data;
};


export const login = async (data: UserLoginType) => {
    const response = await api.post<UserResponseType>(`auth/login`, data);
    return response.data;
};

export const signUp = async (data: UserType) => {
    const response = await api.post(`auth/signup`, data);
    return response.data;
};