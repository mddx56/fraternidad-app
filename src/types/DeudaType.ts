export type DeudaState = {
    loading: boolean;
    deudas: Array<DeudaType>;
    error: string | undefined;
}

export type DeudaType = {
    id: number;
    mes: number;
    estado_reserva: number;
    user: number;
}

export type EstadoDeudaType = {
    id:number;
    nombre: string;
}

export type DeudaInput = Omit<DeudaType, "id">;