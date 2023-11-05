import { useEffect } from 'react'

import { setPageTitle } from '../../features/common/headerSlice'
import DeudaView from '../../features/Deuda/DeudaView'
import { useAppDispatch } from '../../app/hook'


function InternalPage() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Deuda Fraterno" }))
    })

    return (
        <DeudaView />
    )
}

export default InternalPage