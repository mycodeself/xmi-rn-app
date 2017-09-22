import { StackNavigator } from 'react-navigation'
import {
  AssociationsScreen,
  AssociationDetailScreen,
  WebViewScreen
} from '../screens'


const AssociationStack = StackNavigator({
  Association: {
    screen: AssociationsScreen
  },
  AssociationDetail: {
    screen: AssociationDetailScreen
  },
  WebView: {
    screen: WebViewScreen
  }
}, {
  headerMode: 'none'
});

export default AssociationStack