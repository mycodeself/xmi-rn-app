import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {Icon, Thumbnail} from 'native-base'
import Swiper from 'react-native-swiper';
import {TutorialTexts} from "../constants/texts";


const SwiperView = (props) => {
  const borderRadius = (props.noCircular) ? 0 : 150/2;
  return (
    <View style={[styles.view, {backgroundColor: props.backgroundColor}]}>
      <Text style={styles.titleText}>{props.titleText}</Text>
      <Thumbnail
        large
        source={props.thumbnail}
        style={[styles.thumbnail, {borderRadius: borderRadius}]}
      />
      <Text style={styles.text}>{props.children}</Text>
    </View>
  )
};

class TutorialSwiper extends React.Component {
  render() {
    return (
      <Swiper
        style={styles.swiper}
        activeDotColor="#ebebeb"
        showsButtons={true}
        nextButton={<Icon style={styles.controlButtons} name="ios-arrow-forward" />}
        prevButton={<Icon style={styles.controlButtons} name="ios-arrow-back" />}
      >
        <SwiperView
          titleText="Bienvenida"
          backgroundColor="#e8b9c7"
          thumbnail={require('../../assets/images/xmilogo.png')}
          noCircular
        >
          {TutorialTexts.welcome}
        </SwiperView>
        <SwiperView
          backgroundColor="#e8b9c7"
          titleText="Consulta asociaciones"
        >
          {TutorialTexts.associations}
        </SwiperView>
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  swiper: {
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 52,
    // marginTop: -48,
  },
  text: {
    color: "#F5F5F5",
    marginTop: 18,
    textAlign: 'center',
  },
  thumbnail: {
    marginTop: -26,
    width: 150,
    height: 150,
    borderRadius: 150/2,
  },
  controlButtons: {
    color: "#ebebeb",
    fontSize: 46
  }
});

export default TutorialSwiper