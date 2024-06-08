import { useEffect } from 'react'

import { setPageTitle } from '../../features/common/headerSlice'
//import Deuda from '../../features/Deuda'
import { useAppDispatch } from '../../stores/hook'


function InternalPage() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Deuda" }))
    })

    return (
        <h1>dss</h1>
    )
}

export default InternalPage