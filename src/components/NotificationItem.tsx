import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../constants';

type Notification = {
  id: string,
  name: string,
  contents: string,
}

type NotificationItemProps = {
  item: Notification;
};

const NotificationItem: React.FC<NotificationItemProps> = ({ item }) => {
  return (
    <View style={styles.notification}>
      <Text>
        {item.name}
      </Text>
      <Text>
        {item.contents}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  notification: {
    flex: 0,
    backgroundColor: colors.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: colors.BLACK,
    fontWeight: "500",
  },
});

export default NotificationItem;
