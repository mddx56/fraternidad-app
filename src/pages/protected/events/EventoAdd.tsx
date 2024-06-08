import { useEffect } from 'react'
import { setPageTitle } from '../../../features/common/headerSlice'
import { useAppDispatch } from '../../../stores/hook'
import EventoAdd from '../../../features/Evento/EventoAdd'

function InternalPage() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle({ title: "Agregar Evento" }))
  })
  return (
    <EventoAdd />
  )
}

export default InternalPage