import { useAppDispatch } from '../../../stores/dispatch'
import { setPageTitle } from '../../../features/common/headerSlice'
import Medios from '../../../features/Medios'
import { useEffect } from 'react'

function InternalPage() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Multimedios" }))
    })
    return (
        <Medios />
    )
}

export default InternalPage