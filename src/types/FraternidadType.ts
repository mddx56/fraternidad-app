export type MediaImageType = {
    id: number;
    url: string;
    descripcion: string;
    secuencia: number;
    mostrar: boolean;
    upload_date: string;
    fraternidad: number;
}

export type MediaVideoType = {
    id: number;
    url: string;
    video_id: number;
    descripcion: string;
    mostrar: boolean;
    upload_date: string;
    fraternidad: number;
}

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
    color: string;
    telefono: string;
    direccion: string;
    mensualidad: string;
    monto_suspendido: string;
    monto_no_reserva: string;
    turno_semanal: string;
    url: string;
    latitud: number;
    longitud: number;
    banco: string;
    nro_cuenta: string
}