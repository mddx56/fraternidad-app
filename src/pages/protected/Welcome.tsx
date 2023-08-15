import { useEffect, useState } from 'react';
import { Calendar, Event } from "react-big-calendar";
import { setPageTitle } from '../../features/common/headerSlice';
import { localizer, getMessages } from '../../utils/calendarLocalizer';
import { CalendarEvent } from '../../features/Calendar/CalendarEvent';
import TitleCard from '../../features/common/components/Cards/TitleCard';
import { useAppDispatch } from '../../app/hook';
import { useQuery } from '@tanstack/react-query';
import { getAllEventos } from '../../services/eventoService';
import { EventoType } from '../../types/EventoType';

const TopSideButtons = () => {

  // const dispatch = useDispatch()

  //    const openAddNewLeadModal = () => {
  //dispatch(openModal({title : "Add New Lead", bodyType : MODAL_BODY_TYPES.LEAD_ADD_NEW}))
  //  }

  return (
    <div className="inline-block float-right">
      <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => { }}>Add New</button>
    </div>
  )
}

function convertDT(hora: string, fecha: string): Date {
  const fechaHoraString = `${fecha} ${hora}`;
  const dateObject = new Date(fechaHoraString);
  return dateObject;
}

function InternalPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const { isLoading, data, error } = useQuery<EventoType[], Error>(['eventos'], getAllEventos)
  console.log(data);

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle({ title: "Bienvenido" }))
    if (data) {
      const transformedEvents = data.map((evento: EventoType) => ({
        title: evento.tipo_evento,
        start: convertDT(evento.fecha, evento.hora_inicio),
        end: convertDT(evento.fecha, evento.hora_fin),
        evento: evento,
      }));
      setEvents(transformedEvents);
      console.log('Datos obtenidos:', transformedEvents);
    }

    if (error) {
      console.error('Error al obtener los datos:', error);
    }

  }, [data, error, dispatch]);

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <TitleCard title="Calendario" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>
        <div className="overflow-x-auto w-full">
          <Calendar
            culture='es'
            localizer={localizer}
            defaultView='month'
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100vh' }}
            messages={getMessages()}
            components={{
              event: CalendarEvent
            }}
          />

        </div>
      </TitleCard>
    </>
  )
}

export default InternalPage