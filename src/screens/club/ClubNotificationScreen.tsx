import React, { useEffect, useState } from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, View, Button, SafeAreaView, Image, Dimensions, Text } from 'react-native';
import { clubNavigations } from '../../constants/navigations';
import CustomButton from '../../components/CustomButton';
import { ClubStackParamList } from '../../navigations/ClubStackNavigator';
import { ScrollView } from 'react-native-gesture-handler';
import NotificationItem from '../../components/NotificationItem';

type Notification = {
  id: string,
  name: string,
  contents: string,
}

function ClubNotificationScreen() {

  const [notificationList, setNotificationList] = useState([]);

  useEffect(() => {
    const getJSONData = async () => {
      try {
        const response = await fetch('https://alert.klr.kr/api/v1/alerts', {
            method: 'GET',
          } 
        )
        const json = await response.json();

        setNotificationList(json.lists);

        notificationList.map((item: Notification, idx) => (
          console.log(item.id, item.name)
        ));
      } catch (error) {
          console.error('Failed to fetch notification from server:', error)
      }
    }
  
    getJSONData();  
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {notificationList.map((item: Notification) => (
          <NotificationItem
            key={item.id}
            item={item}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    alignItems: 'center',
  },
});

export default ClubNotificationScreen;