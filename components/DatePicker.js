import React, { useState } from "react";
import { Pressable, StyleSheet, Dimensions} from 'react-native';
import { Text, View } from '../components/Themed';
import DateTimePicker from '@react-native-community/datetimepicker';
import { style } from "d3";
 
export default function DatePicker() {
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
 
  function showDatePicker() {
    setDatePicker(true);
  };
 
  function onDateSelected(event, value) {
    setDate(value);
    setDatePicker(false);
  };
 
  return (
    <View style={{flexDirection:"row", marginVertical:20}}>
        <View style={style.sidePressable}>
            <Pressable
              onPress={() => (setDate(new Date(date.getTime() - (24 * 60 * 60 * 1000))))}
              style={({ pressed }) => [
                {
                backgroundColor: pressed
                  ? 'rgb(210, 230, 255)'
                  : 'white'
                },
                styles.wrapperCustom
                ]}>
              <Text style={styles.text}>
                {"<"}
              </Text>
            </Pressable>
        </View>

        <View style={style.pressable}>
        {datePicker && (
          <DateTimePicker
            value={date}
            mode={'date'}
            display={'default'}
            is24Hour={true}
            onChange={onDateSelected}
          />
        )}
 
        {!datePicker && (
          <View>
            <Pressable
            onPress={showDatePicker}
            style={({ pressed }) => [
            {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
            },
            styles.wrapperCustom
            ]}>
              <Text style={styles.mainText}>
                {date.toDateString()}
              </Text>
            </Pressable>
          </View>
        )}
        </View>
        
        <View style={style.sidePressable}>
          <Pressable
              onPress={() => (setDate(new Date(date.getTime() + (24 * 60 * 60 * 1000))))}            
              style={({ pressed }) => [
                {
                backgroundColor: pressed
                  ? 'rgb(210, 230, 255)'
                  : 'white'
                },
                styles.wrapperCustom
                ]}>
              <Text style={styles.text}>
                {">"}
              </Text>
            </Pressable>
        </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  pressable:{
    alignItems: 'center',
    flexGrow: 2,
    justifyContent: 'center',
  },
  sidePressable:{
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText:{
    width: (Dimensions.get("window").width-135),
    fontSize: 20,
    fontFamily: 'samsung-sans-bold',
    justifyContent: 'center',
    textAlign: 'center'
  },
  text: {
    width: 50,
    fontSize: 20,
    fontFamily: 'samsung-sans-bold',
    justifyContent: 'center',
    textAlign: 'center'
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
});