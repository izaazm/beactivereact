import { StyleSheet, Dimensions } from 'react-native';

import { Text, View, ScrollView } from './Themed';
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

export default function SocialLineChart(props) {
    const data={
        labels: ['12am', '', '', '', '', '', '6am', , '', '', '', '', '', '12pm' , '', '', '', '', '', '6pm', '', '', '', '', ''],
        datasets: [
            {
                data: props.data1,
                strokeWidth: 1,
                color: (opacity = 0.8) => `rgba(97,235,52,${opacity})`, // optional
            },
            {
                data: props.data2,
                strokeWidth: 1,
                color: (opacity = 0.8) => `rgba(246, 250, 0, ${opacity})`, // optional
            },
            {
                data: props.data3,
                strokeWidth: 1,
                color: (opacity = 0.8) => `rgba(45, 252, 173, ${opacity})`, // optional
            },
        ],
        legend: [props.name1, props.name2, props.name3],
    }
    
    const chartConfig={
        fontFamily: 'samsung-sans-bold',
        backgroundColor: "#ffffff",
        backgroundGradientFrom: "#ffffff",
        backgroundGradientTo: "#ffffff",
        decimalPlaces: 0, // optional, defaults to 2dp
        color: (opacity = 0.8) => `rgba(107, 133, 109, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        style: {
          borderRadius: 8
        },
        propsForDots: {
          r: "3",
          strokeWidth: "0.5",
          stroke: "#111111"
        },
        propsForLabels:{
            fontFamily: 'samsung-sans',
        },
        segment:3
    }
    return(
        <LineChart
        data={data}
        width={Dimensions.get("window").width*0.95} // from react-native
        height={220}
        //yAxisSuffix="step"
        chartConfig={chartConfig}
        style={{
          marginVertical: 8,
          borderRadius: 8
        }}
      />
    );
}