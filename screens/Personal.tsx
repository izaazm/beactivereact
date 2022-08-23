import { StyleSheet, Dimensions } from 'react-native';

import { Text, View, ScrollView } from '../components/Themed';
import DatePickers from '../components/DatePicker';
import PersonalStat from '../components/PersonalStat';
import BarChart from '../components/Test';

const dimensions = Dimensions.get("window");

export default function Personal() {
  const data = [
    { label: 'Jan', value: 500 },
    { label: 'Feb', value: 312 },
    { label: 'Mar', value: 424 },
    { label: 'Apr', value: 745 },
    { label: 'May', value: 89 },
    { label: 'Jun', value: 434 },
    { label: 'Jul', value: 650 },
    { label: 'Aug', value: 980 },
    { label: 'Sep', value: 123 },
    { label: 'Oct', value: 186 },
    { label: 'Nov', value: 689 },
    { label: 'Dec', value: 643 }
  ]
  return (
    <ScrollView>
      <DatePickers/>
      <View style={styles.separator}></View>
      <View style={styles.container}>
        <BarChart data={data}/>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.container}>
        <PersonalStat/>
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 25,
    height: 1,
    width: '80%',
  },
});
