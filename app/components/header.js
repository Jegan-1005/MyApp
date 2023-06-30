//import package
import React, {Fragment} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';

//import utils
import {Colors} from '../utils/colors';
import {Images} from '../utils/images';

const Header = props => {
  return (
    <Fragment>
      <View style={{flexDirection: 'row', marginHorizontal: 15}}>
        {props.logo == true && <Images.logo width={80} />}
        <View
          style={{
            flex: 1,
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity>
            <Text
              style={{
                color: Colors.black,
                marginRight: 10,
                fontWeight: '900',
              }}>
              {props.Text1}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{color: Colors.black, fontWeight: '900'}}>
              {props.Text2}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Fragment>
  );
};

export default Header;
