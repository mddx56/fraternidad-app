export type HeaderType = {
    pageTitle: string;
    noOfNotifications: number;
    newNotificationMessage: string;
    newNotificationStatus: number;
}

export type HeaderInputType = {
    title: string;
    message?: string;
    status?: number;
}