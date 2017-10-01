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
import {TutorialSwiper} from "../components/index";

export class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showTutorial: false,
    }
  }

  async componentWillMount() {
    this.props.onAuthStateChanged();
    try {
      const value = await AsyncStorage.getItem('@XMIStore:showTutorial');
      if (value !== null){
        // We have data!!
        this.setState({showTutorial: value})
      } else {
        this.setState({showTutorial: true})
      }
    } catch (error) {
      // Error retrieving data
      this.setState({showTutorial: true})
    }
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

  async onCloseTutorial() {
    try {
      await AsyncStorage.setItem('@XMIStore:showTutorial', false);
      this.setState({showTutorial: false})
    } catch (error) {
      // Error saving data
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