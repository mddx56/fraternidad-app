import { useEffect } from 'react'
import { setPageTitle } from '../../features/common/headerSlice'
import EventShop from '../../features/EventShop'
import { useAppDispatch } from '../../app/hook'

function InternalPage() {

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setPageTitle({ title: "Eventos disponibles" }))
    })


    return (
        <EventShop />
    )
}

export default InternalPage