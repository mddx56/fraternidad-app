import { useEffect } from 'react'
import { setPageTitle } from '../../features/common/headerSlice'
import PasswordChanged from '../../features/User/PasswordChanged'
import { useAppDispatch } from '../../stores/hook'

function InternalPage() {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setPageTitle({ title: "Contraseña Usuario" }))
    })


    return (
        <PasswordChanged />
    )
}

export default InternalPage