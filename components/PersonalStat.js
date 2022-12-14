import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function Personal(props) {
    let Steps = props.steps;
    let CurStreak = props.streak;
    let TimeActive = props.timeactive;

    return(
        <View style={{flexDirection:"row"}}>
            <View style={{flex:1}}>
                <Text style={styles.textleft}>
                    today steps
                </Text>
                <Text style={styles.textleft}>
                    goal streak
                </Text>
                <Text style={styles.textleft}>
                    time active
                </Text>
            </View>
            <View style={{flex:1}}>
                <Text style={styles.textright}>
                    {Steps}
                </Text>
                <Text style={styles.textright}>
                    {CurStreak} days
                </Text>
                <Text style={styles.textright}>
                    {TimeActive}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textleft: {
        fontSize: 25,
        fontFamily: 'samsung-sans-medium',
        justifyContent: 'flex-start',
        textAlign: "left",
        marginLeft: 45,
    },
    textright: {
        fontSize: 25,
        fontFamily: 'samsung-sans-bold',
        justifyContent: 'flex-end',
        textAlign: "right",
        marginRight: 55
    }
});