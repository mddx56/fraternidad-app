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