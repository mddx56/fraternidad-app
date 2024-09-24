import { configureStore } from '@reduxjs/toolkit';
import headerSlice from '../features/common/headerSlice';
import rightDrawerSlice from '../features/common/rightDrawerSlice';


const combinedReducer = {
    rightDrawer: rightDrawerSlice,
    header: headerSlice,
}

export const store = configureStore({
    reducer: combinedReducer
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;


