import { useEffect } from 'react'
import { SelectFraterno } from '../../../features/Cobros/SelectFraterno'
import { setPageTitle } from '../../../features/common/headerSlice'
import { useAppDispatch } from '../../../stores/hook'


function InternalPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle({ title: "Admin. Cobros" }))
  })
  return (
    <SelectFraterno />
  )
}

export default InternalPage