import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function Personal() {
    let Steps = 5000;
    let CurStreak = 2;
    let TimeActive = '1H 20 M';

    return(
        <Text style={styles.text}>
            Today Steps : {Steps}{"\n"}
            Goal Streak : {CurStreak} days{"\n"}
            Time Active : {TimeActive}{"\n"}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
});