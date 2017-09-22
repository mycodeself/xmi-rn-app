import React from 'react'
import {Text,View,StyleSheet, TouchableOpacity} from 'react-native'
import {List, ListItem, Icon} from 'native-base'
import Collapsible from 'react-native-collapsible';

const NewsList = (props) => (
  <List
    dataArray={props.news}
    renderRow={(news) => {
      return <NewsItem news={news}/>
    }}
    />
);

class NewsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false}
  }
  render() {
    return (
      <ListItem style={styles.listItem}>
        <Collapsible
          collapsed={!this.state.expanded}
          collapsedHeight={200}
          duration={400}
        >
          <View style={styles.container}>
            <Text style={styles.titleText}>{this.props.news.title}</Text>
            <Text style={styles.timeText}>{this.props.news.time}</Text>
            <Text style={styles.newsText}>{this.props.news.text}</Text>
          </View>
        </Collapsible>
        <TouchableOpacity
          underlayColor="rgba(230, 230, 230, 0.5)"
          onPress={() => {this.setState({expanded: !this.state.expanded})}}
          style={styles.arrowTouchable}
        >
            {(this.state.expanded)
              ? <Icon style={styles.arrowIcon} name='ios-arrow-up-outline' />
              : <Icon style={styles.arrowIcon} name='ios-arrow-down-outline' />}
        </TouchableOpacity>
      </ListItem>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    marginLeft: 0,
    flex: 1,
    flexDirection: "column"
  },
  container: {
    marginLeft: 8,

  },
  newsText: {
    color: "#2e2e2e"
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#505050',
  },
  timeText: {
    marginBottom: 6,
    fontSize: 10,
    alignSelf: "flex-end"
  },
  arrowTouchable: {
    margin: 0,
  },
  arrowIcon: {
    color: '#505050'
  }
});

export default NewsList
