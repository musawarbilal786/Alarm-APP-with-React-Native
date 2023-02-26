import React from 'react'
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native'
import { ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { deleteAlarm } from "../actions/alarms";
import PushNotification from 'react-native-push-notification';

const ListAlarms = (props) => {
  const keyExtractor = (item, index) => index.toString();
  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title style={styles.titleStyle}>{item.time.toString()}</ListItem.Title>
            <ListItem.Subtitle>{item.date.toString()}</ListItem.Subtitle>
          </ListItem.Content>
          <Pressable
            style={styles.buttonStyle}
            onPress={() => {
              console.log(item.value);
              props.delete(item.value);
              PushNotification.cancelLocalNotification(item.alarmNotifData.id);
              console.log("Alarm Deleted with ID: " + item.alarmNotifData.id);
            }}>
            <Text style={styles.buttonText}>REMOVE</Text>

          </Pressable>
        </ListItem>
      </View>
    );
  }
  return (
    <FlatList
      keyExtractor={keyExtractor}
      data={props.alarms}
      renderItem={renderItem} />
  );
}



const styles = StyleSheet.create({
  titleStyle: {
    fontWeight: 'bold',
    fontSize: 23
  },
  container:{
  },
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    elevation: 20,
    padding: 10,
  },
  buttonText: {
    fontSize: 15,
    //fontWeight:'bold',
    color: 'white'
  }
});

const mapStateToProps = state => {
  return {
    alarms: state.alarms.alarms,
  };
}
const mapDispatchToProps = dispatch => {
  return {
    delete: value => {
      dispatch(deleteAlarm(value));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAlarms);