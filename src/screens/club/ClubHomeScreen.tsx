import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet, View, Button, SafeAreaView, Image, Dimensions } from 'react-native';
import { clubNavigations } from '../../constants/navigations';
import CustomButton from '../../components/CustomButton';
import { ClubStackParamList } from '../../navigations/ClubStackNavigator';

type ClubHomeScreenProps = StackScreenProps<
  ClubStackParamList,
  typeof clubNavigations.CLUB_HOME
>;

function ClubHomeScreen({navigation}: ClubHomeScreenProps) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonContainer}>
          <CustomButton
            label="모임 생성하기"
            inValid={false}
            onPress={() => navigation.navigate(clubNavigations.CREATE)}
            />
        </View>
      </SafeAreaView>
    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1.5,
    width: Dimensions.get('screen').width / 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    gap: 10,
  }
});

export default ClubHomeScreen;