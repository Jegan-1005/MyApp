//import package
import React, {forwardRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useNavigation} from '@react-navigation/native';

// import components
import Button from '../../../components/button';

//import utils
import {Colors} from '../../../utils/colors';

const LoginSheet = forwardRef((props, ref) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <RBSheet
        ref={ref}
        height={650}
        animationType="slide"
        closeOnDragDown={true}
        customStyles={{
          container: {
            borderRadius: 10,
          },
        }}>
        {/* <Image source={Images.close} style={{width: 20, height: 20}} /> */}
        <View style={{marginTop: 80}}>
          <Text style={styles.h1}>Ready to watch ?</Text>
          <Text style={styles.h2}>
            Enter your email to create or sign in to your account
          </Text>
        </View>

        <View style={{marginHorizontal: 10}}>
          <TextInput
            mode="outlined"
            label="Email"
            outlineColor={Colors.darkGray}
            activeOutlineColor={Colors.darkGray}
          />
          <View style={{marginTop: 20}}>
            <Button
              name="GET STARTED"
              onPress={() => {
                navigation.navigate('Login');
              }}
            />
          </View>
        </View>
        {/* input ---button */}
      </RBSheet>
    </View>
  );
});
const styles = StyleSheet.create({
  h1: {
    color: Colors.black,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  h2: {
    color: Colors.darkGray,
    textAlign: 'center',
    fontSize: 15,
    marginHorizontal: 10,
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default LoginSheet;
