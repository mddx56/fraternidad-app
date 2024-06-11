export type ArticuloType = {
    id: number;
    titulo: string;
    descripcion: string;
    mostrar: boolean;
    upload_date: string;
    fraternidad: number;
}

export type FraternidadType = {
    id: number;
    nombre: string;
    descripcion: string;
    telefono: string;
    email: string;
    direccion: string;
    mensualidad: number;
    monto_suspendido: number;
    monto_no_reserva: number;
    turno_semanal: string;
    link_whatsapp: string;
    latitud: number;
    longitud: number;
    banco: string;
    nro_cuenta: string;
}
