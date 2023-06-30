// import package
import React, {Fragment} from 'react';
import {Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';

//import components
import Header from '../../components/header';
import Button from '../../components/button';

//import utils
import {Colors} from '../../utils/colors';

const Login = props => {
  return (
    <Fragment>
      <Header logo={true} Text1={'HELP'} Text2={'LOGIN IN'} />
      <View style={{marginHorizontal: 50, marginTop: 20}}>
        <Text
          style={{
            color: Colors.black,
            textAlign: 'left',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Ready to experience unlimited TV shows & movies ?
        </Text>
      </View>
      <View style={{marginHorizontal: 50, marginTop: 10}}>
        <Text
          style={{
            color: Colors.black,
            textAlign: 'left',
            fontSize: 20,
          }}>
          Create an account to learn more about Netflix
        </Text>
      </View>
      <View style={{marginHorizontal: 20, marginTop: 10}}>
        <TextInput
          mode="outlined"
          label="Email"
          outlineColor={Colors.darkGray}
          activeOutlineColor={Colors.darkGray}
        />
        <TextInput
          mode="outlined"
          label="Password"
          outlineColor={Colors.darkGray}
          secureTextEntry={true}
          activeOutlineColor={Colors.darkGray}
        />
        <View style={{marginTop: 20}}>
          <Button
            name="CONTINUE"
            onPress={() => {
              // navigation.navigate('Login');
            }}
          />
        </View>
      </View>
    </Fragment>
  );
};

export default Login;
