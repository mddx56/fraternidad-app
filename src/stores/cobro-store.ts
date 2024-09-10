import { StateCreator, create } from 'zustand';
import { persist } from 'zustand/middleware';


export interface CobroState {
    tipoCobro: "mensualidad" | "extraordinaria" | string;
    idfraterno: string;
    cifraterno: string;
    namefraterno: string;
    setTipoCobro: (tipo: string) => void;
    setFraterno: (id: string) => void;
    setCi: (ci: string) => void;
    setName: (nombre: string) => void;
    reset: () => void;
}

const cobroStore: StateCreator<CobroState> = (set) => ({
    tipoCobro: "",
    idfraterno: "",
    cifraterno: "",
    namefraterno: "",
    setTipoCobro: (tipo) => set((state) => ({ ...state, tipoCobro: tipo })),
    setFraterno: (id) => set((state) => ({ ...state, idfraterno: id })),
    setCi: (ci) => set((state) => ({ ...state, cifraterno: ci })),
    setName: (nombre) => set((state) => ({ ...state, namefraterno: nombre })),
    reset: () => { set({ tipoCobro: "", idfraterno: "", cifraterno: "" }) },
});


export const useCobroStore = create<CobroState>()(
    persist(
        cobroStore,
        { name: 'fs-storage' }
    )
);