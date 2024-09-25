import { useEffect } from 'react'
import { setPageTitle } from '../../../features/common/headerSlice'
import { useAppDispatch } from '../../../stores/dispatch'
import Evento from '../../../features/Evento'

function InternalPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle({ title: "Eventos" }))
  })
  return (
    <Evento />
  )
}

export default InternalPage