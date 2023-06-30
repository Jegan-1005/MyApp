//import package
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

//import utils
import {Colors} from '../utils/colors';

const Button = props => {
  return (
    <View style={{marginBottom: 20}}>
      <View style={{height: 50, backgroundColor: 'red'}}>
        <TouchableOpacity style={styles.btn} onPress={props.onPress}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: Colors.white,
            }}>
            {props.name}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: Colors.themeRed,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Button;
