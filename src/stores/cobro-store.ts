import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';


export interface CobroState {
    tipoCobro: "mensualidad" | "extraordinaria" | string;
    idfraterno: string;
    setTipoCobro: (tipo: string) => void;
    setFraterno: (id: string) => void;
}

const cobroStore: StateCreator<CobroState> = (set) => ({
    tipoCobro: "",
    idfraterno: "",
    setTipoCobro: (tipo) => set((state) => ({ ...state, tipoCobro: tipo })),
    setFraterno: (id) => set((state) => ({ ...state, idfraterno: id })),
    reset: () => { set({ tipoCobro: "", idfraterno: "" }); },
});


export const useCobroStore = create<CobroState>()(
    devtools(
        persist(
            cobroStore,
            { name: 'fs-storage' }
        )
    )
);