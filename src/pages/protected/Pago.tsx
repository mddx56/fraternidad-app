import { useEffect } from 'react'
import { setPageTitle } from '../../features/common/headerSlice'
import { useAppDispatch } from '../../app/hook'
import Pago from '../../features/Pago'

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