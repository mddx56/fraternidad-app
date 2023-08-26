export type DeudaState = {
    loading: boolean;
    deudas: Array<DeudaType>;
    error: string | undefined;
}

export type DeudaType = {
    id: number;
    deuda_total: number;
    created_date: string;
    estado_deuda: number;
    user: number;
}


export type EstadoDeudaType = {
    id: number;
    nombre: string;
}

export type ExtraordinariaType = {
    id: number;
    monto: number;
    concepto: string;
    created_date: string;
}

export type MensualidadType = {
    id: number;
    monto_fijo: number;
    pagado: boolean;
    fecha: string;
    deuda: number;
}

export type DeudaExtraordinariaType = {
    id: number;
    pagado: boolean;
    created_date: string;
    fecha: string;
    deuda: number;
    extraordinaria: number;
}

export type DeudaInput = Omit<DeudaType, "id">;