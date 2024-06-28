import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';

import { clubNavigations } from '../constants';
import ClubCreateScreen from '../screens/club/ClubCreateScreen';
import ClubHomeScreen from '../screens/club/ClubHomeScreen';
import ClubNotificationScreen from '../screens/club/ClubNotificationScreen';


export type ClubStackParamList = {
  [clubNavigations.CLUB_HOME]: undefined;
  [clubNavigations.CREATE]: undefined;
  [clubNavigations.NOTIFICATION]: undefined;
}


const Stack = createStackNavigator<ClubStackParamList>();

function ClubStackNavigator() {
  
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          backgroundColor: 'white',
          shadowColor: 'gray',
        },
        headerTitleStyle: {
          fontSize: 15,
        },
        headerTintColor: 'black',
    }}>
      <Stack.Screen 
        name={clubNavigations.CLUB_HOME} 
        component={ClubHomeScreen} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name={ clubNavigations.CREATE} 
        component={ClubCreateScreen} 
        options={{
          headerTitle: '모임생성',
        }}
      />
      <Stack.Screen 
        name={ clubNavigations.NOTIFICATION} 
        component={ClubNotificationScreen} 
        options={{
          headerTitle: '미분류 알림',
        }}
      />
    </Stack.Navigator>  
  )
}

const styles = StyleSheet.create({});

export default ClubStackNavigator;