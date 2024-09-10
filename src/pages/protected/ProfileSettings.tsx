import { useEffect } from 'react'
import { setPageTitle } from '../../features/common/headerSlice'
import ProfileSettings from '../../features/user/ProfileSettings'
import { useAppDispatch } from '../../stores/dispatch'

function InternalPage() {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setPageTitle({ title: "Perfil Usuario" }))
    })


    return (
        <ProfileSettings />
    )
}

export default InternalPage