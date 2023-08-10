import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../app/store';
import { getAllUsers } from '../../services/userService';
import { UserState, UserType } from '../../types/UserType';

export const getUserAll = createAsyncThunk('/users/all', async () => {
    return getAllUsers();
});


const initialState: UserState = {
    loading: false,
    eventos: [],
    error: undefined,
}

export const eventoSlice = createSlice({
    name: 'eventos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserAll.pending, (state) => {
            state.loading = true;
        });

        builder.addCase(getUserAll.fulfilled, (state, action: PayloadAction<Array<UserType>>) => {
            state.loading = false;
            state.eventos = action.payload;
        });

        builder.addCase(getUserAll.rejected, (state, action) => {
            state.loading = false;
            state.eventos = [];
            state.error = action.error.message;
        });
    }
})

export const userSelector = (state: RootState) => state.user;
export default eventoSlice.reducer;