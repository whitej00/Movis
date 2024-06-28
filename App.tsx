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
import { NavigationContainer } from '@react-navigation/native';
import ClubStackNavigator from './src/navigations/ClubStackNavigator';


function App() {
    
    return (
        <NavigationContainer>
            <ClubStackNavigator />
        </NavigationContainer>
    )
}

export default App;