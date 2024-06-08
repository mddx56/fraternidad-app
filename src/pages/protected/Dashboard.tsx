import { useEffect } from 'react'
import { useAppDispatch } from '../../stores/hook'
import { setPageTitle } from '../../features/common/headerSlice'
import Dashboard from '../../features/dashboard/Dashboard'

function InternalPage() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setPageTitle({ title: "Dashboard" }))
    })

    return (
        <Dashboard />
    )
}

export default InternalPage