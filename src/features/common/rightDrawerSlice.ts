import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { rightDrawerType } from '../../types/rightDrawer'
import { RootState } from '../../stores/store'

const initialState: rightDrawerType = {
    header: "",  // current  title state management
    isOpen: false,   // right drawer state management for opening closing
    bodyType: "",   // right drawer content management
    extraObject: {},
}

export const rightDrawerSlice = createSlice({
    name: 'rightDrawer',
    initialState,
    reducers: {

        openRightDrawer: (state: rightDrawerType, action: PayloadAction<rightDrawerType>) => {
            const { header, bodyType, extraObject } = action.payload
            state.isOpen = true
            state.bodyType = bodyType
            state.header = header
            state.extraObject = extraObject
        },


        closeRightDrawer: (state: rightDrawerType) => {
            state.isOpen = false
            state.bodyType = ""
            state.header = ""
            state.extraObject = {}
        },

    }
})

export const { openRightDrawer, closeRightDrawer } = rightDrawerSlice.actions
export const userSelector = (state: RootState) => state.rightDrawer;
export default rightDrawerSlice.reducer