import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../stores/store';
import { HeaderInputType, HeaderType } from '../../types/header-type'

const initialState: HeaderType = {
    pageTitle: "Home",  // current page title state management
    noOfNotifications: 0,  // no of unread notifications
    newNotificationMessage: "",  // message of notification to be shown
    newNotificationStatus: 0,   // to check the notification type -  success/ error/ info
};

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setPageTitle: (state: HeaderType, action: PayloadAction<HeaderInputType>) => {
            state.pageTitle = action.payload.title
        },


        removeNotificationMessage: (state) => {
            state.newNotificationMessage = ""
        },

        /*showNotification: (state: HeaderType, action: PayloadAction<HeaderInputType>) => {
            state.newNotificationMessage = action.payload.message | "";
            state.newNotificationStatus = action.payload.status
        },*/
    }
})

export const { setPageTitle } = headerSlice.actions

export const headerSelector = (state: RootState) => state.header;

export default headerSlice.reducer