import React from 'react'
import {Text, ListView} from 'react-native'
import {List, ListItem} from 'native-base'
import AutoScroll from 'react-native-auto-scroll'

const TopicMessages = (props) => {
  let scrollView = null;
  return (
    <AutoScroll ref={ref => scrollView = ref}>
      {props.messages.map(msg => {
        return <Text>{msg.text}</Text>
      })}
    </AutoScroll>
  )

};

// const TopicMessages = (props) => {
//   let listView = listViewHeight = null;
//   return (
//     <List
//       ref={ref => console.log(ref)}
//       dataArray={props.messages}
//       renderRow={(message) =>
//         <ListItem>
//           <Text>{message.text}</Text>
//         </ListItem>
//       }
//     />
//   );
// };

export default TopicMessages