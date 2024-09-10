import { useEffect } from 'react'
import { setPageTitle } from '../../../features/common/headerSlice'
import Fraternidad from '../../../features/fraternidad'
import { useAppDispatch } from '../../../stores/dispatch'

function InternalPage() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(setPageTitle({ title: "Informacion de Fraternidad" }))
    })
    return (
        <Fraternidad />
    )
}

export default InternalPage