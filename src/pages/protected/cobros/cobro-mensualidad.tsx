import { useEffect } from 'react'
import { CobroMensualidad } from '../../../features/Cobros/CobroMensualidad'
import { setPageTitle } from '../../../features/common/headerSlice'
import { useAppDispatch } from '../../../stores/dispatch'

function InternalPage() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Realizar Cobro Mensualidad" }))
    })
    return (
        <CobroMensualidad />
    )
}

export default InternalPage