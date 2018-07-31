import { StyleSheet, Header,Text, View } from 'react-native';
import React, {Component} from 'react';

export default class Myexercises extends Component{
    static navigationOptions = {
        drawerLabel: "My Exercises"
    }
    render() {
      return (
        <View style={styles.container}>
        
         <Text>Myexercises</Text>
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
  