import { useEffect } from 'react'
import { SelectFraterno } from '../../../features/Cobros/SelectFraterno'
import { setPageTitle } from '../../../features/common/headerSlice'
import { useAppDispatch } from '../../../stores/dispatch'

function InternalPage() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Realizar Cobro" }))
    })
    return (
        <SelectFraterno />
    )
}

export default InternalPage