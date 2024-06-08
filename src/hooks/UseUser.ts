import { useEffect, useState } from "react"
import { QueryObserver, useQuery, useQueryClient } from "react-query"
import { getAllUsers } from "../services/user-service"
import { UserAdminType } from "../types/UserType"
import { QUERY_KEY } from "../utils/constant"

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
