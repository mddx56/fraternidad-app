import { useEffect } from 'react'
import { setPageTitle } from '../../features/common/headerSlice'
import ProfileSettings from '../../features/User/ProfileSettings'
import { useAppDispatch } from '../../app/hook'

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