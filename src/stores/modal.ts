import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';


export interface ModalState {

    title?: string;
    isOpen: boolean;
    bodyType?: string;
    size?: string;
    extraObject?: string,

    openModal: () => void;
    closeModal: () => void;
}

const modalStore: StateCreator<ModalState> = (set) => ({

    title: "",
    isOpen: false,
    bodyType: "",
    size: "",
    extraObject: "",

    openModal: () => {
        set({ isOpen: true });
    },

    closeModal: () => {
        set({ isOpen: false });
    }
});


export const useModelStore = create<ModalState>()(
    devtools(
        persist(
            modalStore,
            { name: 'modal-storage' }
        )
    )
);