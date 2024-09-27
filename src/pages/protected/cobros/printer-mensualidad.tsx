import { useEffect } from 'react'
import { ImprimirMensualidad } from '../../../features/Cobros/ImprimirMensualidad'
import { setPageTitle } from '../../../features/common/headerSlice'
import { useAppDispatch } from '../../../stores/dispatch'

function InternalPage() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Imprimir" }))
    })
    return (
        <ImprimirMensualidad />
    )
}

export default InternalPage