//import package
import React, {Fragment, useRef} from 'react';
import {View} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

//import components
import Button from '../../components/button';

//import utils
import {Colors} from '../../utils/colors';
import LoginSheet from './Sheets/LoginSheet';

const Footer = props => {
  //props
  const {slides, currentSlideIndex, styles, height} = props;

  //state
  const refRBSheet = useRef();

  return (
    <Fragment>
      <LoginSheet ref={refRBSheet} />
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          backgroundColor: 'black',
        }}>
        {/* Indicator container */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: Colors.white,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <Button
          name="GET STARTED"
          onPress={() => {
            refRBSheet.current.open();
          }}
        />
      </View>
    </Fragment>
  );
};

export default Footer;
