import { View, Text, Image, StyleSheet, SafeAreaView, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import PushNotification from 'react-native-push-notification'
import ListAlarms from './components/ListAlarms'
import TimePicker from './components/TimePicker'



const App = () => {

    useEffect(() => {
        createChannels();
    }, []);

    const createChannels = () => {
        PushNotification.createChannel({
            channelId: "test-channel",
            channelName: "Test Channel",
            channelDescription: "A channel to categorise your notifications",
        });
    };
    


    const handleNotification = () => {

        PushNotification.cancelAllLocalNotifications();

        
        PushNotification.localNotificationSchedule({
            channelId: "test-channel",
            title: "Alarm Ringing",

            message: "Message Here",
            actions: ["Accept", "Reject"],
            date: new Date(Date.now() + 100),
            allowWhileIdle: true,
            invokeApp: false,

            //repeatTime: 2,
        });
    
        PushNotification.configure({
            onAction: function (notification) {
                if (notification.action === 'Accept') {
                    console.log('Alarm Snoozed');
                }
                else if (notification.action === 'Reject') {
                    console.log('Alarm Stoped');
                    //PushNotification.cancelAllLocalNotifications();
                }
                else {
                    console.log('Notification opened');
                }
            },
            actions: ["Accept", "Reject"],
        });
    }

    return (
        <View style={styles.mainContainer}>
            <Text style={styles.heading}>ALARM</Text>
            <Pressable
                style={styles.buttonStyle}
                onPress={() => {
                    handleNotification(),
                        console.log("Schedule Notification")
                }}>
                <Image
                    source={require("./sourcefile/imgs/alarm-clock.png")}
                    style={{ height: 60, width: 60 }}
                />
            </Pressable>

            <SafeAreaView style={styles.listAlarms}>
                <ListAlarms />
            </SafeAreaView>
            <View style={styles.timePicker}>
                <TimePicker />
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center'
    },
    heading: {
        fontSize: 25,
        padding: 20,
        color: 'black'
    },
    timePicker: {
        paddingTop: "10%",
        width: "50%",
        bottom: 20,
    },
    listAlarms: {
        flex: 1,
        width: "100%",
    },

    buttonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 25,
    },

})

export default App;
