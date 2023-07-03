//import package
import React, { Fragment, useRef, useState } from "react";
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  Dimensions,
} from "react-native";

//import utils
import { slides } from "../../utils/helperFunc";
import { Colors } from "../../utils/colors";

//import component
import Footer from "./onBoardfooter";
import Header from "../../components/header";
import { fonts } from "../../utils/fonts";

const Onboarding = (props) => {
  const { width, height } = Dimensions.get("window");

  //state
  const ref = useRef();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  //function
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const Slide = ({ item }) => {
    return (
      <View style={{ alignItems: "center", backgroundColor: Colors.black }}>
        <Image
          source={item?.image}
          style={{
            height: "75%",
            width,
            resizeMode: "cover",
            borderRadius: 10,
          }}
        />
        <View style={{ marginTop: 10 }}>
          <Text adjustsFontSizeToFit={true} style={styles.title}>
            {item?.title}
          </Text>
          <Text style={styles.subtitle}>{item?.subtitle}</Text>
        </View>
      </View>
    );
  };
  return (
    <Fragment>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle={"light-content"} />
        {/* <Header /> */}
        <FlatList
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          contentContainerStyle={{ height: height * 0.75 }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={slides}
          pagingEnabled
          renderItem={({ item }) => <Slide item={item} />}
        />
        <Footer
          slides={slides}
          currentSlideIndex={currentSlideIndex}
          goToNextSlide={goToNextSlide}
          styles={styles}
          height={height}
        />
      </SafeAreaView>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: Colors.white,
    fontSize: 13,
    marginTop: 10,
    textAlign: "center",
    lineHeight: 23,
  },
  title: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    textAlignVertical: "center",
    textAlign: "center",
    fontFamily: fonts.extraIlatic,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },
  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    flex: 1,
    height: 50,
    borderRadius: 5,
    backgroundColor: Colors.themeRed,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default Onboarding;
