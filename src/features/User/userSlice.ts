import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../../stores/store';
import { getAllUsers } from '../../services/user-service';
import { UserAdminType, UserState } from '../../types/UserType';

export const getUserAll = createAsyncThunk('/users/all', async () => {
    return getAllUsers();
});


const initialState: UserState = {
    loading: false,
    users: [],
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

        builder.addCase(getUserAll.fulfilled, (state, action: PayloadAction<Array<UserAdminType>>) => {
            state.loading = false;
            state.users = action.payload;
        });

        builder.addCase(getUserAll.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = action.error.message;
        });
    }
})

export const userSelector = (state: RootState) => state.user;
export default eventoSlice.reducer;