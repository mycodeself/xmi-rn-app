import React from 'react'
import {View, StyleSheet} from 'react-native'
import { Container, Content, Spinner } from 'native-base'
import SearchBar from 'react-native-searchbar'

import { Header, AssociationsList } from '../components'
import { fetchAssociations } from '../firebase/firebase'
import colors from '../constants/colors'

class AssociationsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.searchBar = Object;

    this.state = {
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
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  }
});

export default AssociationsScreen