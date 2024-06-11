import { UserAdminType } from "../../types/user-type";

interface UserProps {
    User?: UserAdminType
}

export function UserAdminView({ User }: UserProps) {
    return (<div>{User?.username ?? "..."}</div>)
}