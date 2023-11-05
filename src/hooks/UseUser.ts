import { QueryObserver, useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { QUERY_KEY } from "../utils/constant"
import { UserAdminType } from "../types/UserType"
import { getAllUsers } from "../services/userService"

export const useGetUsers = () => {
    return useQuery<UserAdminType[], Error>([QUERY_KEY.USERS], getAllUsers);
}

export const useGetUsersObserver = () => {

    const get_users = useGetUsers()

    const queryClient = useQueryClient()

    const [users, setUsers] = useState<UserAdminType[]>(() => {
        // get data from cache
        const data = queryClient.getQueryData<UserAdminType[]>([QUERY_KEY.USERS])
        return data ?? []
    })

    useEffect(() => {
        const observer = new QueryObserver<UserAdminType[]>(queryClient, { queryKey: [QUERY_KEY.USERS] })

        const unsubscribe = observer.subscribe(result => {
            if (result.data) setUsers(result.data)
        })

        return () => { unsubscribe() }
    }, [])

    return {
        ...get_users,
        data: users,
    }
}
