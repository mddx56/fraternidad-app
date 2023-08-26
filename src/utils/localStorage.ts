import jwt_decode from 'jwt-decode';
import { UserProfile } from '../types/UserType';

export function setAccessToken(accessToken: string) {
    const decoded = jwt_decode(accessToken);
    console.log('decoded', decoded);
    localStorage.setItem('userInfo', JSON.stringify(decoded));
    localStorage.setItem('accessToken', accessToken);
}

export function setRefreshToken(accessToken: string) {
    localStorage.setItem('refreshToken', accessToken);
}

export function getRefreshToken(): string | null {
    const token = localStorage.getItem('refreshToken');
    return token == undefined ? null : token;
}

export function getAccessToken(): string | null {
    const token = localStorage.getItem('accessToken');
    return token == undefined ? null : token;
}

export function clearTokens(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userInfo');
}

export function getUserInfo(): UserProfile | null {
    const userInfoString = localStorage.getItem('userInfo');
    if (userInfoString !== null) {
        const user = JSON.parse(userInfoString) as UserProfile;
        return user;
    }
    return null;
}