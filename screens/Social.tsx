import { StyleSheet } from 'react-native';

import { Text, View, ScrollView } from '../components/Themed';
import DatePicker from '../components/DatePicker';

export default function Social() {
  return (
    <ScrollView>
      <DatePicker/>
      
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
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
