export type ExtraordinariaType = {
    id: number;
    monto: number;
    concepto: string;
    created_date: string;
}

export type ExtraordinariaInput = Omit<ExtraordinariaType, "id">;

export type MensualidadType = {
    id: number;
    costo: string;
    fecha: string;
    mes: number;
    gestion: number;
}

export type MensualidadInput = Omit<MensualidadType, "id">;

export type DetalleExtraordinariaType = {
    id: number;
    saldo: string;
    created_date: string;
    pago: number;
    extraordinaria: number;
}

export type DetalleExtraordinariaInput = Omit<DetalleExtraordinariaType, "id">;

export type DetalleMensualidadType = {
    id: number;
    created_date: string;
    pago: number;
    mensualidad: number;
}

export type DetalleMensualidadInput = Omit<DetalleMensualidadType, "id">;


export type PagoType = {
    id: number;
    fecha_pago: string;
    monto_pagado: string;
    created_date: string;
    user: string;
}


export type PagoInput = Omit<PagoType, "id">;

export type DeudaMensualidadType = {
    id: number;
    mes: string;
    gestion: number;
    costo: number;
    fecha: string;
    mensualidad: number;
}

export type DeudaExtraordType = {
    extraordinaria: Extraordinaria;
    saldo: number;
    deuda: number;
}

export type Extraordinaria = {
    id: number;
    monto: number;
    concepto: string;
    create_date: string;
}

export type DeudaMenType = {
    deudas: MensualidadDeuda[];
    total: number;
}

export type MensualidadDeuda = {
    id: number;
    mes: string;
    gestion: number;
    costo: number;
    fecha: string;
    mensualidad: number;
}

export type MensualidadPagosInput = {
    mensualidades: number[];
    frater_id: string;
}

export type PagoResponse = {
    status: string;
    pago: PagoType;
    cantidad: number;
    total: number;
}

