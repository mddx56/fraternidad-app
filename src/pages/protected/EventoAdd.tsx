import { useEffect } from 'react'
import { setPageTitle } from '../../features/common/headerSlice'
import { useAppDispatch } from '../../app/hook'
import EventoAdd from '../../features/Evento/EventoAdd'

function InternalPage(){
  const dispatch = useAppDispatch()

  
  useEffect(() => {
        dispatch(setPageTitle({ title : "Evento"}))
  })
    return(
        <EventoAdd/>
    )
}

export default InternalPage