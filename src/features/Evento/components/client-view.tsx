import { useQuery } from "react-query"
import { getUser } from "../../../services/user-service"
import { UserType } from "../../../types/UserType"

type Props = {
    id: string
}

export default function Client({ id }: Props) {
    const { isLoading, data } = useQuery<UserType>({ queryKey: ['cliente', id], queryFn: () => getUser(id) })
    return (
        <>
            {
                !isLoading && data ?
                    <span>{data.full_name}</span>
                    : <span className="skeleton w-full h-8"></span>
            }
        </>
    )
}