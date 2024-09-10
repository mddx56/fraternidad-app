import { useEffect } from 'react'
import { setPageTitle } from '../../../features/common/headerSlice'
import { useAppDispatch } from '../../../stores/dispatch'
import { UserAdminAdd } from '../../../features/user/UserAdminAdd'


function InternalPage() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Agregar Usuario" }))
    })
    return (
        <UserAdminAdd />
    )
}

export default InternalPage