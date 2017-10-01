import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  AsyncStorage
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
import {TutorialSwiper} from "../components/index";

export class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showTutorial: false,
    }
  }

  componentWillMount() {
    this.props.onAuthStateChanged();
    this.loadStorage();
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

  async loadStorage() {
    try {
      const value = await AsyncStorage.getItem('@XMIStore:showTutorial');
      if ('false' === value){
        this.setState({showTutorial: false})
      } else {
        this.setState({showTutorial: true})
      }
    } catch (error) {
      this.setState({showTutorial: true})
    }
  }

  async onCloseTutorial() {
    try {
      await AsyncStorage.setItem('@XMIStore:showTutorial', 'false');
      this.setState({showTutorial: false})
    } catch (error) {
      // Error saving data
      console.log("###############################ERROR")
      console.log(error)
      console.log("###############################")
    }
  }

  render() {
    if(this.state.showTutorial) return <TutorialSwiper onClose={() => {this.onCloseTutorial()}} />;

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
              onPress={() => this.props.navigation.navigate("Resources")}
            >
              Recursos
            </HomeButton>

            <HomeButton
              icon="chatbubbles"
              onPress={() => this.props.navigation.navigate("Chat")}
            >
              Conversaciones
            </HomeButton>

            {
              (this.props.isLoggedIn)
                ?
                <HomeButton
                  icon="person"
                  onPress={() => this.props.navigation.navigate("Profile")}
                >
                  Perfil
                </HomeButton>
                :
                <HomeButton
                  icon="log-in"
                  onPress={() => this.props.navigation.navigate("Auth")}
                >
                  Únete
                </HomeButton>
            }

            </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: colors.contentBackgroundColor
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