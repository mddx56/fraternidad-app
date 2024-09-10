import { AuthCheckType, LoginType, UserAdminType, UserCounts, UserInput, UserPasswordType, UserResponseType, UserType } from '../types/user-type';
import { api } from './api';

export const getAllUsers = async () => {
    const response = await api.get<UserAdminType[]>(`auth/users/`);
    return response.data;
};

export const getAllFraters = async () => {
    const response = await api.get<UserType[]>(`auth/fraternos/`);
    return response.data;
};

export const getUser = async (id: string): Promise<UserType> => {
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

export const checkStatus = async () => {
    try {
        const response = await api.get<AuthCheckType>(`auth/check-status/`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error('UnAuthorized');
    }
};

export const signUp = async (data: UserInput) => {
    const response = await api.post(`signup`, data);
    return response.data;
};

export const changePassword = async (data: UserPasswordType) => {
    const user_id = data.user_id;
    delete data.user_id;
    //console.log(data);
    const response = await api.put(`/change_password/${user_id}/`, data);
    return response.data;
};

export const suspendUser = async (id: string) => {
    const response = await api.get(`auth/suspend/${id}`);
    return response.data;
};


export const getCountUsersStat = async () => {
    try {
        const response = await api.get<UserCounts>(`auth/fraternos-count/`);
        return response.data;
    } catch (error) {
        console.log(error);
        throw new Error('UnAuthorized');
    }
};