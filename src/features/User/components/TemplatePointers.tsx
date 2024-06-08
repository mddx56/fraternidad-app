function TemplatePointers() {
    const year = new Date().getFullYear()
    return (
        <>
            <h1 className="text-2xl text-center mt-8 font-bold">Santa Cruz de la Sierra {year}</h1>
            {/*<p className="py-2">✓ <span className="font-semibold">Calendario de eventos </span>El sistema puede tener un calendario donde se muestren todos los eventos planificados en fechas específicas</p>
            <p className="py-2 ">✓ <span className="font-semibold">Notificaciones y recordatorios</span> El sistema puede enviar notificaciones y recordatorios automáticos a los miembros sobre eventos próximos, cambios en la programación </p>
            <p className="py-2">✓ <span className="font-semibold">Recopilación de pagos </span> Para eventos que requieran una tarifa de inscripción o contribución financiera.</p>*/}
        </>
    )
}

export default TemplatePointers