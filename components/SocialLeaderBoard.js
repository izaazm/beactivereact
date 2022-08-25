import { StyleSheet, Dimensions } from 'react-native';

import { Text, View, ScrollView } from './Themed';
import Leaderboard from 'react-native-leaderboard';

export default function SocialLeaderBoard(props) {
    const data= [
        {Name: props.name1, Steps: props.step1},
        {Name: props.name2, Steps: props.step2},
        {Name: props.name3, Steps: props.step3},
    ]
    return (
        <Leaderboard 
          data={data} 
          sortBy='Steps' 
          labelBy='Name'
        />
    )
}