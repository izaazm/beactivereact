import { StyleSheet, Dimensions } from 'react-native';

import { Text, View, ScrollView } from '../components/Themed';
import DatePicker from '../components/DatePicker';
import SocialLineChart from '../components/SocialLineChart';
import SocialStat from '../components/SocialStat';
import SocialLeaderBoard from '../components/SocialLeaderBoard';

export default function Social() {
  const name1 = 'John'
  const name2 = 'Robert'
  const name3 = 'James'
  const data1 = [0, 0, 0, 430, 430, 905, 1500, 1500, 1500, 2350, 2350, 4000, 5300, 5600, 5600, 5600, 5600, 7200, 7200, 7500, 8400, 8400, 9200, 9200] 
  const data2 = [0, 0, 0, 0, 0, 230, 1200, 1300, 1300, 1300, 1300, 2500, 2600, 5000, 5000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000, 6000] 
  const data3 = [0, 0, 0, 0, 0, 0, 1000, 2000, 2500, 2500, 2500, 2500, 3300, 3300, 3300, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000] 
  const step1 = 9200
  const step2 = 6000
  const step3 = 5000

  return (
    <ScrollView>
      <DatePicker/>
      <View style={styles.container}>
        <Text style={styles.title}>Leaderboard of the Day</Text>
        <SocialLeaderBoard 
        name1={name1} 
        name2={name2} 
        name3={name3}
        step1={step1}
        step2={step2}
        step3={step3}
        />
      </View>
      <View style={styles.separator}></View>
      <View style={styles.container}>
        <SocialStat 
        prevwin={name1} 
        streak={2} 
        totalsteps={22000}
        />
      </View>
      <View style={styles.separator}></View>
      <View style={styles.container}>
        <Text style={styles.title}>Your Group Daily Walking Habit</Text>
        <SocialLineChart 
        name1={name1} 
        name2={name2} 
        name3={name3}
        data1={data1}
        data2={data2}
        data3={data3}
        />
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
