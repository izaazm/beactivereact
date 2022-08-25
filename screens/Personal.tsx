import { StyleSheet, Dimensions } from 'react-native';

import { Text, View, ScrollView } from '../components/Themed';
import DatePicker from '../components/DatePicker';
import PersonalStat from '../components/PersonalStat';
import BarChart from '../components/Test';
import ProgressBar from '../components/ProgressBar';

export default function Personal() {
  const data = [
    { label: '12AM', value: 0 },
    { label: '1AM', value: 0 },
    { label: '2AM', value: 0 },
    { label: '3AM', value: 0 },
    { label: '4AM', value: 0 },
    { label: '5AM', value: 0 },
    { label: '6AM', value: 650 },
    { label: '7AM', value: 980 },
    { label: '8AM', value: 123 },
    { label: '9AM', value: 0 },
    { label: '10AM', value: 0 },
    { label: '11AM', value: 643 },
    { label: '12PM', value: 500 },
    { label: '1PM', value: 312 },
    { label: '2PM', value: 424 },
    { label: '3PM', value: 745 },
    { label: '4PM', value: 0 },
    { label: '5PM', value: 0 },
    { label: '6PM', value: 650 },
    { label: '7PM', value: 980 },
    { label: '8PM', value: 123 },
    { label: '9PM', value: 0 },
    { label: '10PM', value: 0 },
    { label: '11PM', value: 0 },
  ]

  let stepsToday = 5500
  let CurStreak = 2
  let TimeActive = '1H 20 M';

  return (
    <ScrollView>
      <DatePicker/>
      <View style={styles.container}>
        <ProgressBar steps={stepsToday}/>
      </View>

      <View style={styles.separator}></View>

      <View style={styles.container}>
        <PersonalStat 
        steps={stepsToday} 
        streak={CurStreak} 
        timeactive={TimeActive}
        />
      </View>

      <View style={styles.separator}></View>
      <View style={styles.container}>
        <Text style={styles.title}>Your Daily Walking Habit</Text>
        <BarChart data={data} round={100} unit="steps"/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontFamily: 'samsung-sans-medium',
    marginBottom: 20
  },
  separator: {
    marginVertical: 35,
    alignContent: 'center',
    textAlign: 'center',
    marginHorizontal: (Dimensions.get("window").width*0.1),
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
