import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    Text,
    Image,
    Button,
    AppState,
    View,
    FlatList,
    ScrollView,
} from 'react-native'
import RNAndroidNotificationListener from 'react-native-android-notification-listener';
import styles from './styles';


function App() {
    const [hasPermission, setHasPermission] = useState(false);

    const handleOnPressPermissionButton = async () => {
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

    const getJSONData = async () => {
        try {
            const response = await fetch('https://alert.klr.kr/api/v1/alerts', {
                method: 'GET',
            }
            )
            const data = await response.json();
            console.log('success');
            console.log(data);

        } catch (error) {
            console.error('Failed to fetch notification from server:', error)
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

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonWrapper}>
                <Text
                    style={[
                        styles.permissionStatus,
                        { color: hasPermission ? 'green' : 'red' },
                    ]}>
                    {hasPermission
                        ? 'Allowed to handle notifications'
                        : 'NOT allowed to handle notifications'}
                </Text>
                <Button
                    title='Open Configuration'
                    onPress={handleOnPressPermissionButton}
                    disabled={hasPermission}
                />
            </View>
            <Button
                title='getJSON'
                onPress={getJSONData}
            />
        </SafeAreaView>
    )
}

export default App;