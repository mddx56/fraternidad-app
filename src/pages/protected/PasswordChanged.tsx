import { useEffect } from 'react'
import { setPageTitle } from '../../features/common/headerSlice'
import PasswordChanged from '../../features/user/PasswordChanged'
import { useAppDispatch } from '../../stores/dispatch'

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