import { UserAdminType } from "../../types/UserType";

interface UserProps {
    User?: UserAdminType
}

export function UserAdminView({ User }: UserProps) {
    return (<div>{User.username}</div>)
}