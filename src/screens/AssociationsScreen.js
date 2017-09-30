import React from 'react'
import {View, StyleSheet,Text, TouchableOpacity, ScrollView} from 'react-native'
import { Container, Content, Spinner, Icon } from 'native-base'
import SearchBar from 'react-native-searchbar'
import DeviceInfo from 'react-native-device-info'

import { Header, AssociationsList, SimpleFab, Modal } from '../components'
import { fetchAssociations } from '../firebase/firebase'
import colors from '../constants/colors'
import RequestAssociationForm from "../components/RequestAssociationForm";
import {rootRef} from "../firebase/firebase";

const MODAL_TITLE_TEXT = '¿Conóces una asociación y no aparece en el listado?';
const MODAL_TEXT = 'Dejanos los datos de la asociación y tras validarlos la añadiremos';

class AssociationsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.searchBar = Object;

    this.state = {
      modalVisibel: false,
      associations: [],
      isDataLoaded: false,
      associationsCopy: []
    }
  }

  componentWillMount() {
    fetchAssociations((result) => {
      if(result) {
        this.setState({
          associations: result,
          isDataLoaded: true,
          associationsCopy: result
        })
      }
    });
  }

  onClose() {
    this.setState({modalVisible: false})
  }

  onSubmit(form) {
    rootRef.child('requestAssociation').push({
      name: form.name,
      city: form.city,
      contact: form.contact,
      userEmail: form.userEmail,
      time: Date.now(),
      deviceId: DeviceInfo.getUniqueID(),
    });
    this.onClose();
  }

  render() {
    return (
      <Container>
        <Header
          style={{elevation: 1}}
          title="Asociaciones"
          left={{
            onPress: () => this.props.navigation.navigate("DrawerOpen"),
            icon: 'menu'
          }}
          right={{
            icon: "search",
            onPress: () => (this.searchBar) ? this.searchBar.show() : null
          }}
        />
        <SearchBar
          ref={(ref) => this.searchBar = ref}
          data={this.state.associationsCopy}
          handleResults={(results) => this.setState({ associations: results })}
          onHide={() => {this.setState({ associations: this.state.associationsCopy })}}
          allDataOnEmptySearch
          placeholder="Buscar asociación"
        />
        <Content>
          <View style={styles.container}>
            {
              (this.state.isDataLoaded) ?
                <AssociationsList
                  navigation={this.props.navigation}
                  associations={this.state.associations}
                />
                : <Spinner color="red" />
            }
          </View>
        </Content>
        <SimpleFab
          icon="help"
          backgroundColor={colors.secondary}
          onPress={() => this.setState({modalVisible: true})}
        />
        <View>
          <Modal
            onBackButtonPress={this.onClose.bind(this)}
            onBackdropPress={this.onClose.bind(this)}
            isVisible={this.state.modalVisible}
          >
            <TouchableOpacity style={styles.closeButton} onPress={() => this.onClose()}>
              <Icon style={{color: "#828282"}} name="close" />
            </TouchableOpacity>
            <ScrollView>

              <Text style={styles.modalTitleText}>{MODAL_TITLE_TEXT}</Text>
              <Text style={styles.modalText}>{MODAL_TEXT}</Text>
              <RequestAssociationForm
                onSubmit={this.onSubmit.bind(this)}
              />
            </ScrollView>
          </Modal>
        </View>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  modalTitleText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  modalText: {
    textAlign: 'center',

  },
  closeButton: {
    alignSelf: "flex-end",
    // marginTop: -14,
    // marginRight: -8,
  },
});

export default AssociationsScreen