import React, { useState, useEffect } from 'react'
import { AppState } from 'react-native'
import RNAndroidNotificationListener from 'react-native-android-notification-listener';



function permission() {
    const [hasPermission, setHasPermission] = useState(false);

    const handleOnPressPermission = async () => {
        /**
         * Open the notification settings so the user
         * so the user can enable it
         */
        RNAndroidNotificationListener.requestPermission();
    }

    const handleAppStateChange = async (
        nextAppState: string,
        force = false
    ) => {
        if (nextAppState === 'active' || force) {
            const status = await RNAndroidNotificationListener.getPermissionStatus();
            setHasPermission(status !== 'denied');
        }
    }

    useEffect(() => {
        const listener = AppState.addEventListener(
            'change',
            handleAppStateChange
        )

        handleAppStateChange('', true)

        return () => {
            listener.remove()
        }
    }, [])
}

export default permission;