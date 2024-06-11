import { useEffect } from 'react'
import { CobroExtraord } from '../../../features/Cobros/cobro-extraordinaria'
import { setPageTitle } from '../../../features/common/headerSlice'
import { useAppDispatch } from '../../../stores/dispatch'

function InternalPage() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Realizar Cobro Mensualidad" }))
    })
    return (
        <CobroExtraord />
    )
}

export default InternalPage