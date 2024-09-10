import { useEffect } from 'react'
import { setPageTitle } from '../../../features/common/headerSlice'
import { useAppDispatch } from '../../../stores/dispatch'
import { SelectPago } from '../../../features/cobros/SelectPago'


function InternalPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle({ title: "Realizar Cobro" }))
  })
  return (
    <SelectPago />
  )
}

export default InternalPage