import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function SocialStat(props) {
    let PrevWin = props.prevwin;
    let Streak = props.streak;
    let TotalSteps = props.totalsteps;

    return(
        <View style={{flexDirection:"row"}}>
            <View style={{flex:1}}>
                <Text style={styles.textleft}>
                    prev winner
                </Text>
                <Text style={styles.textleft}>
                    streak
                </Text>
                <Text style={styles.textleft}>
                    total steps
                </Text>
            </View>
            <View style={{flex:1}}>
                <Text style={styles.textright}>
                    {PrevWin}
                </Text>
                <Text style={styles.textright}>
                    {Streak} days
                </Text>
                <Text style={styles.textright}>
                    {TotalSteps}
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