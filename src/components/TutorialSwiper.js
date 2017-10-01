import React from 'react'
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native'
import {Icon, Thumbnail} from 'native-base'
import Swiper from 'react-native-swiper';
import {TutorialTexts} from "../constants/texts";


const SwiperView = (props) => {
  const borderRadius = (props.noCircular) ? 0 : 150/2;
  return (
    <View style={[styles.view, {backgroundColor: props.backgroundColor}]}>
      <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={() => props.onClosePress()}>
        <Icon style={styles.iconClose} name="close-circle" />
      </TouchableOpacity>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: -100,}}>
        <Text style={styles.titleText}>{props.titleText}</Text>
        <Thumbnail
          large
          source={props.thumbnail}
          style={[styles.thumbnail, {borderRadius: borderRadius}]}
        />
        <Text style={styles.text}>{props.children}</Text>
      </View>
    </View>
  )
};

class TutorialSwiper extends React.Component {
  render() {
    return (
      <Swiper
        style={styles.swiper}
        activeDotColor="#ebebeb"
        loop={false}
        showsButtons={true}
        nextButton={<Icon style={styles.controlButtons} name="ios-arrow-forward" />}
        prevButton={<Icon style={styles.controlButtons} name="ios-arrow-back" />}
      >
        <SwiperView
          onClosePress={() => this.props.onClose()}
          titleText="Bienvenida"
          backgroundColor="#E0B8C4"
          thumbnail={require('../../assets/images/xmilogo.png')}
          noCircular
        >
          {TutorialTexts.welcome}
        </SwiperView>
        <SwiperView
          onClosePress={() => this.props.onClose()}
          backgroundColor="#E0B8C4"
          titleText="Consulta asociaciones"
          thumbnail={require('../../assets/images/associationscreen.png')}
        >
          {TutorialTexts.associations}
        </SwiperView>
        <SwiperView
          onClosePress={() => this.props.onClose()}
          backgroundColor="#E0B8C4"
          titleText="Infórmate con nuestros recursos"
          thumbnail={require('../../assets/images/resources-screen.png')}
        >
          {TutorialTexts.resources}
        </SwiperView>
        <SwiperView
          onClosePress={() => this.props.onClose()}
          backgroundColor="#E0B8C4"
          titleText="Ayuda y dejate ayudar en nuestras conversaciones"
          thumbnail={require('../../assets/images/forumscreen.png')}
        >
          {TutorialTexts.forum}
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
    alignItems: 'center',
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 52,
  },
  text: {
    color: "#F5F5F5",
    marginTop: 18,
    textAlign: 'center',
    margin: 8,
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
  },
  iconClose: {
    fontSize: 64,
    color: '#f5dfe7',
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 4,
  }
});

export default TutorialSwiper