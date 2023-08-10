import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { getAllEventos } from '../../services/eventoService';
import { EventoState, EventoType } from '../../types/EventoType';


export const getEventosAll = createAsyncThunk('/eventos/all', async () => {
    return getAllEventos();
});

const initialState: EventoState = {
    loading: false,
    eventos: [],
    error: undefined,
}

export const eventoSlice = createSlice({
    name: 'eventos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getEventosAll.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(getEventosAll.fulfilled, (state, action: PayloadAction<Array<EventoType>>) => {
            state.loading = false;
            state.eventos = action.payload;
        });
        
        builder.addCase(getEventosAll.rejected, (state, action) => {
            state.loading = false;
            state.eventos = [];
            state.error = action.error.message;
        });

    }
})

export const userSelector = (state: RootState) => state.evento;
export default eventoSlice.reducer