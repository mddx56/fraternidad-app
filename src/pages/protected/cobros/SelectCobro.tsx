import { useEffect } from 'react'
import { SelectFraterno } from '../../../features/Cobros/SelectFraterno'
import { setPageTitle } from '../../../features/common/headerSlice'
import { useAppDispatch } from '../../../stores/hook'
import { SelectPago } from '../../../features/Cobros/SelectPago'


function InternalPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle({ title: "Admin. Cobros" }))
  })
  return (
    <SelectPago />
  )
}

export default InternalPage