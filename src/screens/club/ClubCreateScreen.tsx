import React, { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useForm from '../../hooks/useForm';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import { validateCreateClub } from '../../utils';
import { TextInput } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import { ClubStackParamList } from '../../navigations/ClubStackNavigator';
import { clubNavigations } from '../../constants/navigations';


type ClubHomeScreenProps = StackScreenProps<
  ClubStackParamList,
  typeof clubNavigations.CREATE
>;

function ClubCreateScreen({navigation}: ClubHomeScreenProps){
  const accountNumberRef = useRef<TextInput | null>(null);
  const clubMembersRef = useRef<TextInput | null>(null);
  const createClub = useForm({
    initialValue: {clubName: '', accountNumber: '', clubMembers: ''},
    validate: validateCreateClub,
  });

  const handleSubmit = () => {
    console.log(createClub.values);
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <InputField 
          autoFocus
          placeholder='모임 이름' 
          error={createClub.errors.clubName}
          touched={createClub.touched.clubName}
          returnKeyType='next'
          blurOnSubmit={false}
          onSubmitEditing={() => accountNumberRef.current?.focus()}
          {...createClub.getTextInputProps('clubName')}
          /> 
        <InputField 
          ref={accountNumberRef}
          placeholder='계좌번호 뒤 4자리' 
          textContentType='oneTimeCode'
          error={createClub.errors.accountNumber}
          touched={createClub.touched.accountNumber}
          returnKeyType='next'
          blurOnSubmit={false}
          onSubmitEditing={() => clubMembersRef.current?.focus()}
          {...createClub.getTextInputProps('accountNumber')}
          />
        <InputField 
          ref={clubMembersRef}
          placeholder='모임 회원' 
          error={createClub.errors.clubMembers}
          touched={createClub.touched.clubMembers}
          onSubmitEditing={handleSubmit}
          {...createClub.getTextInputProps('clubMembers')}
        />
      </View>
      <CustomButton 
        label='회원가입' 
        onPress={() => navigation.navigate(clubNavigations.NOTIFICATION)}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  inputContainer: {
    gap: 20,
    marginBottom: 30,
  }
});

export default ClubCreateScreen;