import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { login, checkStatus } from '../services/user-service';
import type { AuthStatus, LoginType, AuthCheckType as User } from '../types/UserType';



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
            //const user = await checkStatus();
            set({ status: 'authorized', token: response.access, refresh: response.refresh });
        } catch (error) {
            set({ status: 'unauthorized', token: undefined, refresh: undefined, user: undefined });
            throw 'Unauthorized';
        }
    },

    checkAuthStatus: async () => {
        try {
            const response = await checkStatus();
            console.log("chek-auth", response)
            set({ status: 'authorized', user: response });
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