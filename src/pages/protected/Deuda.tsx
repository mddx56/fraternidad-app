import { useEffect } from 'react'

import { setPageTitle } from '../../features/common/headerSlice'
import Deuda from '../../features/Deuda'
import { useAppDispatch } from '../../app/hook'


function InternalPage() {
     const dispatch = useAppDispatch()

    useEffect(() => {
          dispatch(setPageTitle({ title : "Deuda"}))
    })

    return (
        <Deuda />
    )
}

export default InternalPage