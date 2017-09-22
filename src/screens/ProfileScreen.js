import React from 'react'
import {View, Text, TouchableOpacity,StyleSheet, PermissionsAndroid} from 'react-native'
import {Thumbnail, Container, Content } from 'native-base'
import ImagePicker from 'react-native-image-crop-picker';

import colors from '../constants/colors'
import {
  Button,
  Header,
  TextLink
} from "../components/index";

class ProfileScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      avatar: {
        uri: (props.user.photoURL) ? props.user.photoURL : null,
      }

    }
  }

  componentWillMount() {
    if(!this.props.isLoggedIn){
      this.props.navigation.navigate("Auth");
    }
  }


  openPickerImage() {
    ImagePicker.openPicker({
      width: 150,
      height: 150,
      cropping: true,
      cropperCircleOverlay: true,
      cropperActiveWidgetColor: colors.primary,
      cropperStatusBarColor: colors.primary,
      cropperToolbarColor: colors.primary,
      hideBottomControls: true,
      cropperTintColor: "white"
    }).then(image => {
      this.setState({
        avatar: {
          uri: image.path,
          mime: image.mime,
        }
      })
    });
  }

  renderAvatar() {
    const uri = this.state.avatar.uri;
    const source = (uri) ? {uri: uri} : require('../../assets/images/default-avatar.png');
    return (
      <TouchableOpacity onPress={this.openPickerImage.bind(this)}>
        <Thumbnail
          large
          circular
          source={source}
          style={{borderWidth: 1, borderColor: colors.secondary}}
        />
      </TouchableOpacity>
    )
  }

  onSave() {
    // update avatar if its not null and has changed
    if(this.state.avatar !== null
      && this.state.avatar !== this.props.user.photoURL
    ) {
      this.props.pushAvatar(this.state.avatar, this.props.user);
    }


  }

  onLogOut() {
    this.props.logOut();
    this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <Container>
        <Header
          back
          title="Perfil"
          left={{onPress: () => this.props.navigation.goBack(), icon: 'arrow-back' }}
        />
        <Content style={styles.content}>
          <View style={styles.container}>
            <Text style={styles.label}>Nombre:
              <Text style={styles.text}> {this.props.user.displayName}</Text>
            </Text>
            <Text style={styles.label}>Email:
              <Text style={styles.text}> {this.props.user.email}</Text>
            </Text>
            <View style={styles.avatarContainer}>
              {this.renderAvatar()}
              <Text accessible style={styles.helpText}>Pulsa la imagen para cambiar tu avatar</Text>
            </View>
            <Button block onPress={() => this.onSave()}>
              Guardar cambios
            </Button>
            <TextLink
              color="red" onPress={() => this.onLogOut()}
            >
              Cerrar sesión
            </TextLink>
          </View>
        </Content>
      </Container>

    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: "black"
  },
  label: {
    fontSize: 18,
    marginTop: 16,
  },
  content: {
    backgroundColor: "white"
  },
  container: {
    margin: 24,
  },
  avatarContainer: {
    marginTop: 30,
    marginBottom: 20,
    alignItems: "center",
  },
  helpText: {
    marginTop: 4,
    fontSize: 12,
  }
});

export default ProfileScreen