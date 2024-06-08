import { format } from 'date-fns/format'
import { parse } from 'date-fns/parse'
import { startOfWeek } from 'date-fns/startOfWeek'
import { getDay } from 'date-fns/getDay'
import { es } from 'date-fns/locale/es'

import { Calendar, dateFnsLocalizer } from "react-big-calendar"

function CalendarBig() {
  const locales = {
    'es': es,
  }

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  })

  return (
    <>
      <Calendar
        culture='es'
        localizer={localizer}
        defaultView='week'
        //events={events}
        //onEventDrop={onEventDrop}
        //onEventResize={onEventResize}
        style={{ height: '100vh' }}
      />
    </>
  )
}

export default CalendarBig
