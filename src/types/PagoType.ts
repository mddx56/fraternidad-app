export type PagoType = {
    id: number;
    fecha_pago: string;
    monto_pagado: string;
    deuda: number;
    evento: number;
    user: number;
}

export type PagoInput = Omit<PagoType, "id">;