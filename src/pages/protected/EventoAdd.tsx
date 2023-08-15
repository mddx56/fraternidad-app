import { useEffect } from 'react'
import { setPageTitle } from '../../features/common/headerSlice'
import { useAppDispatch } from '../../app/hook'
import EventoAdd from '../../features/Evento/EventoAdd'

function InternalPage(){
  const dispatch = useAppDispatch()

  const onSubmit = async (data: any) =>{

  } //createUser.mutate(data);

  useEffect(() => {
        dispatch(setPageTitle({ title : "Evento"}))
  })
    return(
        <EventoAdd submitText='Create' submitAction={onSubmit}/>
    )
}

export default InternalPage