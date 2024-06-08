export type MediaImageType = {
    id: number;
    url: string;
    descripcion: string;
    secuencia: number;
    mostrar: boolean;
    tag: string;
    upload_date: string;
    fraternidad: number;
}

export type MediaImageInput = Omit<MediaImageType, "id">;

export type MediaVideoType = {
    id: number;
    url: string;
    video_id: string;
    titulo: string;
    descripcion: string;
    mostrar: boolean;
    upload_date: string;
    fraternidad: number;
}

export type MediaVideoInput = Omit<MediaVideoType, "id">;