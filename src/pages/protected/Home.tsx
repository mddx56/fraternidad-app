import { useEffect } from 'react'
import { useAppDispatch } from '../../stores/dispatch'
import { setPageTitle } from '../../features/common/headerSlice'

function InternalPage() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: "Dashboard" }))
    })

    return (
        <div>Home...</div>
    )
}

export default InternalPage