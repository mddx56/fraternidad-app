import { useEffect } from 'react'
import { setPageTitle } from '../../../features/common/headerSlice'
import { useAppDispatch } from '../../../app/hook'
import { UserAdminAdd } from '../../../features/User/UserAdminAdd'


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