import React from 'react'
import {
  View,
  StyleSheet,
  Image,
} from 'react-native'
import {
  Container,
  Content,
  Button,
  Right,
  Icon,
  H3,
  Spinner,
  Footer
} from 'native-base'

import {
  Header,
  HomeButton,
} from '../components'
import colors from '../constants/colors'

export class HomeScreen extends React.Component {

  componentWillMount() {
    this.props.onAuthStateChanged();
  }

  renderRightInHeader() {
    if(!this.props.isLoggedIn) {
      return {
        onPress: () => this.props.navigation.navigate("Auth"),
        icon: "log-in",
        text: 'Únete'
      };
    }
    return {
      onPress: () => this.props.navigation.navigate("Profile"),
      icon: 'person',
      text: 'Hola ' + this.props.user.displayName,
    }
  }

  render() {
    return (

      <Container>
        <Header
          title="XMI - Inicio"
          left={{onPress: () => this.props.navigation.navigate("DrawerOpen"), icon: "menu"}}
          right={this.renderRightInHeader()}
        />
        <Content style={styles.content}>

          <View style={styles.logoContainer}>
            <Image
              source={require('../../assets/images/xmilogo.png')}
              style={styles.logoImage} />
          </View>
          <View>
            <HomeButton
              icon="hand"
              onPress={() => this.props.navigation.navigate("Association")}
            >
              Asociaciones
            </HomeButton>
            <HomeButton
              icon="woman"
              onPress={() => this.props.navigation.navigate("Testimony")}
            >
              Testimonios
            </HomeButton>

            <HomeButton
              icon="chatbubbles"
              onPress={() => this.props.navigation.navigate("Chat")}
            >
              Conversaciones
            </HomeButton>
            <HomeButton
              icon="contacts"
              onPress={() => this.props.navigation.navigate("AlasVivas")}
            >
              Alas Vivas
            </HomeButton>
            </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "white"
  },
  logoContainer: {
    alignItems: "center",
    margin: 8,
  },
  logoImage: {
    height: 125,
    width: 125,
  },
  greetingsText: {
    fontSize: 28,
    color: "#743e65",
    margin: 8,
  },
  button: {
    alignSelf: "flex-end",
    backgroundColor: colors.secondary
  },
});

export default HomeScreen