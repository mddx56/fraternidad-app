import { useEffect } from 'react'
import { CobroExtraord } from '../../../features/cobros/CobroExtraord'
import { setPageTitle } from '../../../features/common/headerSlice'
import { useAppDispatch } from '../../../stores/dispatch'

function InternalPage() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Realizar Cobro Mensualidad" }))
    })
    return (
        <>
            <CobroExtraord />
        </>
    )
}

export default InternalPage