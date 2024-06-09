import { useAuthStore } from "../stores/auth";
import Avvvatars from "avvvatars-react"
import { useEffect } from "react"

interface Props {
    name: string;
    type?: 'shape' | 'character';
}


export function Avatar({ name, type = 'character' }: Props) {

    const checkAuth = useAuthStore(state => state.checkAuthStatus);
    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <>
            <Avvvatars value={name} style={type} />
        </>
    )
}