import { useEffect } from 'react'
import { setPageTitle } from '../../features/common/headerSlice'
import { useAppDispatch } from '../../stores/hook'
import Pago from '../../features/Cobros'

function InternalPage() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Pago" }))
    })
    return (
        <Pago />
    )
}

export default InternalPage