import React, { useState } from 'react';
import { StyleSheet, Button, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from "react-datepicker";

const dimensions = Dimensions.get("window");

export default function DatePickers() {
  const [startDate, setStartDate] = useState(new Date());
  const tomorrow = new Date(new Date().getTime() + (24 * 60 * 60 * 1000))
  const yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000))
  return (
    <View style={styles.container}>
      <View style={styles.fixToText}>
        <Button  onPress={() => (setStartDate(yesterday))}  title="<"  color="#FFFFFF"/>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <Button  onPress={() => (setStartDate(tomorrow))}  title=">"  color="#FFFFFF"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  left:{
    flex: 1,
    width: dimensions.width*0.2,
    height: 100,
  },
  center:{
    flex: 1,
    width: dimensions.width*0.6,
    height: 100,
  },
  right:{
    flex: 1,
    width: dimensions.width*0.2,
    height: 100,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});