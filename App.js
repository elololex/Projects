import React, {Component} from 'react';
import { StyleSheet,Header, Title,SafeAreaView, ScrollView, Text, View } from 'react-native';
import {createDrawerNavigator,DrawerItems} from 'react-navigation';

//Screens
import aboutScreen from './screens/about';
import donateScreen from './screens/donate';
import allexercisesScreen from './screens/allexercises';
import leafletScreen from './screens/leaflets';
import myexercisesScreen from './screens/myexercises';
import remindmeScreen from './screens/remindme';
import progressScreen from './screens/progress';




export default class App extends Component {
  render() {
    return (
      <Pages/>
    );
  }
}


const customDrawerComponent = (props)=>(
      <SafeAreaView style={styles.safeArea}>
    
      <View style={styles.header}>

      </View>
      <ScrollView>
        <Text>Hand Therapy</Text>
        <DrawerItems {...props}/>
      </ScrollView>
    </SafeAreaView>
);
const Pages = createDrawerNavigator({
  myexercises:{
    screen:myexercisesScreen
  },
  allexercises:{screen:allexercisesScreen},
  remindme:{
    screen:remindmeScreen},
  progress:{screen:progressScreen},
  leaflet:{screen:leafletScreen},
  donate:{screen:donateScreen},
  about:{screen:aboutScreen}
},{
  contentComponent : customDrawerComponent,
  navigationOptions:{
    title:'Main Menu'
  }
  
});



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
  },
  header : {
    height : 150,
    backgroundColor:'white'
  }
});
