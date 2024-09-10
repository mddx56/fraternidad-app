import { useAppDispatch } from '../../../stores/dispatch'
import { setPageTitle } from '../../../features/common/headerSlice'
import Turnos from '../../../features/turnos'
import { useEffect } from 'react'

function InternalPage() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Turnos" }))
    })
    return (
        <Turnos />
    )
}

export default InternalPage