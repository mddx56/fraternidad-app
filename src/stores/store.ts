import { configureStore } from '@reduxjs/toolkit';
import headerSlice from '../features/common/headerSlice';
import rightDrawerSlice from '../features/common/rightDrawerSlice';
import eventoSlice from '../features/evento/EventoSlice';
import userSlice from '../features/user/userSlice';

const combinedReducer = {
    rightDrawer: rightDrawerSlice,
    header: headerSlice,
    evento: eventoSlice,
    user: userSlice,
}

export const store = configureStore({
    reducer: combinedReducer
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


