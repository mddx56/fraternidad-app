import { configureStore } from '@reduxjs/toolkit'
import rightDrawerSlice from '../features/common/rightDrawerSlice'
import headerSlice from '../features/common/headerSlice';
import eventoSlice from '../features/Evento/EventoSlice';
import userSlice from '../features/User/userSlice';

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


