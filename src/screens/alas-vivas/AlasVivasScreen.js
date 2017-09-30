import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {
  Container,
  Content,
  Card,
  CardItem,
  H1
} from 'native-base'

import { Header } from '../../components/index'
import NewsList from "../../components/NewsList";

const testNews = [
  {
    title: 'Las víctimas de violencia de género, rehenes de sus maltratadores en caso de desahucio',
    text: 'Maecenas ac pretium libero. Integer elementum augue a urna aliquam, et bibendum dui elementum. Aenean ipsum massa, faucibus in placerat sit amet, imperdiet et ligula. Pellentesque feugiat neque eget magna condimentum congue. Mauris dapibus vel mauris eget eleifend. Nullam sit amet dignissim massa. \nMaecenas suscipit venenatis nibh, non consequat ex tempor vitae. Quisque eu lectus commodo velit mattis viverra.' +
    'Curabitur placerat, ipsum quis blandit euismod, enim ex rhoncus elit, pulvinar consectetur risus urna in lacus. Mauris facilisis posuere ultrices. Curabitur leo ante, sagittis vitae congue vel, accumsan eget elit. Fusce vel libero nisl. Praesent ut lectus consequat, tristique urna in, bibendum enim. Duis vulputate eu enim ut maximus.\nInterdum et malesuada fames ac ante ipsum primis in faucibus. Donec bibendum auctor ante, non mattis velit maximus sit amet. Proin eget malesuada eros, vitae varius orci.',
    time: '17/09/2017'
  },
  {
    title: 'La violencia que no cesa',
    text: 'Maecenas ac pretium libero. Integer elementum augue a urna aliquam, et bibendum dui elementum. Aenean ipsum massa, faucibus in placerat sit amet, imperdiet et ligula. Pellentesque feugiat neque eget magna condimentum congue. Mauris dapibus vel mauris eget eleifend. Nullam sit amet dignissim massa. \nMaecenas suscipit venenatis nibh, non consequat ex tempor vitae. Quisque eu lectus commodo velit mattis viverra.' +
    'Curabitur placerat, ipsum quis blandit euismod, enim ex rhoncus elit, pulvinar consectetur risus urna in lacus. Mauris facilisis posuere ultrices. Curabitur leo ante, sagittis vitae congue vel, accumsan eget elit. Fusce vel libero nisl. Praesent ut lectus consequat, tristique urna in, bibendum enim. Duis vulputate eu enim ut maximus.\nInterdum et malesuada fames ac ante ipsum primis in faucibus. Donec bibendum auctor ante, non mattis velit maximus sit amet. Proin eget malesuada eros, vitae varius orci.',
    time: '17/09/2017'
  },
  {
    title: '\n' +
    'La violencia que no cesa. Los videojuegos sexistas favorecen actitudes tolerantes hacia la violencia de género',
    text: '',
    time: '17/09/2017'
  },
  {
    title: 'Las víctimas de violencia de género, rehenes de sus maltratadores en caso de desahucio',
    text: '',
    time: '17/09/2017'
  },
];

class AlasVivasScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header
          title="Alas Vivas"
          left={{onPress: () => this.props.navigation.navigate("DrawerOpen"), icon: 'menu'}}
        />
        <Content style={{backgroundColor: "white"}} padder>
          <Card>
            <CardItem>
              <View>
              <Text style={{textAlign: 'center'}}>
                Alas Vivas es una asociación contra la violencia de género y violencia
                doméstica de la provincia de Alicante, que colabora con esta aplicación aportando,
                entre otras cosas, diversa información y asistencia psicosocial contra la violencia.
                Si necesitas ayuda no dudes en ir a "HABLA CON ESPECIALISTAS".
              </Text>
              </View>
            </CardItem>
          </Card>
          <View style={styles.newsContainer}>
            <H1>
              Noticias
            </H1>
            <NewsList news={testNews}/>
          </View>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  newsContainer: {
    marginTop: 16,
  }
});

export default AlasVivasScreen