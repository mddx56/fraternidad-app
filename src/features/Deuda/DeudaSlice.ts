import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { getAllDeudas } from '../../services/deudaService';
import { DeudaState, DeudaType } from '../../types/DeudaType';


export const getDeudasAll = createAsyncThunk('/deudas/all', async () => {
    return getAllDeudas();
});

const initialState: DeudaState = {
    loading: false,
    deudas: [],
    error: undefined,
}

export const deudaSlice = createSlice({
    name: 'deudas',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getDeudasAll.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(getDeudasAll.fulfilled, (state, action: PayloadAction<Array<DeudaType>>) => {
            state.loading = false;
            state.deudas = action.payload;
        });

        builder.addCase(getDeudasAll.rejected, (state, action) => {
            state.loading = false;
            state.deudas = [];
            state.error = action.error.message;
        });

    }
})

export const userSelector = (state: RootState) => state.deuda;
export default deudaSlice.reducer