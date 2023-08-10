import { useEffect } from 'react';
import { Calendar } from "react-big-calendar";
import { setPageTitle } from '../../features/common/headerSlice';
import { localizer, getMessages } from '../../utils/calendarLocalizer';
import { CalendarEvent } from '../../features/Calendar/CalendarEvent';
import TitleCard from '../../features/common/components/Cards/TitleCard';
import { useAppDispatch } from '../../app/hook';

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

function InternalPage() {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setPageTitle({ title: "Bienvenido" }))
  })

  return (
    <>
      <TitleCard title="Calendario" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>
        <div className="overflow-x-auto w-full">


          <Calendar
            culture='es'
            localizer={localizer}
            defaultView='week'
            //events={events}
            style={{ height: '80vh' }}
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