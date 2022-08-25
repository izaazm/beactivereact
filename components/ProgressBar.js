import { StyleSheet, Dimensions } from 'react-native';
import { View } from '../components/Themed';
import CircularProgress from 'react-native-circular-progress-indicator';

export default function ProgressBar (props) {
    const steps = props.steps;
    const dimensions = Dimensions.get("window");

    return(
      <View style={styles.container}>
          <CircularProgress
          value={steps}
          progressValueStyle={{fontFamily: 'samsung-sans-bold', color: 'black',}}
          radius={dimensions.width*0.35}
          inActiveStrokeOpacity={0.7}
          activeStrokeWidth={15}
          inActiveStrokeWidth={20}
          activeStrokeSecondaryColor="yellow"
          inActiveStrokeColor='black'
          dashedStrokeConfig={{
          count: 75,
          width: 5,
          }}
          maxValue={10000}
          subtitle={'/10000 steps'}
          subtitleColor={'black'}
          subtitleStyle={{fontFamily: 'samsung-sans-bold', color: 'black', fontSize:24, opacity:0.7}}
          />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});