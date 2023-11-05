import { useEffect } from 'react'
import { setPageTitle } from '../../../features/common/headerSlice'
import { useAppDispatch } from '../../../app/hook'
import { SelectPago } from '../../../features/Pago/SelectPago'


function InternalPage(){
  const dispatch = useAppDispatch()

  useEffect(() => {
        dispatch(setPageTitle({ title : "Admin. Cobros"}))
  })
    return(
        <SelectPago />
    )
}

export default InternalPage