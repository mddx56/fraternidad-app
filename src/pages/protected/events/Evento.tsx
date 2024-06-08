import { useEffect } from 'react'
import { setPageTitle } from '../../../features/common/headerSlice'
import { useAppDispatch } from '../../../stores/hook'
import Evento from '../../../features/Evento'

function InternalPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle({ title: "Evento" }))
  })
  return (
    <Evento />
  )
}

export default InternalPage