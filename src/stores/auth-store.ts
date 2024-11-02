import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { login, checkStatus } from '../services/user-service';
import type { AuthStatus, LoginType, AuthCheckType as User } from '../types/user-type';


export interface AuthState {

    status: AuthStatus;
    token?: string;
    refresh?: string;
    user?: User;

    loginUser: (data: LoginType) => Promise<void>;
    checkAuthStatus: () => Promise<void>;
    logoutUser: () => void;
}

const storeApi: StateCreator<AuthState> = (set) => ({

    status: 'pending',
    token: undefined,
    refresh: undefined,
    user: undefined,


    loginUser: async (data: LoginType) => {
        try {
            const response = await login(data);
            set({ status: 'authorized', token: response.access, refresh: response.refresh });
        } catch (error) {
            set({ status: 'unauthorized', token: undefined, refresh: undefined, user: undefined });
            throw 'Unauthorized';
        }
    },

    checkAuthStatus: async () => {
        try {
            const response = await checkStatus();

            if (response.status==200){
                set({ status: 'authorized', user: response.data });
            }else{
                window.location.href = "/login";
                set({ status: 'unauthorized', token: undefined, refresh: undefined, user: undefined });
            }
        } catch (error) {
            set({ status: 'unauthorized', token: undefined, refresh: undefined, user: undefined });
        }
    },

    logoutUser: () => {
        set({ status: 'unauthorized', token: undefined, refresh: undefined, user: undefined });
    }
});


export const useAuthStore = create<AuthState>()(
    devtools(
        persist(
            storeApi,
            { name: 'auth-storage' }
        )
    )
);