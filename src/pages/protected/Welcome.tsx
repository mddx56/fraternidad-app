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
import { useNavigate } from 'react-router-dom';
import { LoadingInfinity } from '../../features/common/components/LoadingInfinity';
import { toast } from 'react-toastify';
import { QUERY_KEY } from '../../utils/constant';

interface PropsSideButton {
  onClickBtn: () => void;
}

const TopSideButtons = ({ onClickBtn }: PropsSideButton) => {

  return (
    <div className="inline-block float-right">
      <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => { onClickBtn() }}>Agregar Evento</button>
    </div>
  )
}

function convertDT(hora: string, fecha: string): Date {
  const fechaHoraString = `${fecha} ${hora}`;
  const dateObject = new Date(fechaHoraString);
  return dateObject;
}

function InternalPage() {
  const navigate = useNavigate();
  const [events, setEvents] = useState<Event[]>([]);
  const { isLoading, data, error } = useQuery<EventoType[], Error>([QUERY_KEY.EVENTOS], getAllEventos)
  console.log(data);

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle({ title: "Calendario" }))
    if (data) {
      const transformedEvents = data.map((evento: EventoType) => ({
        title: evento.tipo_evento,
        start: convertDT(evento.fecha, evento.hora_inicio),
        end: convertDT(evento.fecha, evento.hora_fin),
        evento: evento,
      }));
      setEvents(transformedEvents);
      //console.log('Datos obtenidos:', transformedEvents);
    }

    if (error) {
      console.error('Error al obtener los datos:', error);
    }

  }, [data, error, dispatch]);

  if (isLoading) {
    return <LoadingInfinity />;
  }

  const onClickEvent = () => {
    navigate("/app/addevento");
    console.log("go add..");
  }

  const onSelectEvent = (e) => {
    //dispatch(eventSetActive(e));
    toast.success(`Event has been created ${e}`);
    console.log("select event", e);

  };

  const onDoubleClick = (e) => {
    //dispatch(uiOpenModal());
    toast.success(`Event has been created ${e}`);
    console.log("double click", e);
  };

  const onSelectSlot = (e) => {
    //dispatch(eventClearActiveEvent())
    const dateSelect = new Date(e["slots"][0]);
    toast.success(`Event ${dateSelect.getFullYear()}`);

    console.log(dateSelect.getDay());
  }


  const eventStyleGetter = (event: Event, start: Date, end: Date, isSelected: boolean) => {
    console.log("/*******************");
    console.log(event.title);
    console.log(start);
    console.log(end);
    console.log(isSelected);
    console.log("*******************/");
    const style = {
      //backgroundColor: '#37a455F7',
      background: 'None',
      borderRadius: '1px',
      opacity: 0.8,
      display: 'block',
      color: 'white',
    };
    return {
      style,
    };
  };

  return (
    <>
      <TitleCard title="Calendario de eventos" topMargin="mt-2" TopSideButtons={<TopSideButtons onClickBtn={onClickEvent} />}>
        <div className="overflow-x-auto z-0">

          <Calendar
            culture='es'
            localizer={localizer}
            defaultView='month'
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100vh' }}
            messages={getMessages()}
            onSelectEvent={onSelectEvent}
            onDoubleClickEvent={onDoubleClick}
            eventPropGetter={eventStyleGetter}
            onSelectSlot={onSelectSlot}
            selectable={true}
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